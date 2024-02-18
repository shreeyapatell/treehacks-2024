import React from 'react';
import { useParams } from 'react-router-dom';
import kitchen from '../assets/kitchen.png';
import farm from '../assets/farm.png';
import { useState } from 'react';

const AboutPage = () => {
  
    return (
        <div>
        <h2>about</h2>
        <p class="container">
        🧠 Building a digital Memory Playground to help boost memory recall and retention. <br></br><br></br>

        🏰 How can we use the <i>Memory Palace</i> – a technique where people can associate mnemonic images in their mind to places they know – to help prevent and ease the lives of those with Alzheimer’s and dementia?<br></br><br></br>

        👨‍👩‍👧‍👦 Built for everyone, especially senior citizens and those with Alzheimer’s and dementia.<br></br><br></br>


        <b>Why it’s urgent:</b> Alzheimer’s and dementia is not only a personal health crisis but impacts family, friends, and caregivers. Important to focus on prevention and slow progression of symptoms related to memory loss.
        </p>
        </div>
    );
  };

  export default AboutPage;