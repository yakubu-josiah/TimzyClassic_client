import React from 'react'
import './Footer.css';
import Icon from '@mui/material/IconButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from 'react-router-dom';

export default function Footer() {
  const InstagramIcon = (
    <svg width="22" height="23" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 3.5H12M4.5 0.5H10.5C12.7091 0.5 14.5 2.29086 14.5 4.5V10.5C14.5 12.7091 12.7091 14.5 10.5 14.5H4.5C2.29086 14.5 0.5 12.7091 0.5 10.5V4.5C0.5 2.29086 2.29086 0.5 4.5 0.5ZM7.5 10.5C5.84315 10.5 4.5 9.15685 4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5C9.15685 4.5 10.5 5.84315 10.5 7.5C10.5 9.15685 9.15685 10.5 7.5 10.5Z" stroke="#000000"/>
    </svg>
  );
  const FacebookIcon = (
    <svg fill="#000000" width="22" height="23" viewBox="-6 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m12.462.173v3.808h-2.265c-.079-.011-.171-.017-.264-.017-.542 0-1.036.203-1.411.538l.002-.002c-.275.384-.439.863-.439 1.381 0 .062.002.124.007.185v-.008 2.726h4.229l-.56 4.27h-3.663v10.946h-4.417v-10.947h-3.68v-4.269h3.68v-3.145c-.007-.102-.011-.222-.011-.342 0-1.478.575-2.822 1.513-3.82l-.003.003c.972-.92 2.288-1.485 3.735-1.485.09 0 .18.002.27.007h-.013c.118-.002.256-.003.395-.003 1.02 0 2.025.064 3.011.188l-.117-.012z"/>
    </svg>
  );
  const WhatsAppIcon = (
    <svg fill="#000000" width="22" height="23" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"/><path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"/>
    </svg>
  );
  
  
  return (
    <footer>
      <div className="wrapper">
        <div className="top">
          <div>
            <h2>Join Us</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi, dolorem odit ratione repudiandae mollitia beatae amet?</p>
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
                <Icon className="icons">{InstagramIcon}</Icon>
                <Icon className="icons">{FacebookIcon}</Icon>
                <Icon className="icons">{WhatsAppIcon}</Icon>
              </div>
            </div>
            <div className="site_links">
              <div>
                <Link to="/pages/contact">Contact</Link>
                <Link to="/pages/frequently-asked-questions">FAQ</Link>
                <Link to="/pages/shipping">Shipping</Link>
                <Link to="/page/returns">Returns</Link>
                <Link to="/page/terms-of-use">Terms of Use</Link>
                <Link to="/page/privacy-policy">Privacy Policy</Link>
              </div>
              <div>&copy; 2024 Timzy Classic</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
