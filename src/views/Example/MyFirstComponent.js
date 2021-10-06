import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export default class MyFirstComponent extends Component {
  state = {
    firstName: '',
    lastName: '',
    fullName: '',
    showFullName: false,
  };
  handleOnChangeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };
  handleOnChangeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };
  handleOnClick = (event) => {
    event.preventDefault();
    this.setState({
      fullName: this.state.firstName + ' ' + this.state.lastName,
      showFullName: !this.state.showFullName,
    });
    console.log('Đã lấy được full name');
  };
  render() {
    return (
      <>
        <form>
          <br />
          <label>First name</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleOnChangeFirstName(event)}
          />
          <br />
          <label>Last name</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleOnChangeLastName(event)}
          />
          <br />
          <input
            type="button"
            value="Send"
            onClick={(event) => this.handleOnClick(event)}
          />
        </form>
        {this.state.showFullName && (
          <div>From same state, your name is : {this.state.fullName}</div>
        )}

        <ChildComponent
          fname={this.state.firstName}
          status={this.state.showFullName}
        />
      </>
    );
  }
}
