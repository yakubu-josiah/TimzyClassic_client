import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-items">

          <div className="logo">The Logo</div>

          <div className="menu">
            <ul>
              <li>Shop</li>
              <li>About</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="navIcons">
            <div>LG</div>
            <div>SC</div>
            <div>CT</div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
