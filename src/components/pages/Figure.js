import React, { Component } from 'react'
import styled from 'styled-components'
import {NavBar} from '../layouts/NavBar'

export class Figure extends Component {
  render() {
      const size = 900;
      const padding = 20;
      const stroke = 1;
      const d = new Array(1100).fill(0).reduce((result, $, index) => {
        const x = (size / 4 - padding) * Math.cos(2 * index);
        const y = (size / 2 - padding) * Math.tan(.2 * index);
        const c = index === 0 ? 'M' : 'L';

        return result + `${c}${x + size / 2} ${y + size / 2}`
      }, '');
    return (
    <div>
        <NavBar/>
      <_Figure>
        <svg height='100vh' width={size}>
            <path
                d={d}
                stroke="green"
                strokeWidth={stroke}
                fill="transparent"
            />
        </svg>
      </_Figure>
    </div>
    )
  }
}

const _Figure = styled.div`
    margin: 50px 0 0 0;
    svg{
        transform: rotate(0deg);
    }
`
