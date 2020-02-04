import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  margin-top: 20%;
`

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid rgb(195,116,51);
color: rgb(195,116,51);
margin: 0.5em 1em;
padding: 0.25em 1em;
font-size: 2rem;
border-radius:15px;
`



const Login = props => {
  const [login, setLogin] = useState({ username: '', password: '' });
  const handleChange = event => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/login', login)
      .then(response => {
        console.log(console.log('login response', response.data));
        localStorage.setItem('token', response.data.payload);
        props.history.push('/bubble-page');
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <Container>
      <h1>Welcome Please Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={login.username}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={login.password}
          onChange={handleChange}
        />
        <Button primary type='submit'>Log In</Button>
      </form>
    </Container>
  );
};
export default Login;