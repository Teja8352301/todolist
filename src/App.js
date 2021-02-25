import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Typebar from "./TypeBar/Typebar";
import ListItems from "./ListItems/ListItems";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <Typebar />
        <ListItems />
      </div>
    );
  }
}

export default App;
