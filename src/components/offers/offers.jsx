import React from 'react'
import './offers.css'
import "../jquery.min"
import './slick'
import './slick.css'


const Offers = () => {
  // slider slick

  return (
    <div className='py-5'>
      <div className="container">
        <div className="row">

          {/* slider */}
          <div class="slider">
            <div className="col-4">
              <div className="offer-banner">
                <div className="offer-image">
                  <img src="img/offers/pb1.jpg" className='w-100' alt="" />
                </div>
                <div className="offer-content">
                  <h5>
                    Healthy
                    <br />
                    Bakery Products
                  </h5>
                  <p>
                    <span className='off'>30%</span>
                    <span className='off-text'>on first order</span>
                  </p>
                  <div className=""><button className='shopnow-btn'>Shop now</button></div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="offer-banner">
                <div className="offer-image">
                  <img src="img/offers/pb2.jpg" className='w-100' alt="" />
                </div>
                <div className="offer-content">
                  <h5>
                    Fresh
                    <br />
                    Snacks and Sweets
                  </h5>
                  <p>
                    <span className='off'>20%</span>
                    <span className='off-text'>on first order</span>
                  </p>
                  <div className=""><button className='shopnow-btn'>Shop now</button></div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="offer-banner">
                <div className="offer-image">
                  <img src="img/offers/pb3.jpg" className='w-100' alt="" />
                </div>
                <div className="offer-content">
                  <h5>
                    Fresh and Healthy
                    <br />
                    Organic fruits
                  </h5>
                  <p>
                    <span className='off'>35%</span>
                    <span className='off-text'>on first order</span>
                  </p>
                  <div className=""><button className='shopnow-btn'>Shop now</button></div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="offer-banner">
                <div className="offer-image">
                  <img src="img/offers/pb1.jpg" className='w-100' alt="" />
                </div>
                <div className="offer-content">
                  <h5 className=''>
                    Healthy
                    <br />
                    Bakery Products
                  </h5>
                  <p>
                    <span className='off'>30%</span>
                    <span className='off-text'>on first order</span>
                  </p>
                  <div className=""><button className='shopnow-btn'>Shop now</button></div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="offer-banner">
                <div className="offer-image">
                  <img src="img/offers/pb2.jpg" className='w-100' alt="" />
                </div>
                <div className="offer-content">
                  <h5>
                    Fresh
                    <br />
                    Snacks and Sweets
                  </h5>
                  <p>
                    <span className='off'>20%</span>
                    <span className='off-text'>on first order</span>
                  </p>
                  <div className=""><button className='shopnow-btn'>Shop now</button></div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="offer-banner">
                <div className="offer-image">
                  <img src="img/offers/pb3.jpg" className='w-100' alt="" />
                </div>
                <div className="offer-content">
                  <h5>
                    Fresh and Healthy
                    <br />
                    Organic fruits
                  </h5>
                  <p>
                    <span className='off'>35%</span>
                    <span className='off-text'>on first order</span>
                  </p>
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

export default Offers
