import React,{useEffect}from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './Login';
import Payment from './Payment';
import {auth} from "./firebase";
import {useStateValue} from './StateProvider';
import './App.css';

function App() {
  const[{user},dispatch]=useStateValue();
 useEffect(()=>{
        //will only run once when the app compoent load..
      auth.onAuthStateChanged(authuser=>{
        console.log("the user is -->",authuser);
        if(auth)
        {
          //the user just logged in/ the user was logged in
          dispatch({
            type: "SET_USER",
            user:authuser
          })
        }
        else {
          dispatch({
            type: "SET_USER",
            user:null
          })
        }
      })


 },[]);

  return (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
          <Header />
          <Payment />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
