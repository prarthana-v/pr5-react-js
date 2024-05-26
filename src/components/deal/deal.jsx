import React from 'react'
import './deal.css'
import "../jquery.min.js"
import './timer.js'

const Deal = () => {
  return (
    <div className='py-5'>
      <div className="banner-deal">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <div className="deal-content">
                <p>
                  <span className='me-2'>35%</span>
                  <span>OFF</span>
                </p>
                <h4>Great deal on organic food.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis.</p>
                <div>
                  <section class="wrapper">
                    <section id="countdown-container" class="countdown-container">
                      <article id="js-countdown" class="countdown">
                        <section id="js-days" class="number"></section>
                        <section id="js-separator" class="separator">:</section>
                        <section id="js-hours" class="number"></section>
                        <section id="js-separator" class="separator">:</section>
                        <section id="js-minutes" class="number"></section>
                        <section id="js-separator" class="separator">:</section>
                        <section id="js-seconds" class="number"></section>
                      </article>
                    </section>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deal
