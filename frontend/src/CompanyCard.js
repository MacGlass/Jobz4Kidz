import React from 'react';

class JobCard extends React.Component {
  render() {
    let { name, description } = this.props.company;
    return (
      <div className="card" style={{ width: '50em', margin: '1em auto' }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    )
  }
}

export default JobCard;