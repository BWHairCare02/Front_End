import React from 'react';


const HairUser = props => {
  return (
    <div>
      <h1> Username: {props.data.userName}</h1>
      <p className='password'> Password:{props.data.password}</p>
      <p className='email'> Email: {props.data.email}</p>
      <p className='location'> Location:{props.data.loaction}</p>
    </div>
  );
};
export default HairUser;