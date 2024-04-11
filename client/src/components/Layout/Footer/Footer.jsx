import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <p>Join Us</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste commodi vitae eius incidunt quaerat? Tempore eligendi, dolorem odit ratione repudiandae mollitia beatae amet?</p>
      </div>

      <div>
        <form>
          <label htmlFor="">Email</label>
          <input type="text" />
        </form>
      </div>

      <div>
        <select name="" id="">
          <option value="">NGN Naira</option>
          <option value="">USD Dollar</option>
          <option value="">GBP Pounds</option>
          <option value="">EUR Euros</option>
        </select>
      </div>
    </div>
  )
}
