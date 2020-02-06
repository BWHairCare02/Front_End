import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FileInput from "./FileInput";
import styled from "styled-components";
import {
  postCustomer,
  updateLocation,
  updateEmail,
  updateSignupPass,
  updateSignupUser
} from "../actions";
const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 20%;
  width: 50%;
`;
class CustomerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      submitted: true
    });
  }
  render() {
    if (this.state.submitted) {
      return <h1>Thanks for contacting us</h1>;
    } else {
      return (
        <Container>
          <form action="send_mail" method="post">
            {/*id='contact-form' onClick={document.forms['contact-form'].submit('send_mail')}>*/}{" "}
            Profile
            <div>
              <input type="text" name="customer-username" required></input>
              <label for="email">Username</label>
            </div>
            <div>
              <input type="text" name="customer-email" required></input>
              <label for="email">Email</label>
            </div>
            <div>
              <input
                type="text"
                name="customer-description"
                placeholder="Search Stylist..."
                required
              ></input>
              <label for="message">Search Stylist</label>
            </div>{" "}
            <button type="submit">Search Stylist In Your Area</button>
            {/* <div><input type="text" name="customer-username" required></input>
            <label for="email">Username</label></div> */}
            {/* <div><input type="password" name="customer-password" required></input>
            <label for="email">Password</label></div> */}
            <div>
              <textarea
                type="text"
                name="customer-description"
                required
              ></textarea>
              <label for="message">Description</label>
            </div>
            <FileInput />
            <div>
              <button onClick={this.handleClick} type="submit">
                <i class="material-icons">Update Profile</i>
              </button>
              <Link to="/search"> search stylist</Link>
              <button onClick={this.handleClick} type="submit">
                <i class="material-icons">add</i>
              </button>
              <button onClick={this.handleClick} type="submit">
                <i class="material-icons">delete</i>
              </button>
            </div>
          </form>
        </Container>
      );
    }
  }
}
const mapDispatchToProps = {
  postCustomer,
  updateLocation,
  updateEmail,
  updateSignupPass,
  updateSignupUser
};
export default connect(state => state, mapDispatchToProps)(CustomerProfile);
