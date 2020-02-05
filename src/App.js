import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
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
import gsap from "gsap";
import { TweenMax, Power3 } from 'gsap';







function App(props) {
  // return (
  //   <div className="App">
  //    <SignUpForm />
  //    <Route exact path='/' component={Login} /> 
  //    <CustomerProfile />
  //    <StylistForm />
     
  //   </div>
  // );
  // let logoItem = useRef(null);
  // let textItem = useRef(null);
  // useEffect(() =>{
  //   TweenMax.to(
  //     logoItem,
  //     .8,
  //     {
  //       opacity: 2,
  //       y: -20,
  //       ease:Power3.easeOut
  //     }
  //   )
  //   TweenMax.to(
  //     textItem,
  //     .9,
  //     {
  //       opacity: 2,
  //       y: -20,
  //       ease:Power3.easeOut,
  //       delay:.2 
  //     }
  //   )
  // }, [])

  return (
    // <Routes />
    <Router>
      <div className="App">
        <Nav />
        {/* <img ref={el => {logoItem = el}}
        src={logo} className="App-logo" alt="logo" /> */}
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
