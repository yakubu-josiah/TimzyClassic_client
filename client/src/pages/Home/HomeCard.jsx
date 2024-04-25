import React from 'react'
import data1 from "../../assets/images/data1.jpg"
import data2 from "../../assets/images/data2.jpg"
import data3 from "../../assets/images/data4.jpg"
import Card from '../../components/UI/Card.jsx'

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
    <div className="homeCard">
        <div className="homeCard-wrap">
            <div className="cards">
                <div className="cards-items">
                    {data.map(item=>(
                        <Card item={item} key={item.id}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
