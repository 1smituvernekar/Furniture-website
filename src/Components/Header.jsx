import React from 'react'
import './Header.css'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-left">
        <p className='tag'>Modern Furniture Collection</p>

        <h1>
          Make Your Home <br />
          Stylish & Comfortable
        </h1>

        <p className='desc'>
          Discover premium sofas and elegant chairs designed to bring
          comfort, beauty and warmth into your living space.
        </p>

        <div className="header-btns">
          <button onClick={'/products'} className='shop-btn'>Shop Now</button>
          <button onClick={'/products'} className='view-btn'>View Collection</button>
        </div>
      </div>

      <div className="header-right">
        <img src={assets.hero} alt="Furniture Hero" />
      </div>
    </div>
  )
}

export default Header