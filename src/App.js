import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Header from "./components/navigation/header";
import MainContainer from "./components/main/main"
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Header></Header>
        <MainContainer/>
      </div>
    );
  }
}

export default withRouter(App);
