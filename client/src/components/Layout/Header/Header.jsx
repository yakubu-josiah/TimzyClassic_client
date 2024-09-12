import React, {  useEffect, useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import './Header.css';
import Announcement from '../Announcement';
import Cart from '../../UI/Cart';

export default function Header() {
  const [openCart, setOpenCart] = useState(false)
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
      <div className={`HD ${!checkRoute("/") && "HD_bg"}`}>
        <div className="HD_wrapper">
          <div className="HD_items">

            <div className="HD_logo"><Link to="/">The Logo.</Link></div>

            <div className="HD_menu">
              <ul>
                <li><Link className={`${checkRoute("shop-collections") ? "HD_active" : ""}`} to="shop-collections">Shop</Link></li>
                <li><Link className={`${checkRoute("about-us") ? "HD_active" : ""}`} to="about-us">About</Link></li>
                <li><Link className={`${checkRoute("blogs") ? "HD_active" : ""}`} to="blogs">Blogs</Link></li>
                <li><Link className={`${checkRoute("contact-us") ? "HD_active" : ""}`} to="contact-us">Contact</Link></li>
              </ul>
            </div>

            <div className="HD_navIcons">
              <div><Link to="/my-account"><PersonOutlineOutlinedIcon /></Link></div>
              <div><Link to="/search/:q"><SearchOutlinedIcon /></Link></div>
              <div><span><ShoppingBagOutlinedIcon className={`${openCart ? 'cart' : ''}`} onClick={() => setOpenCart(!openCart)}/></span></div>
            </div>
            
          </div>
        </div>
          <div className={`HD_cart ${openCart ? 'open' : ''}`} >
            <Cart OpenCart={setOpenCart} /> 
          </div>
      </div>
    </>
  )
}
