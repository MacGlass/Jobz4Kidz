import React from 'react';
import JobCard from './JobCard';

class JobList extends React.Component {
  render() {
    return (
      <div className="text-center justify-content-center">
        {this.props.jobs.map(job => {
          return <JobCard currentToken={this.props.currentToken} job={job} key={job.id} id={job.id} />
        })}
      </div>
    );
  }
}

export default JobList;