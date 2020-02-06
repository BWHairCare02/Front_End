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
  margin:0 auto;
  margin-top: 20%;
  width:50%;
  
`;
class Login extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
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
  login = e =>{
  const login = payload => {
    const authAxios = axiosAuth();
    authAxios
      .post(`http://localhost:5000/api/login`, payload)
      .then(res => {
        console.log("login", res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => {
        console.log("this is login error", err);
      });
  };
  }
  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type='text'
            name='username'
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button type='submit'>Log In</button>
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