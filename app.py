from flask import Flask, request, render_template 
from openai import OpenAI
from setup import IMAGE_TOGETHER_API_KEY
from setup import OPENAI_API_KEY
import together
import base64
import json

client = OpenAI(api_key=OPENAI_API_KEY)
together.api_key = IMAGE_TOGETHER_API_KEY

app = Flask(__name__)
messages = [ {"role": "system", "content": "You are a intelligent assistant."} ]

@app.route('/', methods =["GET", "POST"])

def gfg():
    if request.method == "POST":
        # categorize input
        words = request.form.get("words")
        message = f"""
            Please cluster the words into catagories. Assign a name to each category.
            Your response should be formatted as a JSON array, where each item represents a category.
            For each category, include the included words as attributes.
            It's crucial that the response only contains the JSON array with the specified attributes and no additional text.
            Example format:
            [
            {{
                "category1": ["word1", "word4"],
                "category2": ["word2", "word3"],
            }}
            ]
            Here is the text:
            """
        message += words
        messages.append( 
            {"role": "user", "content": message}, 
        ) 
        chat = client.chat.completions.create( 
            model="gpt-3.5-turbo", messages=messages, response_format={"type": "json_object"} 
        ) 
        reply = chat.choices[0].message.content 
        print(f"ChatGPT: {reply}")
        messages.append({"role": "assistant", "content": reply})
        
        # additions
        message = """
            Here is a JSON format array where each item represents a category. For each category generate two NEW words that fit the category. 
            Do not include provided words. Ouput these words in a JSON array, where each item represents a category. 
            It's crucial that the response only contains the JSON array with the specified attributes and no additional text.
            Example format:
            [
            {
                "category1": ["newword1", "newword2"],
                },
                {
                "category2": ["newword3", "newword4"],
                }
            ]
            Here is the text:
            """
        message += words
        messages.append( 
            {"role": "user", "content": message}, 
        ) 
        chat = client.chat.completions.create( 
            model="gpt-3.5-turbo", messages=messages 
        ) 
        additions = chat.choices[0].message.content 
        print(f"ChatGPT: {additions}")
        print(type(reply))
        messages.append({"role": "assistant", "content": reply})
        print("Start")

        reply_data = json.loads(reply)
        additions_data = json.loads(additions)

        def category_images(data):
            categories = {}
            for item in data:
                for category, objects in item.items():
                    categories[category]=objects

            for cat in categories.values():
                for obj in cat:
                    # print(obj)
                    prompt ="one isolated, standalone " + obj + " on countertop. close-up, centered, high-resolution, accurate, colored, detailed representation, real life. Image corners should be empty"
                    # generate image. don't change height and width
                    response = together.Image.create(prompt=prompt, model="stabilityai/stable-diffusion-xl-base-1.0", height=1024, width=1024, results=1)
                    # save the image
                    image_file = "images/" + str(obj) + ".png"
                    image = response["output"]["choices"][0]
                    with open(image_file, "wb") as f:
                        f.write(base64.b64decode(image["image_base64"]))
            return categories

        categories_reply = category_images(reply_data)
        categories_additions = category_images(additions_data)


        # for category in reply:
        #     for obj in reply[category]:
        #         print("obj:", obj)
        
        return reply + additions
    return "hello"


 
if __name__=='__main__':
   app.run()
if __name__ == '__main__':
    app.run(debug=True)