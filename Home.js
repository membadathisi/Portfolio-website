import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import images from '../data';
import './Home.css';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const handleApplyNowClick = () => {
    navigate('/application'); // Redirect to the application form
  };

  return (
    <div className="home">
      <div
        className="slideshow-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      <div className="apply-now-container">
        <button className="apply-now-button" onClick={handleApplyNowClick}>
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Home;
