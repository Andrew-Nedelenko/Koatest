import React, { Component } from 'react'
import styled from 'styled-components'

export default class User extends Component {
    
  render() {
      const {name, email, id} = this.props.m
    return (
        <_User>
        <h4>{id}</h4>
        <h2>{name}</h2>
        <h3>{email.toLowerCase()}</h3>
    </_User>
    )
  }
}

const _User = styled.div`
    img{
        width: 150px; 
    }
`


