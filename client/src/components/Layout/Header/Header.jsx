import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import './Header.css'
import { Link } from 'react-router-dom';
import Announcement from '../Announcement';

export default function Header() {
  const location = useLocation();

  function checkRoute(route) {
    if(route === location.pathname) {
      return true;
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Announcement />
      <div className={`header ${!checkRoute("/") && "header-bg"}`}>
        <div className="header-wrapper">
          <div className="header-items">

            <div className="logo"><Link to="/">The Logo.</Link></div>

            <div className="menu">
              <ul>
                <li><Link className={`${checkRoute("/pages/products") && "header-active"}`} to="/pages/products">Shop</Link></li>
                <li><Link className={`${checkRoute("/pages/about-us") && "header-active"}`} to="/pages/about-us">About</Link></li>
                <li><Link className={`${checkRoute("/pages/blogs") && "header-active"}`} to="/pages/blogs">Blogs</Link></li>
                <li><Link className={`${checkRoute("/pages/contact-us") && "header-active"}`} to="/pages/contact-us">Contact</Link></li>
              </ul>
            </div>

            <div className="navIcons">
              <div><Link to="/my-account"><PersonOutlineOutlinedIcon /></Link></div>
              <div><Link to="/search/:q"><SearchOutlinedIcon /></Link></div>
              <div><Link to="/cart"><ShoppingBagOutlinedIcon /></Link></div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
