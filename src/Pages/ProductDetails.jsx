import React, { useState } from 'react'
import './ProductDetails.css'
import { useLocation, useNavigate } from 'react-router-dom'

const ProductDetails = () => {
  const { state } = useLocation()
  const navigate = useNavigate()

  const [qty, setQty] = useState(1)

  const increaseQty = () => {
    setQty(qty + 1)
  }

  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1)
    }
  }

  const totalPrice = state.price * qty

  return (
    <div className="product-details">

      <div className="product-left">
        <img src={state.image} alt={state.name} />
      </div>

      <div className="product-right">
        <h1>{state.name}</h1>

        <p>{state.description}</p>

        <h2>₹{state.price}</h2>

        <div className="qty-box">
          <button onClick={decreaseQty}>-</button>
          <span>{qty}</span>
          <button onClick={increaseQty}>+</button>
        </div>

        <h3>Total: ₹{totalPrice}</h3>

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
          Proceed To Buy
        </button>

      </div>

    </div>
  )
}

export default ProductDetails