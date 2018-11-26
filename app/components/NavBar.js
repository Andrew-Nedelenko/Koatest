import React, { Component } from 'react'
import styled from 'styled-components'

export default class NavBar extends Component {
  render() {
    return (
        <_NavBar>
            <ul>
              <li><a href="/">Home</a>
                <ul>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Links</a></li>
                </ul>
              </li>
              <li><a href="/">About</a>
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
  position: absolute;
  top: 4px;
  left: 100px;
  ul{
    display: flex;
    list-style-type: none;
    li{
      padding: 0 5px;
      ul{
        display: none;
        flex-direction: column;
        position: absolute;
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