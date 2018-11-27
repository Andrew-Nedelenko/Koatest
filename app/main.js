import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import NavBar from './components/layouts/NavBar'
import Footer from './components/layouts/Footer'
import Users from './components/Users'
import {data} from './components/Users'
import {Link, Router, Route} from 'react-router-dom'


class Main extends Component {
  render() {    
    return (
        <Wrapper> 
            <NavBar/>
            <Footer/>
        </Wrapper>
    )
  }
}


const Wrapper = styled.section`
  width: 100%;
`


ReactDOM.render(<Main/>, document.getElementById('root'))
