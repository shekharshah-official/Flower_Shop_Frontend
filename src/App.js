import React from 'react'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import ProductGrid from './Components/ProductGrid'
const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ProductGrid />
      </div>
      
    </div>
  )
}

export default App