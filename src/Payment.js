import React from 'react';
import './Payment.css';
import {useStateValue} from './StateProvider';
import Checkoutproduct from './Checkoutproduct';
import {Link} from 'react-router-dom';

function Payment() {
const[{basket,user},dispatch]=useStateValue();
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <h3>{user?.email}</h3>
            <p>No.9/2 P.E Koil, 1st Lane</p>
            <p>Ayanavaram</p>
            <p>Chennai - 600023</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment-items">
          {basket.map(item=>(
            <Checkoutproduct
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
            />
          ))}
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment details</h3>
          </div>
          <div className="payment-details">

          </div>
        </div>
      </div>
    </div>
  );

}

export default Payment;
