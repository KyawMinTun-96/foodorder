import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
import {assets} from '../../assets/imgs/others/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} alt='...' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam porro dignissimos laborum voluptate iusto voluptatum neque. Quidem vitae repellat ipsum, dolorem dolore iure? Corporis nam optio modi aliquam cumque ducimus.</p>
            <div className='footer-social-icons'>
              <a href='https://www.facebook.com' target="_blank" rel='noreferrer'>
                <img src={assets.facebook_icon} alt='...' />
              </a>
              <a href='https://www.twitter.com' target="_blank" rel='noreferrer'>
                <img src={assets.twitter_icon} alt='...' />
              </a>
              <a href='https://www.linkedin.com' target="_blank" rel='noreferrer'>
                <img src={assets.linkedin_icon} alt='...' />
              </a>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+95-123-456-789</li>
                <li>foodorder@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>
        Copyright 2024 &copy; FoodOrder.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
