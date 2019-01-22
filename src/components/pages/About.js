import React, { Component } from 'react';
import styled from 'styled-components';

export class About extends Component {
  constructor() {
    super();
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
      zoomFigure: 0.99
    };
  }

  coordinate = (event) => {
    this.setState({
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }

  borderChange = (event) => {
    this.setState({ borderWidth: event.target.value });
  }

  xPosition = (event) => {
    this.setState({ PositionX: event.target.value });
  }

  yPosition = (event) => {
    this.setState({ PositionY: event.target.value });
  }

  rRotate = (event) => {
    this.setState({ rotateR: event.target.value });
  }

  xRotate = (event) => {
    this.setState({ rotateX: event.target.value });
  }

  yRotate = (event) => {
    this.setState({ rotateY: event.target.value });
  }

  zRotate = (event) => {
    this.setState({ rotateZ: event.target.value });
  }

  zoomFigInc = (e) => {
    this.setState({
      zoomFigure: e.target.value
    });
  }

  render() {
    const d = 'M100 85 L100 10 L410 10 L410 370 L100 370 L100 85 L180 85 L385 290 L385 10';
    const {
      borderWidth,
      size,
      PositionX,
      PositionY,
      rotateR,
      rotateX,
      rotateY,
      rotateZ,
      zoomFigure,
      clientX,
      clientY,
    } = this.state;
    const SvgBlockC = styled.div`
      .figure{
      position: absolute;
      top: ${PositionY}px;
      left: ${PositionX}px;
      transform: rotate3d(${rotateX}, ${rotateY}, ${rotateZ}, ${rotateR}deg);
      z-index: 5;
      zoom: ${zoomFigure};
      }
      `;
    global.document.title = 'Geometry';
    return (
      <div>
        <GridState className="gridCoordinate" onMouseMove={this.coordinate} />
        <GridFlow>
          <svg width="100%" height="100%">
            <defs>
              <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" strokeWidth="0.5" />
              </pattern>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#smallGrid)" />
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </GridFlow>
        <SvgBlockC>
          <svg className="figure" height={size} width={size}>
            <path
              d={d}
              stroke="green"
              strokeWidth={borderWidth}
              fill="transparent"
            />
          </svg>
        </SvgBlockC>
        <FormBlock>
          <p>
Location X:
            {clientX}
          </p>
          <p>
Location Y:
            {clientY}
          </p>
          <form>
            <label htmlFor="borderWidth">
                BorderChange:
              <input id="borderWidth" type="number" min="1" max="10" defaultValue="2" value={borderWidth} onChange={this.borderChange} />
            </label>
            <label htmlFor="PositionX">
                X-position:
              {PositionX}
              <input type="range" min="-900" max="1200" defaultValue="50" value={PositionX} onChange={this.xPosition} />
              <input type="number" min="-900" max="1200" value={PositionX} defaultValue="50" onChange={this.xPosition} />
            </label>
            <label htmlFor="PositionY">
                Y-position:
              {PositionY}
              <input type="range" min="-900" max="1200" value={PositionY} defaultValue="50" onChange={this.yPosition} />
              <input type="number" min="-900" max="1200" value={PositionY} defaultValue="50" onChange={this.yPosition} />
            </label>
            <label htmlFor="rotateR">
                Rotate-Right:
              {rotateR}
              <input type="range" min="0" max="180" value={rotateR} defaultValue="0" onChange={this.rRotate} />
              <input type="number" min="0" max="180" value={rotateR} defaultValue="0" onChange={this.rRotate} />
            </label>
            <label htmlFor="rotateX">
                Rotate-X:
              {rotateX}
              <input type="range" min="0" max="90" value={rotateX} defaultValue="0" onChange={this.xRotate} />
              <input type="number" min="0" max="90" value={rotateX} defaultValue="0" onChange={this.xRotate} />
            </label>
            <label htmlFor="rotateY">
                Rotate-Y:
              {rotateY}
              <input type="range" min="0" max="90" value={rotateY} defaultValue="1" onChange={this.yRotate} />
              <input type="number" min="1" max="90" value={rotateY} defaultValue="1" onChange={this.yRotate} />
            </label>
            <label htmlFor="rotateZ">
                Rotate-Z:
              {rotateZ}
              <input type="range" min="0" max="90" value={rotateZ} defaultValue="0" onChange={this.zRotate} />
              <input type="number" min="0" max="90" value={rotateZ} defaultValue="0" onChange={this.zRotate} />
            </label>
            <label htmlFor="zoom">
                Zoom:
              {zoomFigure}
              <input type="number" step="0.01" onInput={this.zoomFigInc} defaultValue="0.99" value={zoomFigure} />
            </label>
          </form>
        </FormBlock>
      </div>
    );
  }
}

const rightPanel = '200px';
const GridState = styled.div`
    position: fixed;
    width: calc(100% - ${rightPanel});
    height: 100%;
    top: 50px;
    left: 0;
    z-index: 20;
`;

export const GridFlow = styled.div`
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
`;


const FormBlock = styled.div`
  border-left: 1px solid green;
  width: ${rightPanel};
  height: 100vh;
  position: fixed;
  background-color: white;
  right: 0;
  top: 50px;
  z-index: 50;
  p{
    padding: 5px 20px 0 20px;
  }
  span{
    display: block;
    background-color: greenyellow;
    margin-left: 15px;
    cursor: pointer;
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
    

`;
