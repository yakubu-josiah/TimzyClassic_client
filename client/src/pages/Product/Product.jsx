import React, { useState } from 'react'
import photo1 from "../../assets/images/data1.jpg";
import photo2 from "../../assets/images/data5.jpg";
import photo3 from "../../assets/images/data3.jpg";
import photo4 from "../../assets/images/data44.jpg";
import StraightenSharpIcon from '@mui/icons-material/StraightenSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import './Product.css'

export default function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
 
  const formatPrice = (price) => {
    return `₦ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00`
  };

  const data = 
  {
    id: "ddf1dtr33412QQ7e547a0e74cb9",
    name: "Mitchell Fitzgerald",
    price: 45000,
    isNew: true,
    collection: "Lifestyle collection",
    desc: "Lorem ipsum dolor sit amenities, consectetur adi physic elite. In inst quiz quam volley states inducting, labor room beatrice consequent accusant volume paramount repellant, eligible aut nobel! Preferences corrupt debit liquid. Non, injure? Parrot ab non tempore. Minima ab tempore, opaque curated liquid faucet recipient accusant ex asper cheque vendetta culpa, repellant volume hic.",
    images: [
      photo1,
      photo2,
      photo4,
      photo3
    ]
  }

  const handleClick = (id) => {
    setSelectedImg(id);
  }
  

  return (
    <div className="PDT">
      <div className="PDT_wrap">

        <div className="left">
          <div>
            <div className="thumbnails">
              {data.images.map((item, id) => (
                <img src={item} key={id} alt="" onClick={() => handleClick(id)} />
              ))}
            </div>
            <div className="bg-img"> 
              <img src={data.images[selectedImg]} alt="" className="img" />
            </div>
          </div>
        </div>

        <div className="right">
          <div className="content">
            <div className="head">
              <h2>{data.name}</h2>
              <p>{data.collection}</p>
            </div>

            <div className="price">
              <h4 className="oldPrice">{formatPrice(data.price + 42000)}</h4> 
              <h4 className="newPrice">{formatPrice(data.price)}</h4>
            </div>
            <div className='model'>
              <p>Model is 6'3" and wearing size medium(M)</p>
            </div>
            <hr />
            <div className="btn">
              <p>QUANTITY</p>
              <div className="quantity">
                <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>—</button>
                  <span>{quantity}</span>
                <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
              </div>
              <div className="size">
                <span><StraightenSharpIcon /></span> 
                <a href={'/unknown'}>size guide</a>

              </div>
              <div className="cart">
                <button><span><AddShoppingCartSharpIcon /></span> ADD TO CART</button>
                <button><FavoriteBorderSharpIcon /></button>
              </div>
              <ol><li>49% Off Sales. Discount applied in cart.</li></ol>
            </div>
            <hr />

            <div className="details">
              <h4><span><DriveFileRenameOutlineOutlinedIcon /></span>DESCRIPTION</h4>
              <p className="desc">{data.desc}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
