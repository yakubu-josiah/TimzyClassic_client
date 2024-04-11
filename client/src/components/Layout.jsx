import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Layout/Header/Header'
import Footer from './Layout/Footer/Footer'

export default function Layout() {
  
  return (
    <div className="layout">
      <Header />
        <main>
          <Outlet />
        </main>
      <Footer />
    </div>
  )
}
