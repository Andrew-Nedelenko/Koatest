import React from 'react';
import styled from 'styled-components';

export const Footer = () => (
  <FooterC>
    <footer className="footer">footer</footer>
  </FooterC>
);


export const color = 'green';

const FooterC = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    display: none;
    .footer{
      color: ${color};
    }
`;
