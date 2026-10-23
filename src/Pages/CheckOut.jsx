import React, { useState } from 'react'
import './CheckOut.css'
import { useLocation, useNavigate } from 'react-router-dom'

const CheckOut = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const state = location.state

  const [paymentMethod, setPaymentMethod] = useState('COD')

  if (!state) {
    return <h2>No product selected</h2>
  }

  const placeOrder = () => {
    navigate('/orders', {
      state: state
    })
  }

  return (
    <div className="checkout-page">

      <div className="order-summary">
        <h2>Order Summary</h2>

        <img src={state.image} alt={state.name} />

        <h3>{state.name}</h3>

        <p>{state.description}</p>

        <p>Qty: {state.qty}</p>

        <h2>Total: ₹{state.totalPrice}</h2>
      </div>

      <div className="address-box">
        <h2>Delivery Address</h2>

        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Pincode" />

        <h2>Payment Method</h2>

        <div className="payment-methods">

          <label>
            <input
              type="radio"
              value="COD"
              checked={paymentMethod === 'COD'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash On Delivery
          </label>

          <label>
            <input
              type="radio"
              value="Razorpay"
              checked={paymentMethod === 'Razorpay'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Razorpay
          </label>

          <label>
            <input
              type="radio"
              value="Stripe"
              checked={paymentMethod === 'Stripe'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Stripe
          </label>

        </div>

        <button
          className="place-order-btn"
          onClick={placeOrder}
        >
          Place Order
        </button>

      </div>

    </div>
  )
}

export default CheckOut