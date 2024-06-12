import React, { useState } from "react";
import data1 from "../../assets/images/data1.jpg"
import data2 from "../../assets/images/data2.jpg"
import data3 from "../../assets/images/data3.jpg"
import data4 from "../../assets/images/data1.jpg"
import data5 from "../../assets/images/data5.jpg"
import data6 from "../../assets/images/data3.jpg"
import data8 from "../../assets/images/data5.jpg"
import "./CollectionSlide.css"
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const data = 
[
    {
        id: "ddf1dtr33412QQ7e547a0e74cb9",
        title: "Mitchell Fitzgerald",
        price: 45000,
        address: "48 Flatlands Avenue, Cutter, North Dakota",
        isNew: true,
        image: data1
    },
    {
        id: "e2ssc3b5c4e6rt4ba2ebf06569",
        title: "Howell Faulkner",
        price: 40000,
        address: "77 Hemlock Street, Hasty, Florida",
        isNew: true,
        image: data2
    },
    {
        id: "2e4453dse34c435fds0bas2bf069",
        title: "Eris Dortmund",
        price: 70000,
        address: "77 Hemlock Street, Hasty, Florida",
        isNew: false,
        image: data3
    },
    {
        id: "34yu6b5cwe21xdx1c3fds4d52s2bf069",
        title: "Madison Powell",
        price: 82300,
        address: "77 Hemlock Street, Hasty, Florida",
        isNew: false,
        image: data4
    },
    {
        id: "7623v41a2c435fd0bas2bf069",
        title: "Keith Cannie",
        price: 50340,
        address: "77 Hemlock Street, Hasty, Florida",
        isNew: false,
        image: data5
    },
    {
        id: "2345c435fcx33d23rf2b345f069",
        title: "Dennis Rey",
        price: 10043,
        address: "77 Hemlock Street, Hasty, Florida",
        isNew: false,
        image: data6
    },
    {
        id: "6er335c435fd23rf4t542bf069",
        title: "Polish Welder",
        price: 90434,
        address: "77 Hemlock Street, Hasty, Florida",
        isNew: false,
        image: data8
    }
]
export default function CollectionSlide({ type }) {
    const [activeIndex, setActiveIndex] = useState(3);

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };
    
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(price);
    };

    return (
        <div className="CS">
            <div className="CS_intro">
              <p>NEW ARRIVALS</p>
              <h1>The Lifestyle Collection</h1>
              <div>
                <p>We are a premium brand consisting of the finest material that perfectly define what we are made of, and that is black, strength, beauty, intelligence and most importantly style.</p>
              </div>
            </div>
            <div className="CS_cont">
                <div className="CS_images">
                    {data.map((item, index) => (
                        <div 
                            key={item.id} 
                            className={`CS_img ${activeIndex === index ? 'CS_active' : ''}`} 
                            onClick={() => handleItemClick(index)}
                        >
                            <img src={item.image} alt={item.title} />
                            <div className={`CS_details ${activeIndex === index ? "CS_details" : ""}`}>
                                <Link to={`/product/${item.id}`}>
                                    <ProductDetails name={item.title} price={item.price} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
