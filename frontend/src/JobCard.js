import React from 'react';
import './Card.css';

class JobCard extends React.Component {
  render() {

    let { title, salary, equity } = this.props.job;

    return (
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Salary: {salary}</p>
          <p className="card-text">Equity: {equity}</p>
        </div>
      </div>
    );
  }
}

export default JobCard;