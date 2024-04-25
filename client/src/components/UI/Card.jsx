
import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

export default function Card({item}) {
    const styles = {
      backgroundImage: `url(${item.image})`,
    };

  return (  
    <div className="card" >
      <Link to={`/product/${item.id}`}>
          <div style={styles}>
            <div>
              <h6>The</h6>
              <h3>{item.title}</h3>
            </div>
          </div>
      </Link>
    </div>  
  )
}
