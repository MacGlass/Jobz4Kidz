import React, { Component } from 'react';
import './App.css';
import Routes from './Routes'
import Nav from './Nav'
import { BrowserRouter } from "react-router-dom";




class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
