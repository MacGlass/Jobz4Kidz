import React, { Component } from "react";

class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.register(this.state)
    this.setState({username: "", password: "", firstName: "", lastName: "", email: ""})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username"></label>
          <input
            onChange={this.handleChange}
            placeholder="Username"
            type="text"
            name="username"
            value={this.state.username}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            onChange={this.handleChange}
            placeholder="Password"
            type="text"
            name="password"
            value={this.state.password}
          />
        </div>
        <div>
          <label htmlFor="firstname"></label>
          <input
            onChange={this.handleChange}
            placeholder="First Name"
            type="text"
            name="firstName"
            value={this.state.firstName}
          />
        </div>
        <div>
          <label htmlFor="lastname"></label>
          <input
            onChange={this.handleChange}
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={this.state.lastName}
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            onChange={this.handleChange}
            placeholder="email"
            type="text"
            name="email"
            value={this.state.email}
          />
        </div>
        <button>Register</button>
      </form>
    );
  }
}

export default RegisterForm;