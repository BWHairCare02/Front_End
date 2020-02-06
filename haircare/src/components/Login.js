import React, { Component, useState } from "react";
import axios from "axios";
import axiosAuth from "../axios/axiosAuth";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  postCustomer,
  updateLocation,
  updateEmail,
  updateSignupPass,
  updateSignupUser
} from "../actions/index";

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
  login = e => {
    const login = payload => {
      const authAxios = axiosAuth();
      authAxios
        .post(`http://localhost:5000/api/login`, payload)
        .then(res => {
          console.log("login", res);
          localStorage.setItem("token", res.data.payload);
          this.history.push("/protected");
        })
        .catch(err => {
          console.log("this is login error", err);
        });
    };
  };
  render() {
    return (
      <div>
        <form onSubmit={this.login}>
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

          <Button primary type="submit">
            Log In
          </Button>
          <Button primary type="submit">
            Sign up
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  postCustomer,
  updateLocation,
  updateEmail,

  updateSignupPass,
  updateSignupUser
};

export default connect(state => state, mapDispatchToProps)(Login);
