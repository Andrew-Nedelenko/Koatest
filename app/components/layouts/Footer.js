import React, { Component } from 'react'
import styled from 'styled-components'

export class Footer extends Component {
render() {
    return (
        <_Footer>
          <footer className="footer">footer</footer>
      </_Footer>
    )
  }
}


export const color = "green"

const _Footer = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    .footer{
      color: ${color};
    }
`
