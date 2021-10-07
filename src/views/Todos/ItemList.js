import React, { Component } from 'react';

export default class ItemList extends Component {
  state = {
    edit: false, //edit => editStatus
    editContent: {},
  };
  handleOnDeleteButton = (data) => {
    this.props.deleteItem(data);
  };
  handleOnEditButton = (data) => {
    this.setState({
      edit: !this.state.edit, //edit => editStatus
      editContent: data,
    });
  };

  editContent = (event) => {
    let editTodoCopy = { ...this.state.editContent };
    editTodoCopy.content = event.target.value;
    this.setState({
      editContent: editTodoCopy,
    });
  };

  handleOnSaveButton = (data) => {
    this.props.editContent(data);
    this.setState({
      edit: !this.state.edit, //edit => editStatus
    });
  };

  render() {
    let { edit, editContent } = this.state;
    return this.props.data.map((item, index) => {
      return (
        <div key={index}>
          {edit === true && editContent.id === item.id ? (
            <>
              <input
                value={editContent.content}
                onChange={(event) => {
                  this.editContent(event);
                }}
              />
              <button onClick={() => this.handleOnSaveButton(editContent)}>
                Save
              </button>
            </>
          ) : (
            <>
              <span key={index}>
                {index + 1} - {item.content}
              </span>
              <button onClick={() => this.handleOnEditButton(item)}>
                Edit
              </button>
            </>
          )}
          <span>
            <button onClick={() => this.handleOnDeleteButton(item.content)}>
              Delete
            </button>
          </span>
        </div>
      );
    });
  }
}
