import React, { useState } from "react";
import axios from "axios";
import axiosAuth from "../axios/axiosAuth";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  stylistFalse,
  stylistTrue,
  fetchStylist,
  stylistPass,
  stylistUser,
  successLoad,
  postCustomer,
  updateLocation,
  updateEmail,
  updateSignupPass,
  updateSignupUser
} from "../actions/index";

const Container = styled.div`
  text-align: center;
  margin-top: 20%;
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

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the  route
  const login = payload => {
    const authAxios = axiosAuth();
    authAxios
      .post(`/auth/login`, payload)
      .then(res => {
        console.log("this is res.data", res);
        localStorage.setItem("token", res.data.token);
        successLoad();
        return props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("this is login error", err);
      });
  };

  const handleLogin = e => {
    e.preventDefault();
    let holdInputs = {};
    if (props.stylist === false) {
      holdInputs = {
        username: props.stylistInput["username"],
        password: props.stylistInput["password"]
      };
    } else {
      holdInputs = {
        username: props.userInput["username"],
        password: props.userInput["password"]
      };
    }
    // fix
    console.log("this is holding", holdInputs);
    login(holdInputs);
    props.fetchStylist();
  };
  // Fix
  let stylistStatus = () => {
    if (props.status == false) {
      props.stylistFalse();
    } else {
      props.stylistTrue();
    }
  };

  const usernameStateValue = props =>
    props.greetName === "stylist"
      ? props.stylistInput["username"]
      : props.userInput["username"];
  const passwordStateValue = props =>
    props.greetName === "stylist"
      ? props.stylistInput["password"]
      : props.userInput["password"];

  const handleUserChange = () => e => {
    e.preventDefault();
    props.status === false
      ? props.updateStylistUser(e.target.value)
      : props.updateUserName(e.target.value);
  };
  const handlePassChange = () => e => {
    e.preventDefault();

    props.status === false
      ? props.updateStylistPass(e.target.value)
      : props.updatePassWord(e.target.value);
  };
  console.log("this is props.stylistInput", props.stylistInput);

  console.log("this is props.userInput", props.userInput);

  const inputName = props.admin === false ? "stylist" : "username";
  const inputPass = props.admin === false ? "passStylist" : "password";
  // const Login = props =>
  //  const [login, setLogin] = useState({ username: "", password: "" });
  // const handleChange = event => {
  //   setLogin({
  //     ...login,
  //     [event.target.name]: event.target.value
  //   });
  // };
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   axios
  //     .post("http://localhost:5000/api/login", login)
  //     .then(response => {
  //       console.log(console.log("login response", response.data));
  //       localStorage.setItem("token", response.data.payload);
  //       props.history.push("/bubble-page");
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  return (
    // <Container>
    <div>
      <h1>Welcome Please Sign-In</h1>
      <form
        onSubmit={handleLogin}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label name={props.greetName}>Username</label>
        <input
          onClick={stylistStatus}
          type="text"
          name={props.greetName}
          value={JSON.stringify(usernameStateValue)}
          onChange={handleUserChange(inputName)}
        />

        <label name={props.greetName}>Password</label>
        <input
          onClick={stylistStatus}
          type="password"
          name={props.passName}
          value={JSON.stringify(passwordStateValue)}
          onChange={handlePassChange(inputPass)}
        />

        <Button primary type="submit">
          Log In
        </Button>
        <Link to="/signup"> Sign Up</Link>
        <Link to="/shop"> costumer profile</Link>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  successLoad,
  postCustomer,
  updateLocation,
  updateEmail,
  stylistPass,
  stylistUser,
  stylistFalse,
  stylistTrue,
  fetchStylist,
  updateSignupPass,
  updateSignupUser
};

export default connect(state => state, mapDispatchToProps)(Login);
