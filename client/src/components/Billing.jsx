import React from "react";
import moment from "moment/moment";

const Billing = () => {
  return (
    <div className="billing">
      <div className="billing-header">
        <h3>INVOICE</h3>
        <hr></hr>
        <span>Invoice number: #</span>
        <span>{moment().format("MMMM Do YYYY, h:mm:ss a")}</span>
      </div>
      <hr></hr>
      <div className="billing-container">
        
        <div className="billing-nav">
          <div className="billing-quantity">
            <span>QNT</span>
          </div>
          <div className="billing-description">
            <span>DESCRIPTION</span>
          </div>
          <div className="billing-price">
            <span>PRICE</span>
          </div>
      </div>
        
        <div className="billing-items">
          <div className="billing-item-quantity">
            <span>QNT</span>
          </div>
          <div className="billing-item-description">
            <span>DESCRIPTION</span>
          </div>
          <div className="billing-item-price">
            <span>PRICE</span>
          </div>
          
        </div>
     
      </div>
      <div className="billing-total">
        <span>Total:10000TND</span>
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Billing;
