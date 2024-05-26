import React, { useState } from 'react'
import { productsCat, data } from './productData';
import './p-banner.css'
import { FaArrowRight } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const ProductBanner = () => {

  const [product, setProduct] = useState(data);
  console.log(productsCat);

  const filterProducts = (category) => {
    if (category == "View All") {
      setProduct(data);
    }
    else {
      let finalCategory = data.filter((val) => {
        return val.category == category
      })
      setProduct(finalCategory);
    }

  }

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
                    productsCat.map((item) => {
                      return (
                        <li key={item.id} onClick={() => filterProducts(item.category)} className='product-li my-2 d-flex justify-space-between'>
                          <button className='w-100'>{item.category} <span className=''><FaArrowRight /></span></button>
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

            <div className="col-9 d-flex flex-wrap">
              {
                product.map((item) => {
                  return (
                    <div className="col-3 py-1 px-2">
                      <div className="product-card">
                        <div className="product-image">
                          <div className="image-prod">
                            <img src={item.img} className='w-100' alt="" />
                          </div>
                          <div className="side-view">
                            <a href="#" role='button' className='like mb-2'><IoIosHeartEmpty /></a>
                            <a href="#" role='button' className='view'><FiEye /></a>
                          </div>
                          <div className="shopping-bag">
                            <a href="#"><IoBagOutline /></a>
                          </div>
                        </div>
                        <div className="product-details mt-3">
                          <div className="brand text-center">
                            <a href="#">{item.category}</a>
                            <div className="stars">
                              <span><FaStar /></span>
                              <span><FaStar /></span>
                              <span><FaStar /></span>
                              <span><FaStar /></span>
                              <span><FaRegStar /></span>
                              <span>(4.5)</span>
                            </div>
                          </div>
                          <div className="product-info text-center px-2 my-3">
                            {item.detail}
                          </div>
                          <div className="price">
                            <span className='first'>{item.newprice}</span>
                            <span className='cut'>{item.oldprice}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductBanner
