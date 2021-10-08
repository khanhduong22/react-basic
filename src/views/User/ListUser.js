import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './ListUser.scss';

class ListUser extends Component {
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
          let id = index + 1;

          return (
            <div
              className="user"
              onClick={() => this.props.history.push(`/user/${id}`)}
            >
              {index + 1} - {item.first_name} {item.last_name}
            </div>
          );
        })}
      </>
    );
  }
}

export default withRouter(ListUser);
