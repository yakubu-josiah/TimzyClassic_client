import React from 'react'
import "./ProductSlider.css";
import { Link } from 'react-router-dom';

export default function ProductSlider({data}) {

    // const data = 
    // [
    //     {
    //         id: "600dc3b5d617e547a0e74cb9",
    //         title: "Mitchell Fitzgerald",
    //         price: 45000,
    //         address: "48 Flatlands Avenue, Cutter, North Dakota",
    //         isNew: true,
    //         image: data1
    //     },
    //     {
    //         id: "600dc3b5c4e60ba2ebf06569",
    //         title: "Howell Faulkner",
    //         price: 40000,
    //         address: "77 Hemlock Street, Hasty, Florida",
    //         isNew: true,
    //         image: data2
    //     },
    //     {
    //         id: "600dc3b5c435fd0bas2bf069",
    //         title: "Howell Faulkner",
    //         price: 70000,
    //         address: "77 Hemlock Street, Hasty, Florida",
    //         isNew: false,
    //         image: data3
    //     }
    // ]

    return (
        <div className="product-slider">
            <div className="product-card" >
                <Link to={`/product/${data.id}`}>
                    <div className="imgBox" style={{ backgroundImage: `url(${data.image})` }}>
                    </div>
                    <div className="product-details">
                        <h6>The</h6>
                        <h3>{data.name}</h3>
                        <p>₦{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
