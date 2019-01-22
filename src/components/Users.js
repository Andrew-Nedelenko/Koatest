import 'babel-polyfill';
import React, { Component } from 'react';
import User from './User';

class Users extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <User
          id="id"
          name="name"
          email="eemail"
        />
      </div>
    );
  }
}


export default Users;
