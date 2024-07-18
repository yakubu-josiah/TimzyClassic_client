import React from 'react'
import './Shop.css';
import { Link } from 'react-router-dom';
import { routeFormat } from '../../Utils/routeFormat';

export default function ShopCard({data}) {

    return (
        <div className="SHC_card">
            <div className="SHC_img" style={{ backgroundImage: `url(${data.image})` }}>
                <Link to={`/shop-collections/${routeFormat(data.name)}`}>
                    <div className="SHC_title">
                        <p>{data.name}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
