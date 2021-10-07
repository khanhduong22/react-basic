import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className="topnav">
        <a className="active" href="/">
          Home
        </a>
        <a href="/todolist">To do list</a>
        <a href="/about">About</a>
      </div>
    );
  }
}
