
import React, { useContext } from 'react'
import './Collections.css'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Collections = () => {
  const navigate = useNavigate()
  const { products } = useContext(ShopContext)

  const bestSeller = products.slice(0, 4)

  return (
    <section className="collections">
      <h2>Featured Products</h2>

      <div className="product-grid">
        {bestSeller.map((item, index) => (
          <div key={item._id || index} className="product-card">

            <img
              src={
                Array.isArray(item.image)
                  ? item.image[0]
                  : item.image
              }
              alt={item.name}
              className="product-image"
            />

            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <h4>₹{item.price}</h4>

            <button
              onClick={() =>
                navigate(`/product/${item._id}`, { state: item })
              }
            >
              Buy Now
            </button>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Collections
