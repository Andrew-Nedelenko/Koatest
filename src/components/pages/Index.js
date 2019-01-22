import React from 'react';
import styled from 'styled-components';
import { color } from '../layouts/Footer';


export const Index = () => (
  <IndexC>
    <div className="main">
        main
    </div>
  </IndexC>
);


export const IndexC = styled.main`
    width: 100%;
    margin-top: 50px;
    .main{
        text-align: center;
        background-color: palegoldenrod;
        color: ${color}
    }
`;
