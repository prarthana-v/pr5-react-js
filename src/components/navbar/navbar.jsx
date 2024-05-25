import React from 'react'
import { HiMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      {/* nabvar */}
      <div className="container">
        <div className="row top-navbar d-flex justify-content-between align-items-center">
          <div className="col-1">
            <div className="toggle-icon">
              <a class=" border fs-5">
                <HiMenuAlt1 />
              </a>
            </div>
          </div>
          <div className="col-6  d-flex justify-content-center">
            <ul class="menu d-flex mb-0 ps-0 justify-content-end">
              <li class="">
                <a class="" href="#">Home</a>
              </li>
              <li class="">
                <a class="" href="#">Category <span><FaAngleDown /></span></a>

              </li>
              <li class="">
                <a class="" href="#">Products <span><FaAngleDown /></span></a>

              </li>
              <li class="">
                <a class=" " href="#">Pages <span><FaAngleDown /></span></a>

              </li>
              <li class="">
                <a class=" " href="#">Blog<span><FaAngleDown /></span></a>

              </li>
              <li class="">
                <a class="" href="#">Elements <span><FaAngleDown /></span></a>
              </li>

            </ul></div>
          <div className="col-2 d-flex justify-content-end">
            <div className="calling d-flex align-items-center">
              <span><IoIosCall /></span><a href="#">+123 ( 456 ) ( 7890 )</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
