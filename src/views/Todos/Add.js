import React, { Component } from 'react';
import { toast } from 'react-toastify';

export default class Add extends Component {
  state = {
    content: '',
  };

  getContent = (event) => {
    this.setState({
      content: event.target.value,
    });
  };
  handleOnClick = () => {
    if (!this.state.content) {
      toast.warn('You need fill input !!!');
      return;
    }
    let item = {
      content: this.state.content,
    };
    this.props.addNewItem(item);
    this.setState({ content: '' });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.content}
          onChange={(event) => {
            this.getContent(event);
          }}
        ></input>
        <span>
          <button onClick={() => this.handleOnClick()}>Add</button>
        </span>
      </div>
    );
  }
}
