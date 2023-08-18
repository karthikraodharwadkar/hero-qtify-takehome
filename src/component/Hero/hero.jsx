import React from 'react'
import heroimage from '../../assest/heroimage.svg'
import './hero.css'

const hero = () => {
  return (
    <div className='hero-section'>
        <div className='hero-text'>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <img src={heroimage} alt="headphone" />
    </div>
  )
}

export default hero