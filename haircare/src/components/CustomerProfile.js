import React from "react";
import FileInput from "./FileInput";
import { Link } from "react-router-dom";
import Signupcustomer from '../components/SignUp/signupcustomer'

class CustomerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
      this.setState({
      submitted: true,
    });
  }
  render() {
    if (this.state.submitted) {
      return (
      <h1>Thanks for contacting us</h1>
      );
    } else {
      return (
        
      <form action="send_mail" method="post">
        {/*id='contact-form' onClick={document.forms['contact-form'].submit('send_mail')}>*/} customer sign up
        <div><input type="text" name="customer-username" required></input>
            <label for="email">Username</label></div>

        <div>
          <input type="text" name="customer-email" required></input>
      	  <label for="email">Email</label>
      </div>


      {/* <div>
        <input type="text" name="customer-description" placeholder="Search Stylist..." required></input>
        <label for="message">Search Stylist</label>
      </div> <button type="submit">Search Stylist In Your Area</button> */}
          {/* <div><input type="text" name="customer-username" required></input>
            <label for="email">Username</label></div> */}

          <div><input type="password" name="customer-password" required></input>
            <label for="email">Password</label></div>
          
      <div>
        <input type="text" name="customer-description" required></input>
        <label for="message">Location</label>
      </div>
      
      <div>
        <button onClick={this.handleClick} type="submit">
        	<i class="material-icons">Update Profile</i>
        </button>
        <Link to="/search"> search stylist</Link>
        {/* <button onClick={this.handleClick} type="submit">
        	<i class="material-icons">add</i>
        </button>
        <button onClick={this.handleClick} type="submit">
        	<i class="material-icons">delete</i>
        </button> */}
        
      </div>
    </form>
    )
    }
  }
}


// function CustomerProfile(props) {
//   const handleNewLocation = e => {
//     props.updateLocation(e.target.value);
//   };
//   const handleNewEmail = e => {
//     props.updateEmail(e.target.value);
//   };
//   const handleNewUsername = e => {
//     props.updateSignupUser(e.target.value);
//   };
//   const NewDescription = e => {
//     props.updateDescription(e.target.value);
//   };
//   const NewPicUpload = e => {
//     props.NewPic(e.target.value);
//   };
//   const StylistId = e => {
//     props.NewPic(e.target.value);
//   };
//   return (
//     <div>
//       Profile
//       <form>
//         <label name="customer-username">Username</label>
//         <input
//           className="customerProfile"
//           type="text"
//           name="customer-username"
//           value={props.signupUsername}
//           onChange={handleNewUsername}
//         />
//         <label name="customer-email">Email</label>
//         <input
//           className="customerProfile"
//           type="text"
//           name="customer-email"
//           value={props.email}
//           onChange={handleNewEmail}
//         />

//         <label name="customer-location">Search Stylist</label>
//         <input
//           className="CustomerProfile"
//           type="text"
//           name="customer-location"
//           placeholder="Search Stylist..."
//           value={props.location}
//           onChange={handleNewLocation}
//         />
//         <br></br>
//         <button type="submit">Search Stylist In Your Area</button>
//         <br></br>
//         <label name="customer-description">Description</label>
//         <br></br>
//         <textarea
//           type="text"
//           rows="10"
//           cols="60"
//           name="Tell us what you think"
//           value={props.description}
//           onChange={NewDescription}
//         />
//         <br></br>

//         <FileInput className="NewPic" />
//         <button
//           type="button"
//           onClick={() =>
//             props.postMember(
//               props.location,
//               props.email,
//               props.signupUsername,
//               // props.signupPassword,
//               props.description,
//               props.uploadpic,
//               props.StylistId
//             )
//           }
//         >
//           Add
//         </button>
//         <button
//           type="button"
//           onClick={() =>
//             props.deleteMember(
//               props.location,
//               props.email,
//               props.signupUsername,
//               props.description,
//               props.uploadpic
//             )
//           }
//         >
//           Delete
//         </button>
//         <Link to="/search"> search stylist</Link>
//       </form>
//     </div>
//   );
// }

export default CustomerProfile;
