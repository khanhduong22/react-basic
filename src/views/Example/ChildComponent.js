import React, { Component } from 'react';

export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div> This is full name from props: {this.props.fname}</div>
      </div>
    );
  }
}
