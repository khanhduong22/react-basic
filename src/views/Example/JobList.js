import React, { Component } from 'react';

export default class JobList extends Component {
  handleOnClick = (data) => {
    this.props.deleteJob(data);
  };
  render() {
    return (
      <>
        {this.props.arrJob.map((item, index) => {
          return (
            <div key={index}>
              {item.job} - {item.salary}
              <span
                style={{ color: 'red' }}
                onClick={() => {
                  this.handleOnClick(item);
                }}
              >
                X
              </span>
            </div>
          );
        })}
      </>
    );
  }
}
