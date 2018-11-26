import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import Users from './components/Users'
import {data} from './components/Users'

class Main extends Component {
  render() {    
    const a = "Title"
    const b = true
    return (
      <Wrapper> 
          <Title>
          <h1>{b? a: null }</h1>
          </Title>
          <NavBar/>
          <MainCont>
            <h2 onClick={data}>getData</h2>
            <Users/>
          </MainCont>
      </Wrapper>
    )
  }
}


const Wrapper = styled.section`
  width: 100%;
`
const Title = styled.div`
  background-color: gold;
  h1{
    color: red;
    @media (max-width: 1200px) {
      color: purple;
    }
  }
`

const MainCont = styled.header`
  color: green;
  h2{
    color: rebeccapurple;
    cursor: pointer;
  }
`

ReactDOM.render(<Main/>, document.getElementById('root'))
