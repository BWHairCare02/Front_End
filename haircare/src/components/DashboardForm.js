// import React from “react”;
import React, { Component } from "react";
import axiosAuth from "../axios/axiosAuth";
import SignUpForm from "./SignUp/SignUpForm";
import Dashboard from "../Dashboard";
import HairUser from "./HairUser";

class DashboardForm extends Component {
  state = {
    customer: []
  };
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axiosAuth()
      .get("/")
      .then(res => {
        console.log(res);
        this.setState({
          customer: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  add = customer => {
    axiosAuth()
      .post("/hairuser", customer)
      .then(res => {
        // this.getData();
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <SignUpForm add={this.add} />
        {this.state.customer.map(customer => {
          return <HairUser key={customer.id} data={customer} />;
        })}
      </div>
    );
  }
}
export default DashboardForm;
