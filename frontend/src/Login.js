import React, { PureComponent } from "react";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import JoblyApi from './JoblyApi';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      form: 'Login'
    }
    this.clickLogin = this.clickLogin.bind(this);
    this.clickSignUp = this.clickSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  clickLogin() {
    this.setState({ form: 'Login' });
  }

  clickSignUp() {
    this.setState({ form: 'Register' });
  }

  async handleLogin(userData) {
    let token = await JoblyApi.login(userData);
    window.localStorage.setItem('_token', token);
    this.props.setToken()
  }

  async handleRegister(userData) {
    let token = await JoblyApi.register(userData);
    window.localStorage.setItem('_token', token);
    this.props.setToken()
  }


  render() {
    return (
      <div>
        <button onClick={this.clickLogin}>Login</button>
        <button onClick={this.clickSignUp}>Register</button>

        {this.state.form === 'Login' ?
          <LoginForm login={this.handleLogin}/>
          :
          <RegisterForm register={this.handleRegister}/>
        }

      </div>
    );
  }
}

export default Login;