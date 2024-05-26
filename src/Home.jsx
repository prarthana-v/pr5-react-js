import React from 'react'
import Navbar from './components/navbar/navbar'
import Slider from './components/slider/slider'
import Category from './components/category/category'
import Header from './components/header/header'
import ProductBanner from './components/p-banner/p-banner'
import Offers from './components/offers/offers'
import Deal from './components/deal/deal'
import PopularProducts2 from './components/popular-products2/popularProducts2'


const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Slider />
      <Category />
      <ProductBanner />
      <Offers />
      <Deal />
      <PopularProducts2 />
    </div>
  )
}

export default Home
