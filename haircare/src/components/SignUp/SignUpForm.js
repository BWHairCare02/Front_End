import React, { Component } from "react";
import axiosAuth from "../../axios/axiosAuth";
class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      customer: {
        username: "",
        password: "",
        email: "",
        location: ""
      }
    };
  }
  handleChange = e => {
    this.setState({
      customer: {
        ...this.state.customer,
        [e.target.name]: e.target.value
      }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const authAxios = axiosAuth();
    authAxios
      .post(`/customer/register`, this.state.customer)
      .then(res => {
        console.log("signup", res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("this is login error", err);
      });
    console.log(this.state.customer);

    if (
      this.state.customer.username !== "" &&
      this.state.customer.password !== "" &&
      this.state.customer.email !== "" &&
      this.state.customer.location !== ""
    ) {
      this.setState({
        customer: {
          username: "",
          password: "",
          email: "",
          location: ""
        }
      });
    }
    console.log(this.state.customer);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>username:</label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.customer.username}
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="text"
            name="password"
            onChange={this.handleChange}
            value={this.state.customer.password}
          ></input>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.customer.email}
          ></input>
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            onChange={this.handleChange}
            value={this.state.customer.location}
          ></input>
        </div>
        <button type="submit"> Add customer</button>
      </form>
    );
  }
}
export default SignUpForm;
