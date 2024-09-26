import React from 'react';
import data1 from "../../assets/images/data5.jpg";
import data2 from "../../assets/images/data2.jpg";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import "./Cart.css";

export default function Cart({ OpenCart }) {
  const data =
  [
    {
      id: "ddf1dtr33412QQ7e547a0e74cb9",
      name: "Mitchell Fitzgerald",
      price: 45000,
      col: "5 Shades Breezy",
      isNew: true,
      image: data1
    },
    {
      id: "e2ssc3b5c4e6rt4ba2ebf06569",
      name: "Howell Faulkner",
      price: 40000,
      col: "Lifestyle Collection",
      isNew: true,
      image: data2
    },
    {
      id: "c2ddf1dtr33412QQ7e547a0e74cb9",
      name: "Mitchell Fitzgerald",
      price: 45000,
      col: "5 Shades Breezy",
      isNew: true,
      image: data1
    },
    {
      id: "e2sas0c3b5c4e6rt4ba2ebf06569",
      name: "Howell Faulkner",
      price: 40000,
      col: "Lifestyle Collection",
      isNew: true,
      image: data2
    },
    {
      id: "d0df1dtr33412QQ7e547a0e74cb9",
      name: "Mitchell Fitzgerald",
      price: 45000,
      col: "5 Shades Breezy",
      isNew: true,
      image: data1
    },
    {
      id: "ev2ssc3b5c4e6rt4ba2ebf06569",
      name: "Howell Faulkner",
      price: 40000,
      col: "Lifestyle Collection",
      isNew: true,
      image: data2
    },
    {
      id: "d6df1dtr33412QQ7e547a0e74cb9",
      name: "Mitchell Fitzgerald",
      price: 145000,
      col: "5 Shades Breezy",
      isNew: true,
      image: data1
    },
    {
      id: "e25ssc3b5c4e6rt4ba2ebf06569",
      name: "Howell Faulkner",
      price: 102000,
      col: "Lifestyle Collection",
      isNew: true,
      image: data2
    },
  ]

  return (
    <div className="CT">
      <div className="wrap">
        <div className="head">
          <span className="icon">
            <RemoveOutlinedIcon className="rmIcn" onClick={() => OpenCart(!OpenCart)}/>
            <ChevronLeftOutlinedIcon className="chvIcn" onClick={() => OpenCart(!OpenCart)}/>
            </span>
          <h3>Shopping Bag</h3>
          <span className="del"><DeleteForeverOutlinedIcon className="icon"/></span>
        </div>

        <div className="pr_cont">
          { data.map((item) => ( 
              <div className="product" key={item.id}>
                <div className="left">
                  <img src={item.image} alt="" />
                  <div>
                    <p className="name">{item.name}</p>
                    <p>{item.col}</p>
                    <h3>N{item.price}</h3>
                  </div>
                </div>
                <div className="right">
                  <div>
                    <p>Qty: 1</p>
                    <p>Size: M</p>
                  </div>
                  <span><CloseOutlinedIcon /></span>
                </div>      
            </div>
          ))}
        </div>

        <div className="bottom">
          <div>
            <p>Subtotal</p>
            <h3>N470,300</h3>
          </div>
          <button>Check Out <span>{data.length}</span></button>
        </div>
      </div>
    </div>
  )
}

