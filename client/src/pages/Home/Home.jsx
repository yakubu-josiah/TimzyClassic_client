import React, { useRef } from 'react';
import "./Home.css"
import HeroBanner from './HeroBanner';
import image from "../../assets/images/sliderCard.webp"
import data1 from "../../assets/images/data5.jpg";
import data2 from "../../assets/images/data2.jpg";
import data3 from "../../assets/images/data3.jpg";
import data4 from "../../assets/images/data4.jpg";
import data5 from "../../assets/images/data44.jpg";
import data6 from "../../assets/images/data1.jpg";
import data8 from "../../assets/images/data3.jpg";
import CollectionSlide from '../../components/UI/CollectionSlide';
import ProductSlider from '../../components/UI/ProductSlider';
import SliderControls from '../../components/UI/SliderControls';

export default function Home() {
  const featuredSliderRef = useRef(null);
  const trendingSliderRef = useRef(null);

  const sliderBackground = {
    backgroundImage: `url(${image})`,
  };


  const handleScroll = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({ left: direction === 'left' ? -350 : 350, behavior: 'smooth' });
    }
  };

  const data =
    [
      {
        id: "ddf1dtr33412QQ7e547a0e74cb9",
        name: "Mitchell Fitzgerald",
        price: 45000,
        address: "48 Flatlands Avenue, Cutter, North Dakota",
        isNew: true,
        image: data1
      },
      {
        id: "e2ssc3b5c4e6rt4ba2ebf06569",
        name: "Howell Faulkner",
        price: 40000,
        address: "77 Hemlock Street, Hasty, Florida",
        isNew: true,
        image: data2
      },
      {
        id: "2e4453dse34c435fds0bas2bf069",
        name: "Eris Dortmund",
        price: 70000,
        address: "77 Hemlock Street, Hasty, Florida",
        isNew: false,
        image: data3
      },
      {
        id: "34yu6b5cwe21xdx1c3fds4d52s2bf069",
        name: "Madison Powell",
        price: 2300,
        address: "77 Hemlock Street, Hasty, Florida",
        isNew: false,
        image: data4
      },
      {
        id: "7623v41a2c435fd0bas2bf069",
        name: "Keith Cannie",
        price: 50340,
        address: "77 Hemlock Street, Hasty, Florida",
        isNew: false,
        image: data5
      },
      {
        id: "2345c435fcx33d23rf2b345f069",
        name: "Dennis Rey",
        price: 10043,
        address: "77 Hemlock Street, Hasty, Florida",
        isNew: false,
        image: data6
      },
      {
        id: "6er335c435fd23rf4t542bf069",
        name: "Polish Welder",
        price: 90434,
        address: "77 Hemlock Street, Hasty, Florida",
        isNew: false,
        image: data8
      }
    ]
  return (
    <>
      <HeroBanner />
      <div className="HM">
        <div className="HM_overlay">
          <div className="HM_wrap">
            <div className="HM_intro">
              <p>HELLO</p>
              <h1>Timzy Classic Man</h1>
              <div>
                <p>We are a premium brand consisting of the finest material that perfectly define what we are made of, and that is black, strength, beauty, intelligence and most importantly style.</p>
              </div>
            </div>

            {/* ALL TRENDING COLLECTION HERE */}
            <div className="HM_slider" style={sliderBackground}>
              <div className="HM_wrap">
                <div className="HM_featured">
                  <h1>Featured Products</h1>
                  <p>Some of your favorite picks for this week</p>
                </div>
                <div className="HM_slideCont">
                  <div className="HM_slide" ref={featuredSliderRef}>
                    {data.map((item) => (
                      <ProductSlider
                        key={item.id}
                        data={item}
                      />
                    ))}
                  </div>
                  <SliderControls
                    onLeftClick={() => handleScroll(featuredSliderRef, 'left')}
                    onRightClick={() => handleScroll(featuredSliderRef, 'right')}
                  />
                </div>
              </div>
            </div>
            <div className="HM_intro">
              <p>New Arrivals</p>
              <h1>The Lifestyle Collection</h1>
              <div>
                <p>We are a premium brand consisting of the finest material that perfectly define what we are made of, and that is black, strength, beauty, intelligence and most importantly style.</p>
              </div>
            </div>

            {/* COLLECTION SLIDER HERE */}
            <div>
              < CollectionSlide type="featured" />
            </div>


            {/* ALL TRENDING COLLECTION HERE */}
            <div className="HM_slider" style={sliderBackground}>
              <div className="HM_wrap">
                <div className="HM_featured">
                  <h1>Trending Products</h1>
                  <p>Some of your favorite picks for this week</p>
                </div>
                <div className="HM_slideCont">
                  <div className="HM_slide" ref={trendingSliderRef}>
                    {data.map((item) => (
                      <ProductSlider
                        key={item.id}
                        data={item}
                      />
                    ))}
                  </div>
                  <SliderControls
                    onLeftClick={() => handleScroll(trendingSliderRef, 'left')}
                    onRightClick={() => handleScroll(trendingSliderRef, 'right')}
                  />
                </div>
              </div>
            </div>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio quam vel sequi doloribus, qui atque ex, voluptates alias iure asperiores. At pariatur dolore suscipit voluptates veniam sed ut consequuntur accusantium! Facere suscipit nihil repellendus debitis atque, harum quasi tempore voluptatibus voluptatem alias ad reiciendis consequatur sint quo id dolorum?</p> */}
          </div>
        </div>
      </div>
    </>
  )
}
