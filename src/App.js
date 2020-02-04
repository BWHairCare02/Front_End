import React from 'react';
// import { render } from 'react';
import Login from './components/Login';
import SignUpForm from './components/SignUpForm';
import './App.css';
// import ReactDOM from "react-dom";
// import { Route } from "react-router-dom";
import { Route } from 'react-router-dom';
import CustomerProfile from './components/CustomerProfile';
// import axios from 'axios';
import StylistForm from './components/StylistForm';





function App(props) {
  return (
    <div className="App">
     <SignUpForm />
     <Route exact path='/' component={Login} /> 
     <CustomerProfile />
     <StylistForm />
    </div>
  );
}

export default App;
