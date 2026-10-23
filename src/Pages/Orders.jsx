
import React from 'react'
import './Orders.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Orders = () => {
  const { state } = useLocation()
  const navigate = useNavigate()

  // Prevent error when state is null
  if (!state) {
    return (
      <div className="orders">
        <div className="empty-orders">
          <div className="empty-icon">📦</div>

          <h1>My Orders</h1>

          <p>
            You haven't placed an order yet.
            Explore our collection and find something you love.
          </p>

          <button onClick={() => navigate('/products')}>
            Continue Shopping →
          </button>
        </div>
      </div>
    )
  }

  const orderImage = Array.isArray(state.image)
    ? state.image[0]
    : state.image

  const quantity = Number(state.qty) || 1

  const totalPrice =
    Number(state.totalPrice) ||
    (Number(state.price) || 0) * quantity

  return (
    <div className="orders">

      <div className="orders-heading">
        <p>YOUR SHOPPING JOURNEY</p>
        <h1>My Orders</h1>
        <span>Thank you for shopping with us.</span>
      </div>

      <div className="order-card">

        <div className="order-image">
          <img
            src={orderImage}
            alt={state.name || 'Ordered product'}
          />
        </div>

        <div className="order-info">

          <div className="order-success">
            <span className="success-icon">✓</span>
            <span>Order Placed Successfully</span>
          </div>

          <h2>{state.name || 'Furniture Product'}</h2>

          <p className="order-description">
            {state.description || 'Thank you for your purchase.'}
          </p>

          <div className="order-detail">
            <span>Quantity</span>
            <strong>{quantity}</strong>
          </div>

          <div className="order-detail">
            <span>Price per item</span>
            <strong>
              ₹{(Number(state.price) || 0).toLocaleString('en-IN')}
            </strong>
          </div>

          <div className="order-total">
            <span>Total Amount</span>
            <h3>₹{totalPrice.toLocaleString('en-IN')}</h3>
          </div>

          <button
            className="continue-btn"
            onClick={() => navigate('/products')}
          >
            Continue Shopping →
          </button>

        </div>
      </div>

      <div className="order-footer">
        <h3>Thank You For Choosing Us!</h3>
        <p>
          We hope your new furniture makes your home feel
          even more comfortable and beautiful.
        </p>
      </div>

    </div>
  )
}

export default Orders
