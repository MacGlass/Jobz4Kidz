import React, { PureComponent } from "react";
import JoblyApi from './JoblyApi'
import JobList from './JobList';

class Company extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      jobs: []
    }
  }

  async componentDidMount() {
    let handle = this.props.match.params.handle;
    let res = await JoblyApi.getCompany(handle);
    this.setState({
      name: res.name,
      description: res.description,
      jobs: res.jobs
    });
    console.log(this.state.jobs);
  }

  render() {
    return (
      <div className="container justify-content-center">
        <h1>{this.state.name}</h1>
        <h3>{this.state.description}</h3>
        <JobList jobs={this.state.jobs} />
      </div>
    );
  }
}

export default Company;