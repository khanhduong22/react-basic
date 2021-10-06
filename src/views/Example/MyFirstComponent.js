import React, { Component } from 'react';
import Add from './Add';
import JobList from './JobList';

export default class MyFirstComponent extends Component {
  state = {
    showFullName: false,
    arrJob: [
      { id: 1, job: 'developer', salary: 1000 },
      { id: 2, job: 'teacher', salary: 500 },
      { id: 3, job: 'manager', salary: 2000 },
    ],
  };

  handleOnClick = (event) => {
    event.preventDefault();
    this.setState({
      fullName: this.state.firstName + ' ' + this.state.lastName,
      showFullName: !this.state.showFullName,
    });
    console.log('Đã lấy được full name');
  };

  addNewJob = (data) => {
    this.setState({
      arrJob: [...this.state.arrJob, data],
    });
  };

  deleteJob = (data) => {
    this.setState({
      arrJob: this.state.arrJob.filter((item) => {
        return item.id !== data.id;
      }),
    });
  };

  render() {
    return (
      <>
        <Add addNewJob={this.addNewJob} />
        <JobList arrJob={this.state.arrJob} deleteJob={this.deleteJob} />
      </>
    );
  }
}
