import React from 'react';
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
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import './Shop.css';

export default function Shop() {

  const collections =
    [
      {
        id: "ddw342ere1dtr33412QQ7e547a0e74cb9",
        name: "5 Shades Of Breezy",
        image: data1,
      },
      {
        id: "ddf1dtr33412QQ7e547a0e74cb9",
        name: "Lifestyle Collection",
        image: data2,
      },
      {
        id: "e2ssc3b5c4e6rt4ba2ebf06569",
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
            <button><SubjectOutlinedIcon />LIST</button>
            <button><CollectionsBookmarkOutlinedIcon />IMAGES</button>
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
