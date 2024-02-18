import React, { useState } from 'react';

const DisplayImages = () => {
  // Dynamically import all image filenames from the images folder
  const imageContext = require.context('../../images/', false, /\.(png|jpe?g|svg)$/);
  const images = imageContext.keys().map(imageContext);

  const [imageStates, setImageStates] = useState(images.map(() => ({ x: 0, y: 0, dragging: false })));

  const handleMouseDown = (index, e) => {
    e.stopPropagation(); // Prevent event bubbling to parent elements
    const newPosition = { x: e.clientX, y: e.clientY };
    setImageStates((prevState) =>
      prevState.map((state, i) => (i === index ? { ...state, dragging: true, offset: newPosition } : state))
    );
  };

  const handleMouseMove = (index, e) => {
    e.stopPropagation(); // Prevent event bubbling to parent elements
    setImageStates((prevState) =>
      prevState.map((state, i) => {
        if (i === index && state.dragging) {
          const newPositionX = e.clientX - state.offset.x;
          const newPositionY = e.clientY - state.offset.y;
          return { ...state, x: newPositionX, y: newPositionY };
        }
        return state;
      })
    );
  };

  const handleMouseUp = (index) => {
    setImageStates((prevState) =>
      prevState.map((state, i) => (i === index ? { ...state, dragging: false } : state))
    );
  };

  return (
    <div>
      <h2>Images</h2>
      <p>Drag the images into your own groupings!</p>
      <div className="container">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
            className="generated-image"
            style={{
              position: 'relative',
              left: imageStates[index].x,
              top: imageStates[index].y,
              cursor: imageStates[index].dragging ? 'grabbing' : 'grab',
              userSelect: 'none',
            }}
            onMouseDown={(e) => handleMouseDown(index, e)}
            onMouseMove={(e) => handleMouseMove(index, e)}
            onMouseUp={() => handleMouseUp(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayImages;
