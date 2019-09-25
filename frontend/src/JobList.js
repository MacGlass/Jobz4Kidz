import React from 'react';
import JobCard from './JobCard';
import uuid from 'uuid/v4';

class JobList extends React.Component {
  render() {
    return (
      <div className="text-center justify-content-center">
        {this.props.jobs.map(job => {
        return <JobCard job={job} key={uuid()} />
      })}
      </div>
    );
  }
}

export default JobList;