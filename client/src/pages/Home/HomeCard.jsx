import React from 'react'
import data1 from "../../assets/images/data1.jpg"
import data2 from "../../assets/images/data2.jpg"
import data3 from "../../assets/images/data4.jpg"
import { Link } from 'react-router-dom'
import { routeFormat } from "../../Utils/routeFormat"
import "./HomeCard.css";

export default function HomeCard() {
    const data = 
    [
        {
            id: "600dc3b5d617e547a0e74cb9",
            title: "Mitchell Fitzgerald",
            price: 45000,
            address: "48 Flatlands Avenue, Cutter, North Dakota",
            isNew: true,
            image: data1
        },
        {
            id: "600dc3b5c4e60ba2ebf06569",
            title: "Howell Faulkner",
            price: 40000,
            address: "77 Hemlock Street, Hasty, Florida",
            isNew: true,
            image: data2
        },
        {
            id: "600dc3b5c435fd0bas2bf069",
            title: "Howell Faulkner",
            price: 70000,
            address: "77 Hemlock Street, Hasty, Florida",
            isNew: false,
            image: data3
        }
    ]

    
  return (
    <div className="HC">
        <div className="HC_wrap">
            <div className="HC_cards">
                <div className="HC_cards-items">
                    {data.map(item=>(
                        <div className="HC_card" key={item.id}>
                            <Link to={`/shop-collections/${routeFormat(item.title)}/${item.id}`}>
                                <div style={{ backgroundImage: `url(${item.image})` }}>
                                    <div>
                                        <h6>The</h6>
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
