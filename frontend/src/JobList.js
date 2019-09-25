import React from 'react';
import JobCard from './JobCard';

class JobList extends React.Component {
  render() {
    return (
      <div className="text-center justify-content-center">
        {this.props.jobs.map(job => {
          return <JobCard job={job} key={job.id} />
        })}
      </div>
    );
  }
}

export default JobList;