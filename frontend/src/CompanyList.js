import React from 'react';
import { Link } from 'react-router-dom';
import CompanyCard from './CompanyCard';
import uuid from 'uuid/v4'


class CompanyList extends React.Component {
  render() {
    return (
      <div>
        {this.props.companies.map(comp => {
          return (
            <Link to={`/companies/${comp.handle}`} key={uuid()}> 
              <CompanyCard company={comp} key={uuid()}/> 
            </Link>
        )})}
      </div>
    );
  }
}

export default CompanyList;