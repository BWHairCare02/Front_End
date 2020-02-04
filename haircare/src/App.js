import React from "react";
import { render } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

const imaginaryUser = {
  email: "",
  username: "",
  imaginaryThingId: null
};

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
