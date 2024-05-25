import React, { useEffect, useState } from 'react'
import './category.css'
import { category, data } from './category-data'

const Category = () => {

  const [Data, setData] = useState(data);

  const filterCat = (cat) => {

    let datas = data.filter((item, index) => {
      return item.category === cat
    })
    setData(datas)
  }

  useEffect(() => {
    let alll = []
    data.map((val, i) => {
      if (i <= 1) {
        alll.push(val)
      }
    })
    setData(alll)
  }, [])

  return (
    <div>
      <div className="container" style={{ paddingTop: 80 }}>
        <div className="row">
          <div className="col-4">
            <div className="categories">
              <ul className='category-ul mb-0 ps-0'>
                {
                  category.map((item) => {
                    return (
                      <li className='category-li' key={item.id}>
                        <button className=' border' onClick={() => filterCat(item.category)}><span>{item.category}</span> <br />
                          ({item.no} items)</button>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className="col-8 d-flex flex-wrap row">
            {
              Data.map((item, index) => {
                return (
                  <div className="col-6" key={index}>
                    <div className="category-content w-100" style={{ borderRadius: 7 }}>
                      <div className="category-inner">
                        <h2>
                          {item.discount}
                          <span>
                            <small>%</small>
                            <small>off</small>
                          </span>
                        </h2>
                      </div>
                      <div className="category-contain rounded-4 w-100 text-center">
                        <div className="category-text">
                          <h5>{item.name}</h5>
                        </div>
                        <div className='category-btn'><button className='shopnow-btn'>Shop now</button></div>
                      </div>
                      <div className="cat-img img w-100 rounded-4">
                        <img src={item.img} alt="" className='rounded-4' />
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
  )
}

export default Category
