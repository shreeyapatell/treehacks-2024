import React, { useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import kitchen from '../assets/kitchen.png';
import farm from '../assets/farm.png';
import Axios from 'axios';

const DetailPage = () => {
  const { label } = useParams();
  const navigate = useNavigate(); // Import useNavigate hook
  const imageSrc = label === 'kitchen' ? kitchen : label === 'farm' ? farm : null;
  const url = "/api";

  const [data, setData] = useState({ words: "" });
  const [submitted, setSubmitted] = useState(false);

  function submit(e) {
    e.preventDefault();
    Axios.post(url, { words: data.words }).then(() => {
      setSubmitted(true);
      // Navigate to "/displayimages" route after form submission
      navigate("/displayimages");
    }).catch(error => {
      console.error('Error submitting form:', error);
    });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  return (
    <div>
      <h3>Welcome to the {label}! </h3>
      <form onSubmit={(e) => submit(e)}>
        <label htmlFor="words">Words: </label>
        <input type="text" onChange={(e) => handle(e)} id="words" name="words" placeholder="Words" />
        <button type="submit" className="submitButton">Submit</button>
      </form>
      {submitted && <button onClick={() => navigate("/displayimages")}>Go to Display Images</button>}
      <img src={imageSrc} alt={label} className="detailImage" />
    </div>
  );
};

export default DetailPage;
