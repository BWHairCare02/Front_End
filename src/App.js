import React from 'react';

import Login from './components/Login';
import SignUpForm from './components/SignUpForm';
import './App.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CustomerProfile from './components/CustomerProfile';
// import axios from 'axios';
import StylistForm from './components/StylistForm';
import ItemDetail from './components/ItemDetail';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { Item } from 'semantic-ui-react';
import { components } from 'react-select';
import Routes from "./components/Runs";
import gsap from "gsap"






function App(props) {
  // return (
  //   <div className="App">
  //    <SignUpForm />
  //    <Route exact path='/' component={Login} /> 
  //    <CustomerProfile />
  //    <StylistForm />
     
  //   </div>
  // );

  return (
    // <Routes />
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* <Route path="/" exact /> */}
          <Route exact path='/' component={Login} />
          <Route path="/about" component={StylistForm}/>
          <Route path="/shop" exact component={CustomerProfile}/>
          <Route path="/Meet The Stylist" component={Shop}/>
        </Switch>
        
     </div>
     </Router>
  );
}

export default App;
