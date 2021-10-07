import axios from 'axios';
import React, { Component } from 'react';

export default class ListUser extends Component {
  state = {
    listUser: [],
  };
  async componentDidMount() {
    let res = await axios.get('https://reqres.in/api/users?page=2');
    this.setState({
      listUser: res.data.data,
    });
  }
  render() {
    let { listUser } = this.state;
    return (
      <>
        <div style={{ margin: '20px auto' }}>
          This is User list that is be fetched from
          https://reqres.in/api/users?page=2
        </div>
        {listUser.map((item, index) => {
          return (
            <div>
              {item.first_name} - {item.first_name} - {item.email}
            </div>
          );
        })}
      </>
    );
  }
}
