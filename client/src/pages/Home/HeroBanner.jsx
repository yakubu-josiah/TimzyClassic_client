import React from 'react'
import './HeroBanner.css'
import image from "../../assets/images/heroBanner.jpg"
import HomeCard from './HomeCard';
import { Link } from 'react-router-dom';

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
            <h5>The</h5>
            <h1>Breezy <span>collection</span></h1>
          </div>
          <Link to="/shop-collections"><button>SHOP NOW</button></Link>
        </div>
      </div>
    </>
  )
}
