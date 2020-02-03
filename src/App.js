import React from 'react';
import { render } from 'react';
import SignUpForm from './components/signupform/SignUpForm';
import CustomerForm from './components/customer/CustomerForm';
import StylistForm from './components/stylist/StylistForm';
import './App.css';
import UserForm from './components/UserForm';
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     {/* <UserForm />
     <SignUpForm />
     <CustomerForm />
     <StylistForm /> */}
     <Route exact path='/' component={Login} />
     
    </div>
  );
}

export default App;
