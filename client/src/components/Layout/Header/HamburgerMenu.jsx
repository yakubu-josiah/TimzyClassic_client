import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import CloseIcon from '@mui/icons-material/Close';
import './HamburgerMenu.css';

export default function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };


    return (
        <div className={`HB ${menuOpen ? 'open': ''}`}>
            <div className="HB_icon" onClick={toggleMenu}>
                {menuOpen ? <CloseIcon fontSize="large"/> : <ListOutlinedIcon fontSize="large"/>}
                <p>{menuOpen ? ' ' : 'Menu'}</p>
            </div>
            <div className="HB_menu">
                <div>
                    <ul>
                        <li><Link onClick={toggleMenu} to="/pages/shop">Shop</Link></li>
                        <li><Link onClick={toggleMenu} to="/pages/about-us">About</Link></li>
                        <li><Link onClick={toggleMenu} to="/pages/blogs">Blogs</Link></li>
                        <li><Link onClick={toggleMenu} to="/pages/contact-us">Contact</Link></li>
                    </ul>
                </div>    
            </div>
        </div>
    )
}
