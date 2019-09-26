import React, { Component } from 'react';
import './App.css';
import Routes from './Routes'
import Nav from './Nav'
import { BrowserRouter } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentToken: null
    }
    this.setCurrentToken = this.setCurrentToken.bind(this)
  }

  setCurrentToken() {
    let token = window.localStorage.getItem('_token')
    if (token) {
      this.setState({ currentToken: token })
    } else {
      this.setState({ currentToken: null })
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav currentToken={this.state.currentToken} />
          <Routes setToken={this.setCurrentToken} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
