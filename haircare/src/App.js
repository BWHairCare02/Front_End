import React from "react";
import Login from "./components/Login";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStylist } from "./actions/index";
// import { Route } from "react-router-dom";
import CustomerProfile from "./components/CustomerProfile";
import PrivateRoute from "./Utilities/PrivateRoute";
import EditStylistForm from "./components/Stylist/EditStylistForm";
import SignUpForm from "./components/SignUp/SignUp";
import ItemDetail from "./components/Info/ItemDetail";

import SearchStylist from "./components/SearchStylist";
import { Link } from "react-router-dom";
import Routes from "./components/Runs";
import Dashboard from "./Dashboard";
import DashboardForm from "../src/components/DashboardForm";

// import axios from 'axios';

function App(props) {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <Switch>
          <nav>
            <Route exact path="/" component={Login} />
            <Link to="/protected">Dashboard </Link>
            {/* <Route component={Login} /> */}
          </nav>
          <Route path="/signup" component={SignUpForm} />
          <Route path="/CustomerProfile" exact component={CustomerProfile} />
          <Route path="/search" exact component={SearchStylist} />
          <PrivateRoute path="/edit/user"></PrivateRoute>
          <PrivateRoute path="/edit/stylist">
            <EditStylistForm />
            <p>Edit</p>
          </PrivateRoute>
        </Switch>
      </div>

      <PrivateRoute exact path="/protected" component={Dashboard} />
    </Router>
  );
}

const mapDispatchToProps = {
  fetchStylist
};

export default connect(state => state, mapDispatchToProps)(App);
