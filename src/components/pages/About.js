import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export class About extends Component {
  static PropTypes = {
    zoomFigure: zoomFigure.number.isRequired
  }
  constructor () {
    super()
    this.state = {
      borderWidth: 2,
      size: 1200,
      PositionX: 50,
      PositionY: 50,
      rotateR: 0,
      rotateX: 0,
      rotateY: 1,
      rotateZ: 0,
      clientX: 0,
      clientY: 0,
      zoomFigure: 1,
    }
  }

  coordinate = (event) => {
    this.setState({
      clientX: event.clientX,
      clientY: event.clientY,
    })
  }

  borderChange = (event) => {
    this.setState({borderWidth: event.target.value});
  }

  xPosition = (event) => {
    this.setState({PositionX: event.target.value});
  }

  yPosition = (event) => {
    this.setState({PositionY: event.target.value});
  }

  rRotate = (event) => {
    this.setState({rotateR: event.target.value});
  }
  xRotate = (event) => {
    this.setState({rotateX: event.target.value});
  }
  yRotate = (event) => {
    this.setState({rotateY: event.target.value});
  }
  zRotate = (event) => {
    this.setState({rotateZ: event.target.value});
  }

  zoomFigInc = () => {
    this.setState(({ zoomFigure }) => ({
      zoomFigure : (zoomFigure + .11)
    }));
  }

  render() {
    const d = "M100 85 L100 10 L410 10 L410 370 L100 370 L100 85 L180 85 L385 290 L385 10"
    const { borderWidth, size, PositionX, PositionY, rotateR, rotateX, rotateY, rotateZ, zoomFigure } = this.state;
    const _SvgBlock = styled.div`
      .figure{
      position: absolute;
      top: ${PositionY}px;
      left: ${PositionX}px;
      transform: rotate3d(${rotateX}, ${rotateY}, ${rotateZ}, ${rotateR}deg);
      z-index: 5;
      zoom: ${zoomFigure};
      }
      `
    document.title = 'Geometry'
    return (
      <div>
        <_Grid_state className='gridCoordinate' onMouseMove={this.coordinate}></_Grid_state>
        <Grid_flow>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" strokeWidth="0.5"/>
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#smallGrid)"/>
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
          </Grid_flow>
          <_SvgBlock>
          <svg className='figure' height={size} width={size}> 
            <path 
            d={d}
            stroke='green'
            strokeWidth={borderWidth}
            fill='transparent'
            >
            </path>
          </svg>
          </_SvgBlock>
          <_FormBlock>
              <p>Location X: {this.state.clientX}</p>
              <p>Location Y: {this.state.clientY}</p>
            <form>
              <label>
                BorderChange:
                <input type="number" min='1' max='10' value={borderWidth} onChange={this.borderChange} />
              </label>
              <label>
                X-position:{PositionX}
                <input type="range" min='-900' max='1200' value={PositionX} onChange={this.xPosition} />
                <input type="number" min='-900' max='1200' value={PositionX} onChange={this.xPosition} />
              </label>
              <label>
                Y-position:{PositionY}
                <input type="range" min='-900' max='1200' value={PositionY} onChange={this.yPosition} />
                <input type="number" min='-900' max='1200' value={PositionY} onChange={this.yPosition} />
              </label>
              <label>
                Rotate-Right:{rotateR}
                <input type="range" min='0' max='180' value={rotateR} onChange={this.rRotate} />
                <input type="number" min='0' max='180' value={rotateR} onChange={this.rRotate} />
              </label>
              <label>
                Rotate-X:{rotateX}
                <input type="range" min='-90' max='90' value={rotateX} onChange={this.xRotate} />
                <input type="number" min='-90' max='90' value={rotateX} onChange={this.xRotate} />
              </label>
              <label>
                Rotate-Y:{rotateY}
                <input type="range" min='-90' max='90' value={rotateY} onChange={this.yRotate} />
                <input type="number" min='1' max='90' value={rotateY} onChange={this.yRotate} />
              </label>
              <label>
                Rotate-Z:{rotateZ}
                <input type="range" min='-90' max='90' value={rotateZ} onChange={this.zRotate} />
                <input type="number" min='-90' max='90' value={rotateZ} onChange={this.zRotate} />
              </label>
              <label>
                Zoom:{zoomFigure}
                <p onClick={this.zoomFigInc}>+1</p> 
              </label>
            </form>
          </_FormBlock>
      </div>
    )
  }
}

const rightPanel = '200px'
const _Grid_state = styled.div`
    position: fixed;
    width: calc(100% - ${rightPanel});
    height: 100%;
    top: 50px;
    left: 0;
    z-index: 20;
`

export const Grid_flow = styled.div`
  .gridCoordinate{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
  }
  width: 100%;
  background: transparent;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
`



const _FormBlock = styled.div`
  border-left: 1px solid green;
  width: ${rightPanel};
  height: 100vh;
  position: fixed;
  background-color: white;
  right: 0;
  top: 50px;
  p{
    padding: 5px 20px 0 20px;
  }
  form{
    padding: 20px;
    label{
      display: block;
      margin: 5px 0;
      &:nth-child(2){
        padding: 5px;
        background-color: yellowgreen;
      }
      &:nth-child(3){
        padding: 5px;
        background-color: tan;
      }
      &:nth-child(4){
        padding: 5px;
        background-color: yellowgreen;
      }
      &:nth-child(5){
        padding: 5px;
        background-color: yellow;
      }
      &:nth-child(6){
        padding: 5px;
        background-color: yellow;
      }
      &:nth-child(7){
        padding: 5px;
        background-color: yellow;
      }
    }
  }
    

`