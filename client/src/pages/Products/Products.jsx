import React from 'react'
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
  const { collectionName } = useParams();

  const data =
  [
    {
      id: "ddf1dtr3i3412QQ7e547a0e74cb9",
      name: "Mitchell Fitzgerald",
      price: 45000,
      address: "48 Flatlands Avenue, Cutter, North Dakota",
      isNew: true,
      image: data1
    },
    {
      id: "e2ssc3b5c4e6vrt4ba2ebf06569",
      name: "Howell Faulkner",
      price: 40000,
      address: "77 Hemlock Street, Hasty, Florida",
      isNew: true,
      image: data2
    },
    {
      id: "2e4453dse34cc435fds0bas2bf069",
      name: "Eris Dortmund",
      price: 70000,
      address: "77 Hemlock Street, Hasty, Florida",
      isNew: false,
      image: data3
    },
    {
      id: "34yu6b5cw2e21xdx1c3fds4d52s2bf069",
      name: "Madison Powell",
      price: 2300,
      address: "77 Hemlock Street, Hasty, Florida",
      isNew: false,
      image: data4
    },
    {
      id: "7623v41a2c4vv35fd0bas2bf069",
      name: "Keith Cannie",
      price: 50340,
      address: "77 Hemlock Street, Hasty, Florida",
      isNew: false,
      image: data5
    },
    {
      id: "23e45c435fcx33d23rf2b345f069",
      name: "Dennis Rey",
      price: 10043,
      address: "77 Hemlock Street, Hasty, Florida",
      isNew: false,
      image: data6
    },
    {
      id: "6er335c435fd23rf4t542bbb069",
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
      <div className="intro">
        <p>All designed and made right here in Timzy Classic Fashion Home. Get the streets on hold.</p>
      </div>

      <div className="PDS_wrap">
        <div className="PDS_main" style={cardBackground}>
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
