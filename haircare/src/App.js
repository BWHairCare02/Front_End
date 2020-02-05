import React from "react";
import Login from "./components/Login";
import StylistSignUpForm from "./components/SignUp.js/StylistSignUpForm";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStylist } from "./actions/index";
// import { Route } from "react-router-dom";
import CustomerProfile from "./components/CustomerProfile";
import PrivateRoute from "./components/PrivateRoute";
import EditStylistForm from "./components/Stylist/EditStylistForm";
import StylistForm from "./components/Stylist/StylistForm";
import ItemDetail from "./components/Info/ItemDetail";
// import Nav from "./components/Nav";
// import About from "./About";
// import Shop from "./Shop";
// import { Item } from "semantic-ui-react";
// import { components } from "react-select";
import Routes from "./components/Runs";

// import axios from 'axios';

function App(props) {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <Switch>
          {/* <Route path="/" exact /> */}
          <Route exact path="/" component={Login} />
          <Route path="/login" component={StylistForm} />
          <Route component={StylistForm} />

          <Route path="/shop" exact component={CustomerProfile} />
          {/* <Route path="/Meet The Stylist" component={Shop} /> */}

          <PrivateRoute path="/edit/user"></PrivateRoute>
          <PrivateRoute path="/edit/stylist">
            <EditStylistForm />
            <p>Edit</p>
          </PrivateRoute>
        </Switch>
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        {/* stylist
      <Login
        {...props}
        status={false}
        greetName="stylist"
        passName="passStylist"
      /> */}
      </div>
    </Router>
  );
}

const mapDispatchToProps = {
  fetchStylist
};

export default connect(state => state, mapDispatchToProps)(App);
