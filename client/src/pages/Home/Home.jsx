import React from 'react';
import "./Home.css"
import HeroBanner from './HeroBanner';
import "../../components/UI/Card.css"

export default function Home() {
  return (
    <>
      <HeroBanner/>
      <div className="home">
        <div className="home-wrapper">
          <div className="home-content">
            <br />
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore maxime, doloremque in dolorem praesentium recusandae incidunt quisquam nihil impedit provident! Velit eos nulla quo iste? Odit veritatis recusandae saepe nam ratione? Soluta temporibus totam eius labore dolorum et blanditiis sapiente, tempora qui velit id fugit cumque quasi aliquid, recusandae, dignissimos doloribus. Quis modi, similique officiis blanditiis esse odit recusandae repudiandae commodi dignissimos tenetur assumenda aspernatur magni pariatur, beatae unde saepe. Earum porro vel amet distinctio dignissimos ipsa voluptatem, facere eaque possimus doloremque magni fuga hic tempore impedit sequi ipsum cum. Mollitia expedita esse, doloremque aliquid omnis laboriosam consectetur iure minima!</p>
            <br />
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio quam vel sequi doloribus, qui atque ex, voluptates alias iure asperiores. At pariatur dolore suscipit voluptates veniam sed ut consequuntur accusantium! Facere suscipit nihil repellendus debitis atque, harum quasi tempore voluptatibus voluptatem alias ad reiciendis consequatur sint quo id dolorum?</p>
          </div>
        </div>
      </div>
    </>
  )
}
