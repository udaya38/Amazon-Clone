import React from 'react';
import './Checkoutproduct.css';
import {useStateValue} from './StateProvider';


function Checkoutproduct({id,image,title,price,rating}) {
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket =() =>{
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id
      })
    }
  return (

    <div className="checkoutproduct">
      <img className="checkoutproduct-image" src={image} alt=""/>
      <div className="checkoutproduct-info">
        <p className="checkoutproduct-title">{title}</p>
        <p className="checkoutproduct-price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct-rating">
          {Array(rating).fill().map((_,id)=>
          (
            <p key={id}>⭐</p>
          ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>

  );
}

export default Checkoutproduct;
