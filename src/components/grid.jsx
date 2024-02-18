import React from 'react';
import { Link } from 'react-router-dom';

const ImageWithLabel = ({ imageUrl, label }) => {
  return (
    <div style={styles.container}>
      <Link to={`/detail/${label}`} style={styles.link}>
        <img src={imageUrl} alt="place" style={styles.image} />
        <div style={styles.label}>{label}</div>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    border: 'none',
    background:'white',
    boxShadow: '10px 10px 10px 10px #eee',
    width: '500px',
    borderRadius: '8px',
    padding: '15px',
    textAlign: 'center',
    marginLeft: '20px',
    display: 'inline-block',
  },
  image: {
    maxWidth: '100%',
    borderRadius: '6px',
  },
  label: {
    marginTop: '10px',
    color: '#AA1C20',
    ':hover': {              // Change color on hover
      color: '#FF5733',
    },
  },
  link: {
    textDecoration: 'none', // Remove underline

  },
};

export default ImageWithLabel;
