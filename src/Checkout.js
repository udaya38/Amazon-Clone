import React from 'react';
import './Checkout.css';
import ShopperCount from './ShopperCount';
import {useStateValue} from './StateProvider';
import Checkoutproduct from './Checkoutproduct';

function Checkout() {
  const [{basket,user}]=useStateValue();
  return (
      <div className="checkout">
        <div className="checkout-left">
          <img className="checkout-ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/CorpGCPages/InterMiles_Banner_PC.jpg" alt="Not Displayed"/>
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout-title">Your Shopping Basket</h2>
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
        <div className="checkout-right">
          <ShopperCount />
        </div>
      </div>
  );
}

export default Checkout;
