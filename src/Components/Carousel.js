import React, { useState } from 'react';
import image1 from './../Assets/images/img1.jpeg'
import image2 from './../Assets/images/img2.jpeg'
import image3 from './../Assets/images/img3.jpeg'

const Carousel = () => {
  // List of images or content for the carousel
  const slides = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden relative">
        {/* Carousel Inner Wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl p-2"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl p-2"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 mx-2 rounded-full ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
