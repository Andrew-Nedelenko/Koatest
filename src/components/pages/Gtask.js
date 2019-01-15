import React, { Component } from 'react'
import styled from 'styled-components'
import {Grid_flow} from './About'


export class Gtask extends Component {
  constructor() {
    super ();
    this.state = {
      clientX : 0,
      clientY : 0,
      frame: 0
    }
    setInterval(this.nextFrame.bind(this), 25)
  }
  coordinate = (event) => {
    console.log(`X - coordiante ${event.clientX}`)
    console.log(`Y - coordiante ${event.clientY}`)
    this.setState({clientX: event.clientX})
  }
  nextFrame() {
    const {frame} = this.state

    this.setState({ frame: frame + 1});
}
  render() {
    document.title = 'Task'
    const { frame } = this.state;
    const stroke = 1;
    const size = 520;
    const padding = 0;
    const { sin, cos, tan, sqrt, pow, PI } = Math;
    const d = "M10 0 L10 1 L20 1 2 20 30 3 50 22 40 1 50 1 40 1"
    return (
        <div>
          <Grid_flow>
            <div className="stateCoordinate">{this.state.clientX}</div>
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
          <_Gtask onMouseMove={this.coordinate}></_Gtask>
          <_PicTask>
          <svg width="100%" height="100%">
            <path 
              d={d}
              stroke="green"
              strokeWidth={stroke}
              fill="transparent"
            />
          </svg>
          </_PicTask>
        </div>
    )
  }
}

export const _Gtask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`
export const _PicTask = styled.div`
  position: absolute;
  top: 120px;
  left: 200px;
`