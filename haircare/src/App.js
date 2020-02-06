import React from "react";
import Login from "./components/Login";
import StylistSignUpForm from "./components/SignUp/StylistSignUpForm";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStylist } from "./actions/index";
// import { Route } from "react-router-dom";
import CustomerProfile from "./components/CustomerProfile";
import PrivateRoute from "./Utilities/PrivateRoute";
import EditStylistForm from "./components/Stylist/EditStylistForm";
import StylistForm from "./components/Stylist/StylistForm";
import ItemDetail from "./components/Info/ItemDetail";
import signupcustomer from "./components/SignUp/signupcustomer";
import signupstylist from "./components/SignUp/signupstylist";
import SearchStylist from "./components/SearchStylist";
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

          <Route path="/signup" component={signupcustomer} />
          <Route path="/signup" component={signupstylist} />
          <Route path="/shop" exact component={CustomerProfile} />
          <Route path="/search" exact component={SearchStylist} />
          <PrivateRoute path="/edit/user"></PrivateRoute>
          <PrivateRoute path="/edit/stylist">
            <EditStylistForm />
            <p>Edit</p>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const mapDispatchToProps = {
  fetchStylist
};

export default connect(state => state, mapDispatchToProps)(App);
