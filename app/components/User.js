import React, { Component } from 'react'
import styled from 'styled-components'

export default class User extends Component {
  render() {
      const {name, email, img, id} = this.props.m
    return (
        <_User>
        <h2>{name}</h2>
        <h3>{email}</h3>
        <img src={img} alt=""/>
        <h4>{id}</h4>
    </_User>
    )
  }
}

const _User = styled.div`
    img{
        width: 150px; 
    }
`


