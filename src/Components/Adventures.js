import React from 'react'
import './Adventures.css'
import { Advtypes } from './Advtypes'

const Adventures = () => {
  return (
    <div className='main-homepage'>
      <div className='main-content'>
        <div className="big-title">
          <p className='heading-desktop'>Epic Adventures <span className='span' style={{ color: '#ffba00' }}>Right Around The Corner</span></p>
          <p className='heading-mobile'>Epic Adventures
            <br />
            <span className='span'>Right Around The Corner</span></p>
          <div className="border-bottom-yellow"></div>
          <p className='subtitle'>Find the best guides and expeditions in your backyard.</p>

          <div className="adv-types">
            {
              Advtypes.map((item, index) => {
                return (
                  <div key={index} className="adv-types-list">
                    <div className="adv-types-img">
                      <img className='adv-img' src={item.url} alt="" />
                    </div>
                    <div className="advtypes-paragraph">
                      <p className='p1'>{item.title}</p>
                      <p className='p2' href="">{item.p}</p>
                    </div>

                  </div>
                )
              })
            }
          </div>
        </div>
        <ul className='slick-dots'>
          <li className='slick-active'>
            <button className='dot1'></button>
          </li>
          <li className='slick-active'>
            <button className='dot1'></button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Adventures;