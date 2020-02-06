import React, { Component } from "react";

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      customer: {
        userName: "",
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
        [e.target.userName]: e.target.value
      }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.customer.userName !== "" &&
      this.state.customer.password !== "" &&
      this.state.customer.email !== "" &&
      this.state.customer.location !== ""
    ) {
      this.props.addCustomer(this.state.customer);
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
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.userName}
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="text"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          ></input>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          ></input>
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            onChange={this.handleChange}
            value={this.state.location}
          ></input>
        </div>
        <button type="submit"> Add customer</button>
      </form>
    );
  }
}
export default SignUpForm;
