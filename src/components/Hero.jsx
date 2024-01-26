import React from 'react'
import images from '../assets/photo-grid.png'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={images} alt="airbnb" />
      <div className='hero-text'>
        <h2>Online Experiences</h2>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>

    </div>
  )
}

export default Hero