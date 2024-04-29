import React from 'react'
import './HeroBanner.css'
import image from "../../assets/images/heroBanner.jpg"
import HomeCard from './HomeCard';

export default function HeroBanner() {
  const backGround = {
    backgroundImage: `url(${image})`,
  };

  return (
    <>
      <div className="banner">
        <div className="img" style={backGround}>
        </div>
        <div className="banner-card">
         <HomeCard />
        </div>
      </div>
      <div className="banner-cont">
        <div className="banner-wrap">
          <div className="banner-text">
            <h3>The</h3>
            <h1>Breezy collection</h1>
          </div>
          <button>BUY NOW</button>
        </div>
      </div>
    </>
  )
}
