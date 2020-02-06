import React from "react";
import Login from "./components/Login";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStylist } from "./actions/index";
// import { Route } from "react-router-dom";
import CustomerProfile from "./components/CustomerProfile";
import PrivateRoute from "./components/PrivateRoute";
import EditStylistForm from "./components/Stylist/EditStylistForm";
import SignUpForm from './components/SignUp/SignUp';
import ItemDetail from "./components/Info/ItemDetail";

import SearchStylist from "./components/SearchStylist";
import { Link } from "react-router-dom";
// import Nav from "./components/Nav";
// import About from "./About";
// import Shop from "./Shop";
// import { Item } from "semantic-ui-react";
// import { components } from "react-select";
import Routes from "./components/Runs";
import Dashboard from './Dashboard';
import DashboardForm from '../src/components/DashboardForm';

// import axios from 'axios';

function App(props) {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <Switch>
          {/* <Route path="/" exact /> */}
          <Route exact path="/" component={Login} />
          <Route component={Login} />
          {/* <Route path="/login" component={StylistForm} /> */}
          {/* <Route component={StylistForm} /> */}
          <Route path="/signup" component={SignUpForm} />
         
          <Route path="/CustomerProfile" exact component={CustomerProfile} />
          <Route path="/search" exact component={SearchStylist} />
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
      <Link to='/protected'>Protected </Link>
      <Link to='/protected'>Protected </Link>
      <PrivateRoute exact path='/protected' component={Dashboard} />
      <PrivateRoute exact path='/protected' component={DashboardForm} />
    </Router>
  );
}

const mapDispatchToProps = {
  fetchStylist
};

export default connect(state => state, mapDispatchToProps)(App);
