import React, { useEffect } from 'react';
import Header from './Header/Header';
import './App.css';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from "./Payment/Payment";
import {loadStripe, loadstripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"; 

const promise = loadStripe('pk_test_51HtzLPAEdyoT4gUmvCvAhKDOARmpmGykdanTWNyXZgCA3kQjKXyBQhxE0P1xP3j36x1ap9HtIx842Q34wFX7bvuZ00AJZNe4Zg');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log("The user is >>>", authUser);

      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }

    });
  }, [])

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
        <Elements stripe={promise}>
        < Payment/>
        </Elements>
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
