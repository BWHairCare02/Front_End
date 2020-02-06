import React from "react";
import { connect } from "react-redux";

import {
  updateLocation,
  updateEmail,
  updateSignupPass,
  updateSignupUser
} from "../../actions/index";

function StylistSignUpForm(props) {
  const handleNewLocation = e => {
    props.updateLocation(e.target.value);
  };
  const handleNewEmail = e => {
    props.updateEmail(e.target.value);
  };
  const handleNewUsername = e => {
    props.updateSignupUser(e.target.value);
  };
  const handleNewPassword = e => {
    props.updateSignupPass(e.target.value);
  };
  return (
    <div>
      SignUpForm
      <form>
        <label name="member-location">Location</label>
        <input
          className="CustomerProfile"
          type="text"
          name="member-location"
          value={props.location}
          onChange={handleNewLocation}
        />
        <label name="member-email">Email</label>
        <input
          className="CustomerProfile"
          type="text"
          name="member-email"
          value={props.email}
          onChange={handleNewEmail}
        />
        <label name="member-username">Username</label>
        <input
          className="CustomerProfile"
          type="text"
          name="member-username"
          value={props.signupUsername}
          onChange={handleNewUsername}
        />
        <label name="member-password">Password</label>
        <input
          className="CustomerProfile"
          type="password"
          name="member-password"
          value={props.signupPassword}
          onChange={handleNewPassword}
        />
        <button
          type="button"
          onClick={() =>
            props.postMember(
              props.location,
              props.email,
              props.signupUsername,
              props.signupPassword
            )
          }
        >
          Make Me a Stylist!
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  updateLocation,
  updateEmail,
  updateSignupPass,
  updateSignupUser
};

export default connect(state => state, mapDispatchToProps)(StylistSignUpForm);
