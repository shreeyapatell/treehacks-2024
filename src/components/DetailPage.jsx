import React from 'react';
import { useParams } from 'react-router-dom';
import kitchen from '../assets/kitchen.png';
import farm from '../assets/farm.png';
import { useState } from 'react';
// import {DndContext} from '@dnd-kit/core';

// import {Draggable} from './Draggable';
// import {Droppable} from './Droppable';

const DetailPage = () => {
  const { label } = useParams();
  const something = "../assets/" + label + ".png";
  const imageSrc = label === 'kitchen' ? kitchen : label === 'farm' ? farm : null;

  return (
    <div>
      <h3>Welcome to the {label}! </h3>
      <form action="http://127.0.0.1:5000/" method="post">
        <label for="Word1">Words: </label>
        <input type="text" id="words" name="words" placeholder="words"></input>
        <button type="submit" class="submitButton">Submit</button>
      </form>
      <img src={imageSrc} class="detailImage"/>
    </div>
  );
};
// apple,pear,soccer
export default DetailPage;
