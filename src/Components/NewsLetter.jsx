import React, { useState } from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()

    if (!email.trim()) {
      alert('Please enter your email address')
      return
    }

    alert('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <section className="newsletter">
      <div className="newsletter-content">

        <span className="newsletter-tag">
          STAY CONNECTED
        </span>

        <h2>
          Get 10% Off Your First Order
        </h2>

        <p>
          Subscribe to receive updates about new arrivals,
          exclusive offers, and the latest trends.
        </p>

        <form
          className="newsletter-box"
          onSubmit={handleSubscribe}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">
            Subscribe <span>→</span>
          </button>
        </form>

        <small>
          No spam. Just style, offers, and updates.
        </small>

      </div>
    </section>
  )
}

export default NewsLetter
