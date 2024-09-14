import React, { useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CloseIcon from '@mui/icons-material/Close';
import './HamburgerMenu.css';
import Cart from '../../UI/Cart';

export default function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    
    function checkRoute(route) {
        if(route === location.pathname) {
          return true;
        }
    }

    return (
        <>
            <div className={`HB ${menuOpen ? 'open': ''}`}>
                <div className="HB_icon" onClick={toggleMenu}>
                    {menuOpen ? <CloseIcon fontSize="large"/> : <ListOutlinedIcon fontSize="large"/>}
                    <p>{menuOpen ? ' ' : 'Menu'}</p>
                </div>
                <div className="HB_menu">
                    <div>
                        <ul>
                            <li>
                                <Link onClick={toggleMenu} to="/shop-collections">
                                    <div className={`HB_active ${checkRoute("/shop-collections") && "HB_links"}`}>
                                        <StoreOutlinedIcon />
                                        Shop
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={toggleMenu} to="/blogs">
                                    <div className={`HB_active ${checkRoute("/blogs") && "HB_links"}`} >
                                        <NewspaperOutlinedIcon />
                                        Blogs
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={toggleMenu} to="/about-us">
                                    <div className={`HB_active ${checkRoute("/about-us") && "HB_links"}`}>
                                        <InfoOutlinedIcon />
                                        About
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={toggleMenu} to="/contact-us">
                                    <div className={`HB_active ${checkRoute("/contact-us") && "HB_links"}`}>
                                        <ContactSupportOutlinedIcon />
                                        Contact
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>    
                </div>
                <span className="cart_Btn" onClick={() => setOpenCart(!openCart)}><ShoppingBagOutlinedIcon /><span>3</span></span>
            </div>
            <div className={`HB_cart ${openCart ? 'open' : ''}`} >
                <Cart OpenCart={setOpenCart} /> 
            </div>
        </>
    )
}
