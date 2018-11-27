import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
  position: fixed;
  top: 0;
  left: 0;
  background-color: gold;
  width: 100%;
  height: 50px;
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