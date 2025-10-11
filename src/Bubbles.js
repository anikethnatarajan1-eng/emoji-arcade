import React from 'react';
import './styles/Home.css';

const Bubble = ({ title, image, link }) => {
  return (
    <a href={link} className="bubble" style={{ backgroundImage: `url(${image})` }}>
      <div className="bubble-title">{title}</div>
    </a>
  );
};

export default Bubble;
