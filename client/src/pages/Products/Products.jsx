import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import heroBg from "../../assets/images/heroBanner.jpg"
import cardBg from "../../assets/images/sliderCard.webp"
import data1 from "../../assets/images/data5.jpg";
import data2 from "../../assets/images/data2.jpg";
import data3 from "../../assets/images/data3.jpg";
import data4 from "../../assets/images/data4.jpg";
import data5 from "../../assets/images/data44.jpg";
import data6 from "../../assets/images/data1.jpg";
import data8 from "../../assets/images/data3.jpg";
import './Products.css';
import ProductCard from '../../components/UI/ProductCard';

export default function Products() {
  const [maxPrice, setMaxPrice] = useState( 0);
  const { collectionName } = useParams();


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

  const heroImage = {
    backgroundImage: `url(${heroBg})`
  };
  const cardBackground = {
    backgroundRadius: "125px",
    backgroundImage: `url(${cardBg})`
  }

  return (
    <div className="PDS">
      <div className="PDS_hero" style={heroImage}>
        <h1 className="PDS_lead">
          {collectionName.toUpperCase().replace(/-/g, ' ')}
        </h1>
      </div>
      <div className="PDS_wrap">
        <div className="PDS_left">
          <div className="PDS_filter">
            <h2>Category</h2>
            <div className="PDS_item">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1"> Suits</label>
            </div>
            <div className="PDS_item">
              <input type="checkbox" id="2" value={2} />
              <label htmlFor="2"> Native Attires</label>
            </div>
            <div className="PDS_item">
              <input type="checkbox" id="3" value={3} />
              <label htmlFor="3"> Caps</label>
            </div>
            <div className="PDS_item">
              <input type="checkbox" id="4" value={4} />
              <label htmlFor="4"> Beach Wears</label>
            </div>
          </div>

          <div className="PDS_filter">
            <h2>Filter by Price</h2>
            <div className="PDS_price">
              <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
              <div className="label">
                <span>{maxPrice}</span> -
                <span>1000</span>
              </div>
            </div>
          </div>

          <div className="PDS_filter">
            <h2>Sort by</h2>
            <div className="PDS_sort">
              <input type="radio" value="asc" name="price" />
              <label htmlFor="asc"> Price (Lowest Price)</label>
            </div>
            <div className="PDS_sort">
              <input type="radio" value="desc" name="price" />
              <label htmlFor="desc"> Price (Highest Price)</label>
            </div>
          </div>
        </div>

        <div className="PDS_right" style={cardBackground}>
          <div className="PDS_cards">
            <div className="PDS_cont">
              {data.map((item) => (
                <ProductCard
                  key={item.id}
                  data={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
