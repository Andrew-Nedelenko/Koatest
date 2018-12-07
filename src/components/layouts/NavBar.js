import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export class NavBar extends Component {
  render() {
    return (
        <_NavBar>
            <ul>
              <li><Link to="/">Home</Link>
                <ul>
                  <li><Link to="/users">Users</Link></li>
                  <li><a href="#">Links</a></li>
                </ul>
              </li>
              <li><Link to="/about">About</Link>
              <ul>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Links</a></li>
                </ul>
              </li>
            </ul>
      </_NavBar>
    )
  }
}

const _NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: gold;
  width: 100%;
  height: 50px;
  opacity: .8;
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
        text-decoration: none;
      }
    }
  }
`