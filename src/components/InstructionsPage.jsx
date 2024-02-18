import React from 'react';
import { useParams } from 'react-router-dom';
import kitchen from '../assets/kitchen.png';
import farm from '../assets/farm.png';
import { useState } from 'react';

const InstructionsPage = () => {
  
    return (
        <div>
        <h2>how to use</h2>
        <p class="container">
        1. choose from different maps/environments templates to build a customizable digital playground (ex: kitchen, farm, etc.) <br></br><br></br>

        2. use text to generate images using AI to associate objects and faces as mnemonic images with different locations in the digital playground<br></br><br></br>

        3. work on memory training exercises where you can drag and drop images into a setting and gets AI-generated similar objects to match to specific categories<br></br><br></br>
        
        4. improve memory recall and retention!


        </p>
        </div>
    );
  };

  export default InstructionsPage;