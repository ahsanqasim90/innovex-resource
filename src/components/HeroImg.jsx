import React from 'react';
import VIDEO1 from '../images/VIDEO1.png'; // Ensure correct file extension
import VIDEO2 from '../images/VIDEO2.png'; // Ensure correct file extension


function HeroImg() {
  return (
    <div>
      <div 
        id="carouselExampleSlidesOnly" 
        className="carousel slide" 
        data-ride="carousel" 
        data-interval="1000" // Change slide every 1 second
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={VIDEO1} alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={VIDEO2} alt="Slide 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
