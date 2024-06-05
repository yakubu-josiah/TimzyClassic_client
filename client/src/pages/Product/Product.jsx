import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
    const param = useParams();
  return (
    <div><br /> <br />Single Product {param.id} <br /> <br /> <br /></div>
  )
}
