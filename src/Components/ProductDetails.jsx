
import React, { useState } from 'react'
import './ProductDetails.css'
import { useLocation, useNavigate } from 'react-router-dom'

const ProductDetails = () => {
  const { state } = useLocation()
  const navigate = useNavigate()

  const [qty, setQty] = useState(1)

  // Handle missing product data
  if (!state) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>Please select a product to view its details.</p>
        <button onClick={() => navigate('/')}>
          Back To Home
        </button>
      </div>
    )
  }

  const productImage = Array.isArray(state.image)
    ? state.image[0]
    : state.image

  const price = Number(state.price) || 0
  const totalPrice = price * qty

  const increaseQty = () => {
    setQty(qty + 1)
  }

  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1)
    }
  }

  return (
    <div className="product-details-page">

      {/* Main Product Section */}
      <section className="product-details">

        <div className="product-left">
          <img
            src={productImage}
            alt={state.name || 'Furniture product'}
          />
          <span className="image-label">PREMIUM COLLECTION</span>
        </div>

        <div className="product-right">
          <p className="details-label">CRAFTED FOR YOUR HOME</p>

          <h1>{state.name || 'Premium Furniture'}</h1>

          <div className="details-line"></div>

          <p className="details-description">
            {state.description ||
              'Experience the perfect blend of comfort, quality and timeless design. Made to bring elegance and warmth to your living space.'}
          </p>

          <h2 className="product-price">
            ₹{price.toLocaleString('en-IN')}
          </h2>

          <p className="tax-note">
            Premium quality furniture for everyday living
          </p>

          {/* Quantity */}
          <div className="quantity-area">
            <span>Quantity</span>

            <div className="qty-box">
              <button
                onClick={decreaseQty}
                disabled={qty === 1}
                aria-label="Decrease quantity"
              >
                −
              </button>

              <span>{qty}</span>

              <button
                onClick={increaseQty}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <div className="total-price">
            <span>Total Price</span>
            <h3>₹{totalPrice.toLocaleString('en-IN')}</h3>
          </div>

          <button
            className="buy-btn"
            onClick={() =>
              navigate('/checkout', {
                state: {
                  ...state,
                  qty,
                  totalPrice
                }
              })
            }
          >
            Proceed To Buy <span>→</span>
          </button>

          <div className="delivery-note">
            <span>✓</span>
            <p>Designed for comfort. Made to last.</p>
          </div>
        </div>

      </section>

      {/* Product Highlights */}
      <section className="product-highlights">
        <div className="section-heading">
          <p>WHY YOU'LL LOVE IT</p>
          <h2>Details That Make A Difference</h2>
          <span>
            Thoughtful design meets everyday functionality.
          </span>
        </div>

        <div className="highlight-grid">

          <div className="highlight-card">
            <div className="highlight-icon">✧</div>
            <h3>Timeless Design</h3>
            <p>
              Elegant styling that complements modern and
              classic interiors alike.
            </p>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon">◇</div>
            <h3>Quality Materials</h3>
            <p>
              Carefully selected materials for a beautiful
              finish and everyday use.
            </p>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon">⌂</div>
            <h3>Everyday Comfort</h3>
            <p>
              Designed to make your home feel welcoming,
              relaxing and effortlessly stylish.
            </p>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon">♡</div>
            <h3>Made For Living</h3>
            <p>
              Furniture that brings beauty and practicality
              together in your everyday spaces.
            </p>
          </div>

        </div>
      </section>

      {/* Product Information */}
      <section className="product-information">

        <div className="information-image">
          <img
            src={productImage}
            alt={state.name || 'Furniture detail'}
            loading="lazy"
          />
        </div>

        <div className="information-content">
          <p className="details-label">A LITTLE MORE ABOUT IT</p>

          <h2>
            Your Space.
            <br />
            Your Style.
          </h2>

          <p>
            The right furniture does more than fill a room.
            It creates a place to unwind, spend time with loved
            ones and enjoy the little moments of everyday life.
          </p>

          <p>
            With its considered design and versatile look,
            {` ${state.name || 'this piece'} `} can become a
            beautiful addition to your home.
          </p>

          <div className="care-box">
            <h3>Care Instructions</h3>
            <p>
              Dust regularly with a soft cloth. Clean spills
              promptly and follow the care guidance appropriate
              for the product's material.
            </p>
          </div>
        </div>

      </section>

      {/* Delivery Information */}
      <section className="service-strip">

        <div className="service-item">
          <span>01</span>
          <div>
            <h3>Delivery Information</h3>
            <p>Check delivery availability at checkout.</p>
          </div>
        </div>

        <div className="service-item">
          <span>02</span>
          <div>
            <h3>Product Quality</h3>
            <p>Explore furniture made for everyday living.</p>
          </div>
        </div>

        <div className="service-item">
          <span>03</span>
          <div>
            <h3>Need Assistance?</h3>
            <p>Have questions? We're here to help.</p>
            <button
              className="contact-link"
              onClick={() => navigate('/contact')}
            >
              Contact Us →
            </button>
          </div>
        </div>

      </section>

      {/* Bottom Banner */}
      <section className="product-bottom-banner">
        <p>MAKE YOUR HOUSE FEEL LIKE HOME</p>
        <h2>Good Design. Better Living.</h2>
        <button onClick={() => navigate('/')}>
          Explore More Furniture →
        </button>
      </section>

    </div>
  )
}

export default ProductDetails
