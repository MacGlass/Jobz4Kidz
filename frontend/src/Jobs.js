import React, { PureComponent } from "react";
import JobList from './JobList';
import JoblyApi from './JoblyApi';
import SearchForm from './SearchForm';

class Jobs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }
    this.searchCompanies = this.searchCompanies.bind(this);
  }

  async componentDidMount() {
    let res = await JoblyApi.getAllJobs();
    this.setState({ jobs: res });
  }

  async searchCompanies(query) {
    let res = await JoblyApi.getSearchedJobs(query);
    this.setState({ jobs: res });
  } 

  render() {
    return (
      <div className="container">
        <SearchForm search={this.searchCompanies} />
        <JobList jobs={this.state.jobs} />
      </div>
    );
  }
}

export default Jobs;