// src/components/Flower.js
import React from 'react';

const Flower = () => {
  const flowers = [
    {
      id: 1,
      name: 'Rose',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Rosa_cultivars.jpg',
      description: 'A beautiful red rose, a symbol of love and passion.',
      price: 10,
    },
    {
      id: 2,
      name: 'Tulip',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Tulips_in_Keukenhof%2C_Netherlands.jpg',
      description: 'A lovely tulip available in various vibrant colors.',
      price: 8,
    },
    {
      id: 3,
      name: 'Sunflower',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Sunflower_Summer.jpg',
      description: 'A bright and cheerful sunflower that follows the sun.',
      price: 12,
    },
    {
      id: 4,
      name: 'Lily',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Lily.JPG',
      description: 'An elegant white lily, symbolizing purity and grace.',
      price: 15,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center mt-8 pt-4">
      {flowers.map((flower) => (
        <div key={flower.id} className="border rounded-lg shadow-lg p-4 m-4 bg-white hover:shadow-xl transition-shadow duration-200">
          <img
            src={flower.image}
            alt={flower.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-xl font-bold mt-2">{flower.name}</h2>
          <p className="text-gray-600 mt-1">{flower.description}</p>
          <p className="text-lg font-semibold mt-2">${flower.price}</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Flower;
