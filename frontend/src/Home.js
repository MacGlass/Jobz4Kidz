import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        {!(window.localStorage._token) ? 
          <Link to="/login"><button>Login</button></Link> :
          ""
        }
      </div>
    );
  }
}

export default Home;