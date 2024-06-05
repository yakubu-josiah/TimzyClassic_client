import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import HamburgerMenu from './Header/HamburgerMenu'

export default function Layout() {
  
  return (
    <div className="layout">
      <Header />
      <HamburgerMenu />
        <main>
          <Outlet />
        </main>
      <Footer />
    </div>
  )
}
