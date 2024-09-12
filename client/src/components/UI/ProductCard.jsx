import React from 'react'
import "./ProductCard.css";
import { Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import { routeFormat } from '../../Utils/routeFormat';

export default function ProductCard({data}) {

    return (
        <div className="PC_wrap">
            <div className="PC_card" >
                <Link to={`/shop-collections/${routeFormat(data.name)}/${data.id}`}>
                    <div className='PC_imgBox'>
                        <div className="PC_img" style={{ backgroundImage: `url(${data?.image})` }}></div>
                    </div>
                    <ProductDetails name={data?.name} price={data?.price} />
                </Link>
            </div>
        </div>
    )
}
