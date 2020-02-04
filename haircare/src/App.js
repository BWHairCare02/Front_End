import React from "react";
import Login from "./components/Login";
import StylistSignUpForm from "./components/StylistSignUpForm";
import "./App.css";
// import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStylist } from "./actions/index";
import { Route } from "react-router-dom";
import CustomerSignIn from "./components/CustomerProfile";
import PrivateRoute from "./components/PrivateRoute";
import EditStylistForm from "./components/EditStylistForm";
// import axios from 'axios';

function App(props) {
  return (
    <div className="App">
      {/* <Login /> */}
      <StylistSignUpForm />
      <Route exact path="/" component={Login} />
      <CustomerSignIn />
      <PrivateRoute path="/edit/user">
        <EditStylistForm />
      </PrivateRoute>
      {/* <Route path="/dashboard" component={Dashboard} /> */}
      {/* stylist
      <Login
        {...props}
        status={false}
        greetName="stylist"
        passName="passStylist"
      /> */}
    </div>
  );
}

const mapDispatchToProps = {
  fetchStylist
};

export default connect(state => state, mapDispatchToProps)(App);
