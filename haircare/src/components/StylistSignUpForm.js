import React from "react";
import { connect } from "react-redux";

import {
  updateLocation,
  updateEmail,
  updateSignupPass,
  updateSignupUser
} from "../actions/index";

// function SignUpForm(props){
//     const handleNewState = e => {
//         props.updateState(e.target.value)
//     }
//     const handleNewEmail = e => {
//         props.updateEmail(e.target.value)
//     }
//     const handleNewUsername = e => {
//         props.updateSignupUser(e.target.value)
//     }
//     const handleNewPassword = e => {
//         props.updateSignupPass(e.target.value)
//     }
//     return (
//         <div>
//            SignUpForm
//            <form  >
//                 <label name='member-state'>State</label>
//                 <input type='text' name='member-state' value={props.state} onChange={handleNewState}/>
//                 <label name='member-email'>Email</label>
//                 <input type='text' name='member-email' value={props.email} onChange={handleNewEmail}/>
//                 <label name='member-username'>Username</label>
//                 <input type='text' name='member-username' value={props.signupUsername} onChange={handleNewUsername}/>
//                 <label name='member-password'>Password</label>
//                 <input type='password' name='member-password' value={props.signupPassword} onChange={handleNewPassword}/> </form>
//                 </div>);

//                 export default SignUpForm;

// import React from 'react';

// class NewBook extends React.Component {
//     constructor(props){
//       super(props);
//       this.handleSubmit = this.handleSubmit.bind(this);

//       this.state = {
//         message: "",
//         newbook: {
//           key: Date.now(),
//           Title: "",
//           Author: "",
//           Genre :"",
//         //   YearReleased: ""
//         }
//       };
//     }

//     handleSubmit(e) {
//       e.preventDefault();
//       this.setState({ message: 'Sending...' }, this.sendFormData);
//     }

//   sendFormData() {
//     var formData = {
//         Title: this.refs.Title.value,
//         Author: this.refs.Author.value,
//         Genre: this.refs.Genre.value}
//         // YearReleased: this.refs.YearReleased.value};
//     setTimeout(() => {
//       console.log(formData);
//       this.setState({ message: 'data sent!' });
//     }, 3000);
//   }

//     render () {
//       return (
//         <div>
//           <h1>Profile</h1>
//           {this.state.message}
//           <form onSubmit={this.handleSubmit}>
//               <p> <label for="title">First Name</label><input id="title" type="text" ref="Title" /></p>
//               <p><label for="author">Last Name</label><input id="author" type="text" ref="Author" /></p>

//               <select className="DropDownTwo">
//                       <option value="stylist">Stylist</option>
//                       <option value="customer">Customer</option>
//                   </select>
//                   <form>
//                         <input type = "checkbox" name = "maths" value = "on"> </input>
//                         <input type = "checkbox" name = "physics" value = "on"> </input>
//                   </form>
//                   <select>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                   </select>

//          <select class="ui search dropdown">
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
// <p><textarea rows = "5" cols = "50" name = "description">
//             Enter description here...
//          </textarea></p>

//               {/* <p><label for="first_published">First Published</label><input id="first_published" type="text" ref="YearReleased"  /></p> */}
//               <p><input type="submit" /></p>
//           </form>
//         </div>
//       )
//     }
//   }

//   export default NewBook;
// import React from "react";

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
          type="text"
          name="member-location"
          value={props.location}
          onChange={handleNewLocation}
        />
        <label name="member-email">Email</label>
        <input
          type="text"
          name="member-email"
          value={props.email}
          onChange={handleNewEmail}
        />
        <label name="member-username">Username</label>
        <input
          type="text"
          name="member-username"
          value={props.signupUsername}
          onChange={handleNewUsername}
        />
        <label name="member-password">Password</label>
        <input
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
          Make a Customer!
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  // postMember,
  updateLocation,
  updateEmail,

  updateSignupPass,
  updateSignupUser
};

export default connect(state => state, mapDispatchToProps)(StylistSignUpForm);
