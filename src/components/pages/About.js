import React, { Component } from 'react'
import {NavBar} from '../layouts/NavBar'
import styled from 'styled-components'

export class About extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sW: 5,
      size: 500
    }
  }

  handleChange = () => {
    this.setState({sW: event.target.value});
  }

  render() {
    const d = "M100 85 L100 10 L410 10 L410 370 L100 370 L100 85 L180 85 L385 290 L385 10"
    const { sW, size } = this.state
    return (
      <div>
          <NavBar/>
          <_SvgBlock>
          <svg height={size} width={size}> 
            <path 
            d={d}
            stroke='red'
            strokeWidth={sW}
            fill='transparent'
            >
            </path>
          </svg>
          </_SvgBlock>
          <_FormBlock>
            <form>
              <label>
                BorderChange:
                <input type="number" value={sW} onChange={this.handleChange} />
              </label>
            </form>
          </_FormBlock>
      </div>
    )
  }
}

const _SvgBlock = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
  width: 100%;
`

const _FormBlock = styled.div`
  border-left: 1px solid green;
  width: 200px;
  height: 100%;
  position: absolute;
  right: 100px;
  top: 50px;
  form{
    padding: 20px;
  }
    

`