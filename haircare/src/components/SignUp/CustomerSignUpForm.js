import React from 'react';
import { Link } from "react-router-dom";
class CustomerSignUp extends React.Component {
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
export default CustomerSignUp;