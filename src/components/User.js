import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Ubuntu } from './pages/Auth';


class User extends PureComponent {
  static propTypes = {
    id: PropTypes.oneOfType([Array, PropTypes.number]).isRequired,
    name: PropTypes.oneOfType([Array, PropTypes.string]).isRequired,
    email: PropTypes.oneOfType([Array, PropTypes.string]).isRequired,
    hoobies: PropTypes.oneOfType([Array, PropTypes.string]).isRequired,
    img: PropTypes.string.isRequired,
  };

  render() {
    const {
      id, name, email, img, hoobies
    } = this.props;
    return (
      <UserC>
        <h4>{id}</h4>
        <h2>{name}</h2>
        <h3>{email}</h3>
        <h3>{hoobies}</h3>
        <img src={img} alt="" />
      </UserC>

    );
  }
}

const UserC = styled.div`
  margin-top: 50px;
  font-family: ${Ubuntu}
    img{
        width: 150px; 
    }
`;

export default User;
