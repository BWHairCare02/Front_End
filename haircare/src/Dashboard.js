import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp/SignUp";
import { Link } from "react-router-dom";
import CustomerProfile from "./components/Reviews/CustomerProfile";
import CustomerReview from "./components/Reviews/CustomerReview";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid rgb(195, 116, 51);
  color: rgb(195, 116, 51);
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-size: 2rem;
  border-radius: 15px;
`;

const Dashboard = () => {
  return (
    <div>
      {/* <Button primary type="submit">
          Stylist Login
        </Button>
        <Button primary type="submit">
          Customer Login
          </Button> */}
      <h3>Dashboard</h3>
      <p>Welcome Customers and Stylist</p>
      <Link to="/CustomerProfile">
        <button>Customer</button>
      </Link>
      <Link to="/stylistprofile">
        <button>Stylist</button>
      </Link>
      <CustomerReview />
      <Route path="/signup" component={Login} />
      <Route path="/signup" component={Login} />
    </div>
  );
};

export default Dashboard;
