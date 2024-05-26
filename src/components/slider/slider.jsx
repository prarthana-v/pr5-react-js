import React from 'react'
import './slider.css'
const Slider = () => {
  return (
    <div>
      {/* */}
      <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item swiper-slider active">
            <img src="img/banner.jpg" class="d-block w-100 " alt="..." style={{ objectFit: 'cover', height: 580 }} />
            <div class="carousel-caption  d-none d-md-block"></div>
            <div className="ban-ctn">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className="banner-ctn pt-5">
                      <h5 className='mb-4'>
                        <span>100%</span>
                        Organic Fruits
                      </h5>
                      <h1 className='mb-4'>Explore fresh & juicy fruits.</h1>
                      <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo temporibus nihil facere provident hic quasi qui, fugiat laudantium architecto laboriosam eos sint accusamus rerum vitae eligendi reiciendis iusto impedit enim!</p>
                      <button className='shopnow-btn'>Shop now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="carousel-item slider ">
            <img src="img/banner-2.jpg" class="d-block w-100" alt="..." style={{ objectFit: 'cover', height: 580 }} />
            <div class="carousel-caption d-none d-md-block"></div>
            <div className="ban-ctn">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className="banner-ctn pt-5">
                      <h5 className='mb-4'>
                        <span>100%</span>
                        Organic Vegetables
                      </h5>
                      <h1 className='mb-4'>The best way to stuff your wallet.</h1>
                      <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo temporibus nihil facere provident hic quasi qui, fugiat laudantium architecto laboriosam eos sint accusamus rerum vitae eligendi reiciendis iusto impedit enim!</p>
                      <button className='shopnow-btn'>Shop now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Slider
