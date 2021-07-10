import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import './Header.css';
import {auth} from "./firebase";
import {useStateValue} from './StateProvider';

function Header()
{
  const [{basket,user}]=useStateValue();

  const userAuthentication=()=>{
       if(user){
         auth.signOut();
       }
  }
  return(
    <div className="header">
      <Link to="/">
        <img className="header_img" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Not displayed"/>
      </Link>
      <div className="header_search">
       <input type="text" className="header_input" />
       <SearchIcon className="header-search-icon" />
      </div>
      <div className="header_nav">
       <Link to={!user && "/login"}>
         <div onClick={userAuthentication}className="header_option">
           <span className="header_one">Hello {!user ? 'Guest':user.email}</span>
           <span className="header_two">{user? 'Sign out' : 'Sign in'}</span>
         </div>
       </Link>
       <div className="header_option">
         <span className="header_one">Returns</span>
         <span className="header_two">& Order</span>
       </div>
       <div className="header_option">
          <span className="header_one">Your</span>
          <span className="header_two">Prime</span>
       </div>
       <Link to="/checkout">
       <div className="header_shoppingbasket">
          <ShoppingBasketIcon />
          <span className="header_two header_basketcount">{basket?.length}</span>
       </div>
       </Link>
      </div>
    </div>
  )
}

export default Header;
