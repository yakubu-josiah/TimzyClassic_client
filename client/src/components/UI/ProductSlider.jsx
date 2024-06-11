import React from 'react'
import "./ProductSlider.css";
import { Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';

export default function ProductSlider({data}) {

    return (
        <div className="PS_slider">
            <div className="PS_card" >
                <Link to={`/product/${data.id}`}>
                    <div className='PS_imgBox'>
                        <div className="PS_img" style={{ backgroundImage: `url(${data.image})` }}></div>
                    </div>
                    <ProductDetails name={data.name} price={data.price} />
                </Link>
            </div>
        </div>
    )
}
