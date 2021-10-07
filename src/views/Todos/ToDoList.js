import React, { Component } from 'react';
import Add from './Add';
import ItemList from './ItemList';
import './ToDoList.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class ToDoList extends Component {
  state = {
    content: [
      { id: 1, content: 'Watching full video' },
      { id: 2, content: 'Recall structure of app ' },
      { id: 3, content: 'Code follow the structure' },
      { id: 4, content: 'Re-watching video when stacking' },
      { id: 5, content: 'Fix bug and deploy on heroku' },
    ],
  };

  addNewItem = (data) => {
    let randomID = Math.floor(Math.random() * 10000);
    this.setState({
      id: randomID,
      content: [...this.state.content, data],
    });
    toast.success('Adding success !');
  };

  deleteItem = (data) => {
    this.setState({
      content: this.state.content.filter((item) => {
        return item.content !== data;
      }),
    });
    toast.error('Deleted !');
  };

  editContent = (data) => {
    this.state.content.forEach((item, index) => {
      if (item.id === data.id) {
        item.content = data.content;
      }
    });
    toast.success('Editing success !');
  };

  render() {
    return (
      <div>
        <Add addNewItem={this.addNewItem} />
        <ItemList
          data={this.state.content}
          deleteItem={this.deleteItem}
          editContent={this.editContent}
        />
        <ToastContainer />
      </div>
    );
  }
}
