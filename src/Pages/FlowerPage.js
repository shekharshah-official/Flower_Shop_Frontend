import React from 'react'
import Flower from '../Components/Flower'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const FlowerPage = () => {
  return (
    <div>
      
        <Navbar />
        <div className='mt-4'>

        <Flower />
        </div>
        <Footer />
    </div>
  )
}

export default FlowerPage