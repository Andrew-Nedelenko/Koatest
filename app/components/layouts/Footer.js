import React, { Component } from 'react'
import stl from 'styled-components'

class Footer extends Component {
render() {
    return (
        <_Footer>
        footer
      </_Footer>
    )
  }
}

const _Footer = stl.footer`
    position: absolute;
    bottom: 0;
`


export default Footer