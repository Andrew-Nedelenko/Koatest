import React, { Component } from 'react'
import {NavBar} from '../layouts/NavBar'
import styled from 'styled-components'

export class About extends Component {
  constructor () {
    super()
    this.state = {
      borderWidth: 5,
      size: 1200,
      gridColor: 'grey'
    }
  }

  handleChange = () => {
    this.setState({borderWidth: event.target.value});
  }

  render() {
    const d = "M100 85 L100 10 L410 10 L410 370 L100 370 L100 85 L180 85 L385 290 L385 10"
    const { borderWidth, size, gridColor } = this.state
    document.title = 'About'
    return (
      <div>
          <NavBar/>
          <_SvgBlock>
          <svg className='figure' height={size} width={size}> 
            <path 
            d={d}
            stroke='red'
            strokeWidth={borderWidth}
            fill='transparent'
            >
            </path>
          </svg>
          <svg className='X' height={size} width={size}>
            <path
              d='M1 100 L1000 100'
              stroke={gridColor}
              strokeWidth='2px'
              fill='transparent'
            ></path>
          </svg>
          <svg className='Y' height={size} width={size}>
            <path
              d='M500 10 L500 1100'
              stroke={gridColor}
              strokeWidth='2px'
              fill='transparent'
            ></path>
          </svg>
          </_SvgBlock>
          <_FormBlock>
            <form>
              <label>
                BorderChange:
                <input type="number" value={borderWidth} onChange={this.handleChange} />
              </label>
            </form>
          </_FormBlock>
      </div>
    )
  }
}

const _SvgBlock = styled.div`
  .figure{
    position: absolute;
    top: 30%;
    left: 50px;
    z-index: 1;
  }
  .X{
    position: absolute;
    top: 70%;
    left: 50px;
    z-index: 4
  }
  .Y{
    position: absolute;
    top: 10%;
    left: 50px;
    z-index: 4
  }
`

const _FormBlock = styled.div`
  border-left: 1px solid green;
  width: 100px;
  height: 100%;
  position: absolute;
  right: 100px;
  top: 50px;
  form{
    padding: 20px;
  }
    

`