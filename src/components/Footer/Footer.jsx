import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                
                <p>Bring our passion for great food to your table. We make online ordering easy, so you can enjoy a perfect meal crafted with care, wherever you are.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
                <img src={assets.logo} alt="" />
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+123456789</li>
                    <li>contact@bitebox.com</li>
                </ul>

            </div>
        </div>

        <hr />
        <p className="footer-copyright">Copyright@2025 BiteBox.com. All rights reserved.</p>

    </div>
  )
}

export default Footer