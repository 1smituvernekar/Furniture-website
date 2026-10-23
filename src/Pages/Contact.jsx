import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">

      <div className="contact-container">

        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you. Send us a message anytime.
        </p>

        <form className="contact-form">

          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Email Address" />

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button>Send Message</button>

        </form>

      </div>

    </section>
  )
}

export default Contact