import React, { Component } from 'react';

export default class ItemList extends Component {
  state = {
    edit: false, //edit => editStatus
    editContent: {},
  };
  handleOnDeleteButton = (data) => {
    console.log(data);
    this.props.deleteItem(data);
  };
  handleOnEditButton = (data) => {
    this.setState({
      edit: !this.state.edit, //edit => editStatus
      editContent: data,
    });
    console.log(data);
    console.log('state editing', this.state.editContent.id);
    console.log('Object', !this.state.editContent);
  };

  editContent = (event) => {
    console.log('state editing is: ', this.state.editContent.id);
    let editTodoCopy = { ...this.state.editContent };
    editTodoCopy.content = event.target.value;
    this.setState({
      editContent: editTodoCopy,
    });
    console.log(this.state.editContent);
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
