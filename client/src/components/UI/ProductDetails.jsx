import React from 'react'
import './ProductDetails.css'

export default function ProductDetails({name, price}) {
    const formatPrice = (price) => {
        return `₦ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00`
    };

    return (
        <div className="PD_details">
            <h6>The</h6>
            <h3>{name}</h3>
            <div className='PD_prices'>
                <p>{formatPrice(price)}</p>
                <div> 
                    <p>{formatPrice(price + 45200)}</p> 
                    <p id='off'>49% off</p> 
                </div>
            </div>

        </div>
    )
}
