import React from 'react'
import { Link } from 'react-router-dom';
import FacebookIcon from "../../../assets/Icons/FacebookIcon"
import WhatsAppIcon from "../../../assets/Icons/WhatsAppIcon"
import InstagramIcon from "../../../assets/Icons/InstagramIcon"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Icon from '@mui/material/IconButton';
import './Footer.css';

export default function Footer() {
  
  return (
    <footer>
      <div className="wrapper">
        <div className="top">
          <div>
            <h2>Join Us</h2>
            <p>We will let you know when we have new arrivals, events and promo's don't worry we send them infrequently, just a friendly hi now and again!</p>
            <div className="form">
              <form>
                <input type="email" placeholder="Enter your email" />
                <EmailOutlinedIcon className="mail"/>
              </form>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="wrap">
            <form>
              <select className="select">
                <option value="0">NGN ₦</option>
                <option value="1">USD $</option>
                <option value="2">GBP £</option>
                <option value="3">EUR €</option>
                <option value="4">AFN ؋</option>
              </select>
            </form>
            <div>
              <div className="socials">
                <Icon className="icons"> <InstagramIcon /> </Icon>
                <Icon className="icons"> <FacebookIcon /> </Icon>
                <Icon className="icons"> <WhatsAppIcon /> </Icon>
              </div>
            </div>
            <div className="site_links">
              <div>
                <Link to="/contact-us">Contact</Link>
                <Link to="/frequently-asked-questions">FAQ</Link>
                <Link to="/shipping">Shipping</Link>
                <Link to="/return-refund-policy">Returns & Refund</Link>
                <Link to="/terms-of-use">Terms of Use</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </div>
              <div>&copy; 2024 Timzy Classic</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
