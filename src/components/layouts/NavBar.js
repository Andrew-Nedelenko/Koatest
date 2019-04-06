import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Ubuntu } from '../pages/Auth';

const NavBar = () => (
  <NavBarC>
    <ul>
      <li>
        <Link to="/">Home</Link>
        <ul>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </li>
      <li>
        <Link to="/about">MathModel</Link>
        <ul>
          <li><Link to="/task1">Task 1</Link></li>
          <li><Link to="/figure">Fugure Example</Link></li>
        </ul>
      </li>
      <li><Link to="/auth">Auth</Link></li>
      <li><Link to="/compiler">Compiler</Link></li>
      <li><Link to="redux">Redux</Link></li>
    </ul>
  </NavBarC>
);


const NavBarC = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  background-color: gold;
  width: 100%;
  height: 50px;
  opacity: 1;
  z-index: 30;
  font-family: ${Ubuntu};
  ul{
    display: flex;
    list-style-type: none;
    padding: 15px 0 0 60px;
    position: relative;
    li{
      padding: 0 5px;
      ul{
        display: none;
        flex-direction: column;
        position: absolute;
        padding: 0;
        li{
          padding: 5px 10px 0 0;
          background-color: gold;
          a{
            color: black;
          }
        }
      }
      &:hover{
        ul{
          display: flex;
        }
      }
      a{
        color: black;
        text-decoration: none;
        &:hover{
          color: green;
        }
      }
    }
  }
`;

export default NavBar;
