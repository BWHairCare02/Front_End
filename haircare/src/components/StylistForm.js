import React from "react";
import FileInput from "./FileInput";

function StylistForm(props) {
  const handleNewLocation = e => {
    props.updateLocation(e.target.value);
  };
  const handleNewEmail = e => {
    props.updateEmail(e.target.value);
  };
  const handleNewUsername = e => {
    props.updateSignupUser(e.target.value);
  };
  // const handleNewPassword = e => {
  //   props.updateSignupPass(e.target.value);
  // };
  const NewDiscription = e => {
    props.updateDiscription(e.target.value);
  };
  const NewPicUpload = e => {
    props.NewPic(e.target.value);
  };
  const StylistId = e => {
    props.NewPic(e.target.value);
  };
  return (
    <div>
      Stylist Profile
      <form>
        {/* <label name='member-username'>Username</label>
          <input className='CustomerProfile'
            type='text'
            name='member-username'
            value={props.signupUsername}
            onChange={handleNewUsername}
          /> */}

        <label name="stylist-username">Stylist Name</label>
        <input
          className="CustomerProfile"
          type="text"
          name="member-username"
          value={props.stylesid}
          onChange={StylistId}
        />
        {/* <label name='member-email'>Email</label>
          <input className='CustomerProfile'
            type='text'
            name='member-email'
            value={props.email}
            onChange={handleNewEmail}
          /> */}
        {/* <label name='member-password'>Password</label>
          <input
            type='password'
            name='member-password'
            value={props.signupPassword}
            onChange={handleNewPassword}
          /> */}
        <label name="member-location">Search Stylist</label>
        <input
          className="CustomerProfile"
          type="text"
          name="member-location"
          placeholder="Search Stylist..."
          value={props.location}
          onChange={handleNewLocation}
        />
        <br></br>
        <button type="submit">Search Stylist In Your Area</button>
        <br></br>
        {/* <label name='member-discription'>Discription</label><br></br>
          <textarea
            type='text'
            rows='10'
            cols='60'
            name='Tell us what you think'
            value={props.discription}
            onChange={NewDiscription}
          /><br></br> */}
        {/* <input className="NewPic"
            type='file'
            name='myFile'
            name='filename'
            
            value={props.uploadpic}
            onChange={NewPicUpload}
            
          /><input className='PicSubmit' type="submit"></input> */}

        {/* <FileInput className='NewPic' />
          <button
            type='button'
            onClick={() =>
              props.postMember(
                props.location,
                props.email,
                props.signupUsername,
                // props.signupPassword,
                props.discription,
                props.uploadpic,
                props.StylistId
              )
            }
          >
            Add
          </button> */}
        <button
          type="button"
          onClick={() =>
            props.upDateStylist(
              props.location,
              props.email,
              props.signupUsername,
              // props.signupPassword,
              props.discription,
              props.uploadpic
            )
          }
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default StylistForm;
