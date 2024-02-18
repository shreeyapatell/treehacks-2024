import React from 'react';

const DisplayImages = () => {
  // Dynamically import all image filenames from the images folder
  const imageContext = require.context('/Users/shreeyapatel/Projects/Hackathons/treehacks/memory-playground/images/', false, /\.(png|jpe?g|svg)$/);
  const images = imageContext.keys().map(imageContext);

  console.log("../../images/" + images)

  return (
    <div>
      <h2>Images</h2>
      <div className="container">
        {images.map((images, index) => (
          <img
            key={index}
            src={images}
            alt={'image ${index}'}
            className="generated-image"
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayImages;
