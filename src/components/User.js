import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


class User extends PureComponent {
    static propTypes = {
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    };

    render() {
      const { id, name, email } = this.props;
      return (
        <UserC>
          <h4>{id}</h4>
          <h2>{name}</h2>
          <h3>{email}</h3>
        </UserC>

      );
    }
}

const UserC = styled.div`
    img{
        width: 150px; 
    }
`;

export default User;
