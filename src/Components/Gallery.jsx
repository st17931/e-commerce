
import './Slider.css'
import  '/src/assets/logo1.png'
import '/src/assets/logo2.png'
import '/src/assets/logo3.png'
// import logo4 from '/src/assets/logo4.png'
import React from 'react';
import Slider from 'react-slick';

// CSS for react-slick carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Image component to be used in the carousel
const ImageSlide = ({ src, alt }) => (
 <div className="gallary">
  <div className='col'>
    <img src={src} alt={alt}  />
    
    </div>
  </div>
);

// Functional component for the automatic sliding image carousel
const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 2000, // Autoplay interval (milliseconds)
    responsive: [
      {
        breakpoint: 500, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
    
      // Add more breakpoints and corresponding settings as needed
    ],
  
  };

  // Images data (replace with your image URLs)
  const images = [
    { src: '/src/assets/g1.png', alt: 'Image 1' },
    { src: '/src/assets/g2.png', alt: 'Image 2' },
    { src:'/src/assets/g3.png', alt: 'Image 3' },
    { src:'/src/assets/g4.png', alt: 'Image 3' },
    { src:'/src/assets/g5.png', alt: 'Image 3' },
  ];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <ImageSlide key={index} src={image.src} alt={image.alt} />
      ))}
    </Slider>
  );
};

export default Gallery;
