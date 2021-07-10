import React from 'react';
import './ShopperCount.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import {getBasketCount} from './Reducer';
import {useHistory} from 'react-router-dom';

function ShopperCount() {
  const [{basket}]=useStateValue();
  const history=useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value)=> (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />This border
              contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketCount(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={e => history.push("/payment")}>Proceed to checkout</button>
    </div>

  );
}

export default ShopperCount;
