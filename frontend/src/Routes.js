import React, { PureComponent } from "react";
import Company from './Company';
import Companies from './Companies';
import Jobs from './Jobs';
import Login from './Login';
import User from './User';
import Home from './Home';
import { Switch, Redirect, Route } from "react-router-dom";

class Routes extends PureComponent {
  render() {
    return (

      <Switch>
        <Route exact path="/companies"
          render={() => <Companies />} />
        <Route exact path="/companies/:handle"
          render={rtProps => <Company {...rtProps} />} />
        <Route exact path="/jobs"
          render={() => <Jobs />} />
        <Route exact path="/profile"
          render={rtProps => <User {...rtProps} />} />
        <Route exact path="/login"
          render={rtProps => <Login {...rtProps} />} />
        <Route exact path="/"
          render={() => <Home />} />
        <Redirect to="/" />
      </Switch>

    );
  }
}

export default Routes;