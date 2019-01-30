import 'babel-polyfill';
import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import User from './User';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      saveData: []
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:3201/testapi');
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        const json = await response.json();
        this.setState({ saveData: json });
      }
    } catch (error) {
      throw new Error();
    }
  }

  render() {
    const { saveData } = this.state;
    return (
      <div>
        {saveData.map(n => (
          <User
            key={n.id}
            id={n.id}
            name={n.name}
            email={n.email}
            hobbies={n.hoobies}
            img={n.img}
          />
        ))}
      </div>
    );
  }
}


export default Users;
