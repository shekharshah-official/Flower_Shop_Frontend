import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Footer from '../Components/Footer'
import ProductGrid from '../Components/ProductGrid'
import TempHomePage from './TempHomePage'

const Home = () => {
  return (
    <div>
    <Navbar />
    <Carousel />
    <ProductGrid />
    <Footer />  
      
    </div>
  )
}

export default Home