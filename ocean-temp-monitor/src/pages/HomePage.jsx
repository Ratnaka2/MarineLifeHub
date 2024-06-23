// src/pages/HomePage.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './HomePage.css';
import Map from '../assets/cartoon-map.png'; // example map image

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to MarineLifeHub</h1>
      <img src={Map} alt="Cartoon Map" className="map-image" />
    </div>
  );
};

export default HomePage;
