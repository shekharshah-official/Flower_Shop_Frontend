import React from 'react';
import image6 from './../Assets/images/img6.jpeg'

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 'Rs. 1000',
      image: image6,
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$75',
      image: image6,
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$100',
      image: image6,
    },
    {
      id: 4,
      name: 'Product 4',
      price: '$150',
      image: image6,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-64 h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
