import React, { Component } from 'react';

export default class Add extends Component {
  state = {
    job: '',
    salary: '',
  };

  handleOnChangeJob = (event) => {
    this.setState({ job: event.target.value });
  };
  handleOnChangeSalary = (event) => {
    this.setState({ salary: event.target.value });
  };
  handleOnClick = (event) => {
    event.preventDefault();
    if (this.state.job !== '' && this.state.salary !== '') {
      this.props.addNewJob(this.state);
      this.setState({
        job: '',
        salary: '',
      });
    } else {
      alert('missing information');
    }
  };
  render() {
    return (
      <div>
        <form>
          <br />
          <label>Job</label>
          <br />
          <input
            type="text"
            value={this.state.job}
            onChange={(event) => this.handleOnChangeJob(event)}
          />
          <br />
          <label>Salary</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleOnChangeSalary(event)}
          />
          <br />
          <div>
            <input
              type="button"
              value="Summit"
              onClick={(event) => this.handleOnClick(event)}
            />
          </div>
        </form>
      </div>
    );
  }
}
