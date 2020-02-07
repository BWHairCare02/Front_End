import React from "react";
import Login from "./components/Login";
import SignUp from "../src/components/SignUp/SignUp";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStylist } from "./actions/index";
import CustomerProfile from "./components/Reviews/CustomerProfile";
import PrivateRoute from "./Utilities/PrivateRoute";
import EditStylistForm from "./components/Stylist/EditStylistForm";
import SignUpForm from "./components/SignUp/SignUp";
import ItemDetail from "./components/Info/ItemDetail";
import StylistForm from "./components/Stylist/StylistForm";
import SearchStylist from "./components/Stylist/SearchStylist";
import { Link } from "react-router-dom";
import Routes from "./components/Runs";
import Dashboard from "./Dashboard";

// import axios from 'axios';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <Switch>
          {/* <Route path="/" exact /> */}

          <Route path="/CustomerProfile" exact component={CustomerProfile} />
          <Route path="/search" exact component={SearchStylist} />
          <Route path="/stylistprofile" exact component={StylistForm} />
          <PrivateRoute path="/edit/user">edit user </PrivateRoute>
          <PrivateRoute path="/edit/stylist">
            <EditStylistForm />
            <p>Edit</p>
          </PrivateRoute>
          <Route
            exact
            path="/"
            // component={Login}

            render={props => <Login {...props} />}
          />
          <Route path="/signup" component={SignUp} />
          {/* <Link to="/dashboard">Dashboard </Link> */}
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

const mapDispatchToProps = {
  fetchStylist
};

export default connect(state => state, mapDispatchToProps)(App);
