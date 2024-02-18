import React from 'react';

const DisplayImages = () => {
  // Dynamically import all image filenames from the images folder
  const imageContext = require.context('/Users/shreeyapatel/Projects/Hackathons/treehacks/memory-playground/images', false, /\.(png|jpe?g|svg)$/);
  const imageNames = imageContext.keys();

  return (
    <div>
      <h2>Images</h2>
      <div className="container">
        {imageNames.map((imageName, index) => (
          <img
            key={index}
            src={imageName}
            alt={imageName}
            className="image"
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayImages;
