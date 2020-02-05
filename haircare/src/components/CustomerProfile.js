import React from "react";
import FileInput from "./FileInput";
import { Link } from "react-router-dom";

function CustomerProfile(props) {
  const handleNewLocation = e => {
    props.updateLocation(e.target.value);
  };
  const handleNewEmail = e => {
    props.updateEmail(e.target.value);
  };
  const handleNewUsername = e => {
    props.updateSignupUser(e.target.value);
  };
  const NewDescription = e => {
    props.updateDescription(e.target.value);
  };
  const NewPicUpload = e => {
    props.NewPic(e.target.value);
  };
  const StylistId = e => {
    props.NewPic(e.target.value);
  };
  return (
    <div>
      Profile
      <form>
        <label name="customer-username">Username</label>
        <input
          className="customerProfile"
          type="text"
          name="customer-username"
          value={props.signupUsername}
          onChange={handleNewUsername}
        />
        <label name="customer-email">Email</label>
        <input
          className="customerProfile"
          type="text"
          name="customer-email"
          value={props.email}
          onChange={handleNewEmail}
        />

        <label name="customer-location">Search Stylist</label>
        <input
          className="CustomerProfile"
          type="text"
          name="customer-location"
          placeholder="Search Stylist..."
          value={props.location}
          onChange={handleNewLocation}
        />
        <br></br>
        <button type="submit">Search Stylist In Your Area</button>
        <br></br>
        <label name="customer-description">Description</label>
        <br></br>
        <textarea
          type="text"
          rows="10"
          cols="60"
          name="Tell us what you think"
          value={props.description}
          onChange={NewDescription}
        />
        <br></br>

        <FileInput className="NewPic" />
        <button
          type="button"
          onClick={() =>
            props.postMember(
              props.location,
              props.email,
              props.signupUsername,
              // props.signupPassword,
              props.description,
              props.uploadpic,
              props.StylistId
            )
          }
        >
          Add
        </button>
        <button
          type="button"
          onClick={() =>
            props.deleteMember(
              props.location,
              props.email,
              props.signupUsername,
              props.description,
              props.uploadpic
            )
          }
        >
          Delete
        </button>
        <Link to="/search"> search stylist</Link>
      </form>
    </div>
  );
}

export default CustomerProfile;

// import React, { Component } from 'react';
// import '../App.css';

// class EntryPage extends Component {
//     constructor(props){
//       super(props)
//       this.state = {
//         currentView: "signUp"
//       }
//     }

//     changeView = (view) => {
//       this.setState({
//         currentView: view
//       })
//     }

//     currentView = () => {
//       switch(this.state.currentView) {
//         case "signUp":
//           return (
//             <form>
//               <h2>Sign Up!</h2>
//               <fieldset>
//                 <legend>Create Account</legend>
//                 <ul>
//                   <li>
//                     <label for="username">Username:</label>
//                     <input type="text" id="username" required/>
//                   </li>
//                   <li>
//                     <label for="email">Email:</label>
//                     <input type="email" id="email" required/>
//                   </li>
//                   <li>
//                     <label for="password">Password:</label>
//                     <input type="password" id="password" required/>
//                   </li>
//                   <select className="DropDownTwo">
//                       <option value="stylist">Stylist</option>
//                       <option value="customer">Customer</option>

//                   </select>
//                   <select class="ui search dropdown">
//   <option value="">State</option>
//   <option value="AL">Alabama</option>
//   <option value="AK">Alaska</option>
//   <option value="AZ">Arizona</option>
//   <option value="AR">Arkansas</option>
//   <option value="CA">California</option>
//   <option value="CO">Colorado</option>
//   <option value="CT">Connecticut</option>
//   <option value="DE">Delaware</option>
//   <option value="DC">District Of Columbia</option>
//   <option value="FL">Florida</option>
//   <option value="GA">Georgia</option>
//   <option value="HI">Hawaii</option>
//   <option value="ID">Idaho</option>
//   <option value="IL">Illinois</option>
//   <option value="IN">Indiana</option>
//   <option value="IA">Iowa</option>
//   <option value="KS">Kansas</option>
//   <option value="KY">Kentucky</option>
//   <option value="LA">Louisiana</option>
//   <option value="ME">Maine</option>
//   <option value="MD">Maryland</option>
//   <option value="MA">Massachusetts</option>
//   <option value="MI">Michigan</option>
//   <option value="MN">Minnesota</option>
//   <option value="MS">Mississippi</option>
//   <option value="MO">Missouri</option>
//   <option value="MT">Montana</option>
//   <option value="NE">Nebraska</option>
//   <option value="NV">Nevada</option>
//   <option value="NH">New Hampshire</option>
//   <option value="NJ">New Jersey</option>
//   <option value="NM">New Mexico</option>
//   <option value="NY">New York</option>
//   <option value="NC">North Carolina</option>
//   <option value="ND">North Dakota</option>
//   <option value="OH">Ohio</option>
//   <option value="OK">Oklahoma</option>
//   <option value="OR">Oregon</option>
//   <option value="PA">Pennsylvania</option>
//   <option value="RI">Rhode Island</option>
//   <option value="SC">South Carolina</option>
//   <option value="SD">South Dakota</option>
//   <option value="TN">Tennessee</option>
//   <option value="TX">Texas</option>
//   <option value="UT">Utah</option>
//   <option value="VT">Vermont</option>
//   <option value="VA">Virginia</option>
//   <option value="WA">Washington</option>
//   <option value="WV">West Virginia</option>
//   <option value="WI">Wisconsin</option>
//   <option value="WY">Wyoming</option>
// </select>
//                 </ul>
//               </fieldset>
//               <button>Submit</button>
//               <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
//             </form>
//           )
//           break
//         case "logIn":
//           return (
//             <form>
//               <h2>Welcome Back!</h2>
//               <fieldset>
//                 <legend>Log In</legend>
//                 <ul>
//                   <li>
//                     <label for="username">Username:</label>
//                     <input type="text" id="username" required/>
//                   </li>
//                   <li>
//                     <label for="password">Password:</label>
//                     <input type="password" id="password" required/>
//                   </li>
//                    <li>
//                    {/* <Dropdown clearable options={options} selection /> */}
//                    <select className="DropDown">
//                       <option value="stylist">Stylist</option>
//                       <option value="customer">Customer</option>

//                   </select>
//                     {/* <label for="password">Password:</label>
//                     <input type="password" id="password" required/> */}
//                   </li>
//                   <li>
//                     <i/>
//                     <a className="FPW" onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a>
//                   </li>
//                 </ul>
//               </fieldset>
//               <button>Login</button>
//               <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
//             </form>
//           )
//           break
//         case "PWReset":
//           return (
//             <form>
//             <h2>Reset Password</h2>
//             <fieldset>
//               <legend>Password Reset</legend>
//               <ul>
//                 <li>
//                   <em>A reset link will be sent to your inbox!</em>
//                 </li>
//                 <li>
//                   <label for="email">Email:</label>
//                   <input type="email" id="email" required/>
//                 </li>
//               </ul>
//             </fieldset>
//             <button>Send Reset Link</button>
//             <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
//           </form>
//           )
//         default:
//           break
//       }
//     }

//     render() {
//       return (
//         <section id="entry-page">
//           {this.currentView()}
//         </section>
//       )
//     }
//   }

//   export default EntryPage
