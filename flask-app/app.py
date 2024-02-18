from flask import Flask, request, render_template 
from setup import OPENAI_API_KEY

import openai 

app = Flask(__name__)
openai.api_key = OPENAI_API_KEY
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
            Example output:
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
        chat = openai.chat.completions.create( 
            model="gpt-3.5-turbo", messages=messages 
        ) 
        reply = chat.choices[0].message.content 
        print(f"ChatGPT: {reply}")
        messages.append({"role": "assistant", "content": reply})
        
        # additions
        message = """
            Here is a JSON format array where each item represents a category. For each category generate two NEW words that fit the category. 
            Do not include provided words. Ouput these words in a JSON array, where each item represents a category. 
            It's crucial that the response only contains the JSON array with the specified attributes and no additional text.
            Example output:
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
        chat = openai.chat.completions.create( 
            model="gpt-3.5-turbo", messages=messages 
        ) 
        additions = chat.choices[0].message.content 
        print(f"ChatGPT: {additions}")
        messages.append({"role": "assistant", "content": reply})
        
        return reply + additions
    return render_template("index.html")
 
if __name__=='__main__':
   app.run()
if __name__ == '__main__':
    app.run(debug=True)
