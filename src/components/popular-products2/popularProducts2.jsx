import React, { useEffect, useState } from 'react'
import { productsCat, data } from '../p-banner/productData';
import { FaArrowRight } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import '../category/category.css'
import './popularProducts2.css'
// import '../offers/slick'
// import '../offers/slick.css'
// import "../jquery.min"

const PopularProducts2 = () => {

  const [product, setProduct] = useState(data);

  return (
    <div className='py-5'>
      <div className="pp2">
        <div className="container">
          <div className="row">
            <div className="col-6 px-3 d-flex flex-wrap">
              {/* <div className="slider">           */}
              {
                product.map((item, i) => {
                  if (i <= 1) {
                    return (
                      <div className="col-6 p-2">
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
                  }
                })
              }
              {/* </div> */}
            </div>

            <div className="col-6">
              <div className="product-rightview p-2">
                <img src="img/pp2/products-rightview.jpg" className='w-100' alt="" />
                <div className="rightview-content">
                  <h3>Organic & Healthy <br /> Vegetables</h3>
                  <p><span>25% </span>
                    Off</p>
                  <div className=""><button className='shopnow-btn'>Shop now</button></div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularProducts2
