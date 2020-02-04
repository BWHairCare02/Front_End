import React from 'react';
// import { render } from 'react';
import Login from './components/Login';
import SignUpForm from './components/SignUpForm';
import './App.css';
// import ReactDOM from "react-dom";
// import { Route } from "react-router-dom";
import { Route } from 'react-router-dom';
import CustomerSignIn from './components/CustomerProfile';
// import axios from 'axios';





function App(props) {
  return (
    <div className="App">
     {/* <Login /> */}
     <SignUpForm />
     <Route exact path='/' component={Login} /> 
     <CustomerSignIn />
    </div>
  );
}

export default App;
