import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import logoImage from '../../assets/pixelcut-export-removebg-preview.png'; // Ensure this path is correct


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          {/* Use the new logo image here */}
          <img src={logoImage} alt="Logo" className='hunger' />
          <p>Welcome to our online order website! Here, you can browse our wide selection of products and place orders from the comfort of your own home.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
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
            <li>+91-9520006789</li>
            <li>paljiabhishek@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© Copyright 2024. All Rights Reserved by Abhishek Pal</p>
    </div>
  );
}

export default Footer;