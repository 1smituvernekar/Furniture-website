import React from 'react'
import './SofaPage.css'

const SofaPage = () => {
  return (
    <section className='sofa-collection'>

      <div className='collection-image-side'>

        <div className='floating-card top-card'>
          <h3>Premium Comfort</h3>
          <p>Soft fabric with elegant finish</p>
        </div>

        <img
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop'
          alt='sofa'
          className='collection-image'
        />

        <div className='floating-card bottom-card'>
          <span>Starting at ₹38,999</span>
        </div>

      </div>

      <div className='collection-content'>
        <p className='small-text'>SOFA COLLECTION</p>

        <h2>
          Crafted For <br />
          Relaxed Living
        </h2>

        <p>
          Bring warmth and elegance into your living room with
          modern sofas designed for everyday comfort.
          Built with premium materials, soft cushions and timeless design.
        </p>

        <button>View Collection</button>
      </div>

    </section>
  )
}

export default SofaPage