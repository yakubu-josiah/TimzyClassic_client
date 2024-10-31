import React from 'react'
import './RefundReturn.css';
import ServiceFeatures from '../../components/UI/ServiceFeatures';

export default function RefundReturn() {

  return (
    <div className="RR">
      <div className="cont">
        <div className="wrap">
          <div>
            <h6>OUR</h6>
            <h1>RETURN POLICY</h1>
            <p>When you place an order with us on timzyclassic.com, all ready-to-wear pieces purchased can be returned for exchange within 7 days from day of purchase.</p>
            <p>These Item(s) however are to be in good condition with labels and tags intact upon return and everything listed below is a necessity:</p>

            <ul>
              <li>Please have your order number ready to ensure exchange is validated, as item(s) without an order number will not be accepted.</li>
              <li>We do not give cash refunds, we only accept exchanges.</li>
              <li>We reserve the right to refuse any item(s) not returned in good condition and we are unable to accept any item(s) returned after the 7 day period has elapsed.</li>
              <li>We are able to pick up items for returns in Lagos for free but items outside of Lagos for returns are to be thoroughly examined and returns/shipment fee will be covered by us or the client depending on the issue(s) and the decision for returns/charges will be made solely by Timzy Classic Clothing.</li>
              <li>Tailored-to-fit pieces cannot be exchanged, only re-fitted to suit your body provided you return them within 7 days from receipt.</li>
            </ul>
          </div>
          <div>
            <h6>OUR</h6>
            <h1>REFUND POLICY</h1>
            <p>We do not give cash refunds, we only accept exchanges. In cases where a customer is unable to exchange a returned item for any reason, the customer will be allowed to exchange for any item(s) on the website that is of the same value.</p>
            <p>For assistance please contact us via email: <span>orders@timzyclassic.com</span>.</p>
            <p>You can also return your items to us for an exchange using your own shipper. If you do, an address will be given to you upon request.</p>
            <p>We recommend that you insure the return shipment as you are under a duty to take reasonable care of the items and will be liable for damage to them until we receive them.</p>
            <p>In case of dispute, we also recommend you retain proof of sending, we cannot be responsible for any loss for any item(s) you have chosen to send.</p>
          </div>
        </div>
      </div>

      <div className="sf">
        <ServiceFeatures />
      </div>
    </div>
  )
}
