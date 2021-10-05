import React, { Component } from 'react';

export default class MyFirstComponent extends Component {
  state = {
    name: 'Kido',
    job: 'dev',
  };
  handleOnChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleOnClick = () => {
    console.log('Đã click');
    alert('ok rồi nhé');
  };
  render() {
    return (
      <>
        <div>
          <input type="text" onChange={(e) => this.handleOnChange(e)} />
          <p>Tên tui là {this.state.name}</p>
        </div>
        <div>
          <p>Tui chuẩn bị làm {this.state.job}</p>
        </div>
        <div>
          <button onClick={() => this.handleOnClick()}>Click me</button>
        </div>
      </>
    );
  }
}
