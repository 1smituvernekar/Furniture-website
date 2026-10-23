
import React from 'react'
import Header from '../Components/Header'
import Discover from '../Components/Discover'
import ProductDisplay from '../Components/ProductDisplay'
import Collections from '../Components/Collections'
import Newsletter from '../Components/NewsLetter'
import Footer from '../Components/Footer'
import SofaPage from '../Components/SofaPage'

const Home = () => {
  return (
    <div>
      <Header />
      <Discover />
      <SofaPage />
      <ProductDisplay />
      <Collections />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
