import React, { Component } from 'react'
import {NavBar} from '../layouts/NavBar'
import {_Index} from './Index'

export class About extends Component {
  render() {
    return (

            <div>
                <NavBar/>
                <_Index>
                from about
                </_Index>
            </div>
    )
  }
}
