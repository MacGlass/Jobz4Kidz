import React, { PureComponent } from "react";
import JoblyApi from './JoblyApi'

class Company extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      jobs: []
    }
  }

  componentDidMount() {
    let handle = this.props.match.params.handle;
    let res = JoblyApi.getCompany(handle);
    this.setState({
      name: res.name,
      description: res.description,
      jobs: res.jobs
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.description}</h3>
        
      </div>
    );
  }
}

export default Company;