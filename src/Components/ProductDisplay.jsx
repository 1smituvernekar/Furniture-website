import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../Context/ShopContext'

const ProductDisplay = () => {
  const { products } = useContext(ShopContext)

  return (
    <section className="product-display">
      <h2>All Products</h2>

      <div className="product-grid">
        {products.map((item, index) => (
          <div key={index} className="product-card">

            <img
              src={Array.isArray(item.image) ? item.image[0] : item.image}
              alt={item.name}
              className="product-image"
            />

            <h3>{item.name}</h3>
            <p>{item.description}</p>
            

          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductDisplay