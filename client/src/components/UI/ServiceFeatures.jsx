import React from 'react'
import './ServiceFeatures.css'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';

export default function ServiceFeatures() {
  return (
    <div className="SF">
        <div className="SF_cont">
            <div className="SF_wrap">
                <div className="SF_item">
                    <div className="SF_card">
                        <div className="SF_icon">
                            <i><LocalShippingOutlinedIcon className="icn"/></i>
                        </div>
                        <div className="SF_details">
                            <h4>SHIPPING DELIVERY</h4>
                            <p>We've partnered with DHL to get you your orders, faster.</p>
                        </div>
                    </div>
                </div>

                <div className="SF_item">
                    <div className="SF_card">
                        <div className="SF_icon">
                            <i><AccountBalanceWalletOutlinedIcon className="icn"/></i>
                        </div>
                        <div className="SF_details">
                            <h4>AFFORDABLE</h4>
                            <p>You don't need to break the bank for our amazing pieces.</p>
                        </div>
                    </div>
                </div>

                <div className="SF_item">
                    <div className="SF_card">
                        <div className="SF_icon">
                            <i><EmojiObjectsOutlinedIcon className="icn"/></i>
                        </div>
                        <div className="SF_details">
                            <h4>CREATIVE DRESSES</h4>
                            <p>We're all about creative outfits that speak to who you are.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
