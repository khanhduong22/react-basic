import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router';

class DetailUser extends Component {
  state = {
    item: '',
  };
  componentDidMount() {
    let userID = this.props.match.params.id;
    this.fetchData(userID);
  }

  handleOnNextButton = () => {
    let nextID = parseInt(this.props.match.params.id) + 1;
    this.fetchData(nextID);
    this.props.history.push(`/user/${nextID}`);
  };
  handleOnBackButton = () => {
    let backID = parseInt(this.props.match.params.id) - 1;
    this.fetchData(backID);
    this.props.history.push(`/user/${backID}`);
  };

  fetchData = (id) => {
    axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
      this.setState({
        item: res.data.data,
      });
    });
  };

  render() {
    let { item } = this.state;
    return (
      <>
        <div>This is detail User with ID: {item.id} (max: 12)</div>
        <br />
        <div>
          Full name: {item.first_name} - {item.last_name}
        </div>
        <div>Email: {item.email}</div>
        <div>Avatar</div>
        <img src={item.avatar} alt="Avatar"></img>
        <div>
          <button onClick={() => this.handleOnBackButton()}>Back</button>
          <button onClick={() => this.handleOnNextButton()}>Next</button>
        </div>
        <button onClick={() => this.props.history.push(`/user`)}>
          Back to User Page
        </button>
      </>
    );
  }
}
export default withRouter(DetailUser);
