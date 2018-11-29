import React, { Component } from 'react'
import styled from 'styled-components'
import {color} from '../layouts/Footer'

export class Index extends Component {
  render() {
    return (
        <_Index>
            <div className="main">
                main
            </div>
            
      </_Index>
    )
  }
}


export const _Index = styled.main`
    width: 100%;
    margin-top: 50px;
    .main{
        text-align: center;
        background-color: palegoldenrod;
        color: ${color}
    }
`
