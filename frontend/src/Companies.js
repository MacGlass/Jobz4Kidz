import React, { PureComponent } from "react";
import JoblyApi from './JoblyApi';
import CompanyList from './CompanyList';
import SearchForm from './SearchForm';

class Companies extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    }
    this.searchCompanies = this.searchCompanies.bind(this);
  }

  async componentDidMount() {
    let res = await JoblyApi.getAllCompanies();
    this.setState({ companies: res });
  }

  async searchCompanies(query) {
    let res = await JoblyApi.getSearchedCompanies(query);
    this.setState({ companies: res });
  } 

  render() {
    return (
      <div className="container">
        <SearchForm search={this.searchCompanies} />
        <CompanyList companies={this.state.companies} />
      </div>
    );
  }
}

export default Companies;