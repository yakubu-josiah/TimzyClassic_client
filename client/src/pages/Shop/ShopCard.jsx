import React from 'react'
import './Shop.css';
import { Link } from 'react-router-dom';

export default function ShopCard({data}) {

    return (
        <div className="SHC_card">
            <Link to={`/pages/shop/${data.name}`}>
                <div className="SHC_img" style={{ backgroundImage: `url(${data.image})` }}>
                    <div className="SHC_title">
                        <p>{data.name}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
