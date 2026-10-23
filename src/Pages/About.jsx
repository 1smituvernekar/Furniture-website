import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about">

      <div className="about-container">

        <div className="about-left">
          <h1>About Us</h1>

          <p>
            Welcome to our furniture store. We create beautiful modern furniture
            designed for comfort, style and everyday living.
          </p>

          <p>
            From premium sofas to handcrafted wooden chairs, every piece is made
            with quality materials and elegant design.
          </p>

          <p>
            Our goal is to make your home warm, stylish and comfortable with
            furniture you’ll love for years.
          </p>
        </div>

        <div className="about-right">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            alt=""
          />
        </div>

      </div>

    </section>
  )
}

export default About