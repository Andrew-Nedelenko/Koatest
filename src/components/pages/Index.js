import React, { Component } from 'react'
import styled from 'styled-components'
import {color} from '../layouts/Footer'
import { throws } from 'assert';
import PropTypes from 'prop-types'


export class Index extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired || PropTypes.undefined.isRequired
    }
    state = {
        value: ''
    }
    changeNum = e => {
        console.log(typeof event.target.value)
        this.setState({ value: event.target.value})
    }

    formSubmit = async e => {
        e.preventDefault()
        console.log(this.state.value)
        
        const data = await fetch('http://localhost:3201', {
            method: "POST",
            body: JSON.stringify({
                username: this.state.value
            }),
            headers: {
              "Content-Type": "application/json"
            },
        })
        console.log(data)
    }
    render() {
    return (
        <_Index>
            <div className="main">
                main
            </div>
            <div>
              <form onSubmit={this.formSubmit}>
              <label htmlFor="">
               <input type="text" name='username' onInput={this.changeNum}/>
               </label>
               <label htmlFor="">
                <input type="submit"/>
               </label>
              </form>
               <p>{this.state.value}</p>
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
