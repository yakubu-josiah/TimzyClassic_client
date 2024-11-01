import React, { useState } from 'react';
import ShopCard from './ShopCard';
import image from "../../assets/images/sliderCard.webp"
import data1 from "../../assets/images/data5.jpg";
import data2 from "../../assets/images/data2.jpg";
import data3 from "../../assets/images/data3.jpg";
import data4 from "../../assets/images/data4.jpg";
import data5 from "../../assets/images/data44.jpg";
import data6 from "../../assets/images/data1.jpg";
import data7 from "../../assets/images/slidderImg.webp";
import data8 from "../../assets/images/sliderImgg.jpeg";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import './Shop.css';

export default function Shop() {
  const [maxPrice, setMaxPrice] = useState( 0);
  const [filterMenu, setFilterMenu] = useState(false);
  
  
  const toggleMenu = () => {
    setFilterMenu(!filterMenu);
  };

  // useEffect(() => {
  //   document.body.classList.toggle('no-scroll', filterMenu);

  //   return () => {
  //     document.body.classList.remove('no-scroll')
  //   };
    
  // }, [filterMenu])
  
  const collections =
    [
      {
        id: "ddw6342ere1dtr33412QQ7e547a0e74cb9",
        name: "5 Shades Of Breezy",
        image: data1,
      },
      {
        id: "ddf1dtr33412QQ7e547a0e74cb9",
        name: "Lifestyle Collection",
        image: data2,
      },
      {
        id: "e2ssc3bz5c4e6rt4ba2ebf06569",
        name: "Enigma Collection",
        image: data3,
      },
      {
        id: "2e4453dse34c435fds0bas2bf069",
        name: "Casual Fits",
        image: data4,
      },
      {
        id: "34yu6b5cwe21xdx1c3fds4d52s2bf069",
        name: "Stylish Drips",
        image: data5,
      },
      {
        id: "7623v41a2c435fd0bas2bf069",
        name: "Easy Wears",
        image: data6,
      },
      {
        id: "2345c435fcx33d23rf2b345f069",
        name: "Native Attires",
        image: data7,
      },
      {
        id: "yl6sg4er335c435fd23rf4t542bf069",
        name: "Custom Suits",
        image: image
      },
      {
        id: "345wdf6er335c435fd23rf4t542bf069",
        name: "Caps",
        image: data8
      }
  ]
  return (
    <div className='SH'>
      <div className="SH_header">
        <div className="SH_wrap">
          <p>COLLECTION</p>
          <h1>Shop Brands</h1>
          <div className="SH_icons">
            <div className="filterBTN" onClick={toggleMenu}><TuneOutlinedIcon />FILTER</div>
            <div className="sortBTN">
              <SortOutlinedIcon />
              SORT
              <select className="select" name="" id="sort_items">
                <option value="asc"> Price (Highest Price) </option>
                <option value="desc"> Price (Lowest Price) </option>
            </select>
            </div>
          </div>
        </div>
      </div>

      <div className={`FLT_menuTab ${filterMenu ? 'open' : ''}`}>
        <div className="FLT_wrap">

          <div className="FLT_head">
            <h3><span onClick={toggleMenu}>x</span> FILTER BY</h3>
          </div>
          
          <div className="FLT_filter">
            <div className="FLT_cont">
              <h3>CATEGORIES</h3>
              <div className="FLT_item">
                <input type="checkbox" id="1" value={1} />
                <label htmlFor="1"> Suits</label>
              </div>
              <div className="FLT_item">
                <input type="checkbox" id="2" value={2} />
                <label htmlFor="2"> Native Attires</label>
              </div>
              <div className="FLT_item">
                <input type="checkbox" id="3" value={3} />
                <label htmlFor="3"> Caps</label>
              </div>
              <div className="FLT_item">
                <input type="checkbox" id="4" value={4} />
                <label htmlFor="4"> Beach Wears</label>
              </div>
              <div className="FLT_item">
                <input type="checkbox" id="5" value={5} />
                <label htmlFor="5"> Lifestyle Collection</label>
              </div>
              <div className="FLT_item">
                <input type="checkbox" id="6" value={6} />
                <label htmlFor="6"> Casual Fit</label>
              </div>
              <div className="FLT_item">
                <input type="checkbox" id="4" value={7} />
                <label htmlFor="7"> Enigma Collection</label>
              </div>
            </div>

            <div className="FLT_cont">
              <h3>FILTER BY PRICE</h3>
              <div className="FLT_price">
                <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
                <div className="label">
                  <span>{maxPrice}</span> -
                  <span>1000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="FLT_close">
            <button onClick={toggleMenu}>APPLY</button>
          </div>
        </div>
      </div>

      <div className="SH_gallery">
          {collections.map((collection) => (
            <div className="SH_collection">
                <ShopCard 
                  key={collection.id}
                  data={collection}
                />
            </div>
          ))}
      </div>
    </div>
  )
}
