import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Footer from '../Components/Footer'
import ProductGrid from '../Components/ProductGrid'

const Home = () => {
  return (
    <div>
        <Navbar />
      <Carousel />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ProductGrid />
      </div>
      <Footer />
      
    </div>
  )
}

export default Home