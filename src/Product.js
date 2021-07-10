import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';

function Product({id,title,price,rating,image}) {
  const[state,dispatch]=useStateValue();
  const addToBasket = ()=>{
    //dispatch the item to data dataLayer
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating
      }
    })

  }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_,id)=>
          (
            <p key={id}>⭐</p>
          ))}

        </div>
      </div>
      <img src={image} alt="Not displayed" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
