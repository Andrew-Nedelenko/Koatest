import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Ubuntu } from './pages/Auth';


class CompilerOut extends PureComponent {
  static propTypes = {
    out: PropTypes.oneOfType([Array, PropTypes.string]).isRequired,
  };

  render() {
    const { out } = this.props;
    return (
      <CompilerOutC>
        <h3>{out}</h3>
      </CompilerOutC>

    );
  }
}


const CompilerOutC = styled.div`
    font-family: ${Ubuntu};
`;

export default CompilerOut;
