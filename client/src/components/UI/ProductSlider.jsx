import React from 'react'
import "./ProductSlider.css";
import { Link } from 'react-router-dom';

export default function ProductSlider({data}) {
    const formatPrice = (price) => {
        return price && price !== 0 ? (
          `₦${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
        ) : (
            ''
        )
    }

    return (
        <div className="PS_slider">
            <div className="PS_card" >
                <Link to={`/product/${data.id}`}>
                    <div className='PS_imgBox'>
                        <div className="PS_img" style={{ backgroundImage: `url(${data.image})` }}></div>
                    </div>
                    <div className="PS_details">
                        <h6>The</h6>
                        <h3>{data.name}</h3>
                        <div className='PS_prices'>
                            <p>{formatPrice(data.price)}</p>
                            <div> 
                                <p>{formatPrice(data.price + 45200)}</p> 
                                <p id='off'>49% off</p> 
                            </div>
                        </div>

                    </div>
                </Link>
            </div>
        </div>
    )
}
