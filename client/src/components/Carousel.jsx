import React, { useEffect, useState } from 'react'
const images = [
    'https://images.pexels.com/photos/5864643/pexels-photo-5864643.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/269141/pexels-photo-269141.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1442005/pexels-photo-1442005.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1124837/pexels-photo-1124837.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];
export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }, []);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  return (
    <div>
         <div className="relative w-full max-w-2xl mx-auto h-screen">
      <div className="overflow-hidden relative h-96 bg-gray-200">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute  inset-0 transition-transform duration-700 ease-in-out transform ${
              index === currentIndex ? 'translate-x-0' : '-translate-x-full'
            } ${index === (currentIndex - 1 + images.length) % images.length ? 'translate-x-full' : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-md" />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-0 p-2 bg-gray-600 text-white rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-0 p-2 bg-gray-600 text-white rounded-full"
      >
        &#10095;
      </button>
    </div>
    </div>
  )
}
