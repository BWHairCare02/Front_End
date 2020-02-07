import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import axios from "axios";
import axiosAuth from "../axios/axiosAuth";
// import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  postCustomer,
  updateLocation,
  // updateEmail,
  updateSignupPass,
  updateSignupUser
} from "../actions/index";
import SignUpForm from "./SignUp/SignUpForm";
const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 20%;
  width: 50%;
`;

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
class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const authAxios = axiosAuth();
    authAxios
      .post(`/customer/login`, this.state.credentials)
      .then(res => {
        console.log("login", res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("this is login error", err);
      });
    console.log(this.state.credentials);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          {/* <button type="submit">Log In</button> */}
          <Button primary type="submit">
            Login
          </Button>
          {/* <Button primary type="submit">
          Sign Up
          </Button> */}
          {/* <Link path="/signup" component={SignUp}/> */}
          {/* <Button><Route path="/signup" component={SignUp} />Sign Up</Button> */}
          <Button>
            {" "}
            <Link to="/signup"> Sign Up</Link>
          </Button>
          {/* <Route path="/signup" component={Login} /> */}
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  postCustomer,
  updateLocation,
  // updateEmail,
  updateSignupPass,
  updateSignupUser
};
export default connect(state => state, mapDispatchToProps)(Login);
