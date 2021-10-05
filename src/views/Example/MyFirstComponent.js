import React, { Component } from 'react';

export default class MyFirstComponent extends Component {
  state = {
    name: 'Kido',
    job: 'dev',
  };
  handleOnChange = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <>
        <div>
          <input type="text" onChange={(e) => this.handleOnChange(e)} />
          <h1>Tên tui là {this.state.name}</h1>
        </div>
        <div>
          <h1>Tui chuẩn bị làm {this.state.job}</h1>
        </div>
      </>
    );
  }
}
