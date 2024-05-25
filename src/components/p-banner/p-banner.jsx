import React, { useState } from 'react'
import './p-banner.css'
import { productCategory } from './p-data'
import { FaArrowRight } from "react-icons/fa6";

const ProductBanner = () => {

  const [product, setProduct] = useState(productCategory);

  return (
    <div>
      <div className="p-banner py-5">
        <div className="container">
          <div className="col-12">
            <div className="product-banner">
              <h1 className="product-title mb-4">Popular Products</h1>
              <h2 className="product-sub-title pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="product-box ">
                <ul className='product-ul ps-0 mb-0'>
                  {
                    product.map((item) => {
                      return (
                        <li key={item.id} className='product-li my-2 d-flex justify-space-between'>
                          <button className='w-100'>{item.product} <span className=''><FaArrowRight /></span></button>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className="product-banner pt-4">
                <div className="banner-img">
                  <img src="img/product-banner.jpg" className='w-100' alt="" />
                </div>
                <div className="banner-content ps-0">
                  <h4 className='title'>Juicy</h4>
                  <h5>Fruits</h5>
                  <span className='mb-3'>100% Natural</span>
                  <button className='shopnow-btn'>Shop now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductBanner
