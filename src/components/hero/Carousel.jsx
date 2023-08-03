// ImageSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import './Carousel.css'
// Import images
import image1 from '../../assets/images/image-1.png';
import image2 from '../../assets/images/image-3.jpg';
import image3 from '../../assets/images/image-1.png';

const images = [image1, image2, image3];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider  {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img className='slider-container' src={image} alt={`Image ${index + 1}`} />
            <div className="overlay">
              <h1>{`Image ${index + 1}`}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;









