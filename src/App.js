import React from 'react';
import { render } from 'react';

import './App.css';
import UserForm from './components/UserForm';


const imaginaryUser = {
  email: '',
  username: '',
  imaginaryThingId: null,
};

function App() {
  return (
    <div className="App">
     <UserForm />
     
    </div>
  );
}

export default App;
