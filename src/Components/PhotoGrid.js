import React from 'react';
import '../index.css'

const PhotoGrid = () => {
  // Example image URLs
  const images = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ];

  return (
    <>
      {images.map((src, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded shadow-lg">
          <img src={src} alt={`Image ${index + 1}`} className="w-full h-auto rounded" />
        </div>
      ))}
    </>
  );
};

export default PhotoGrid;
