import React, { Component } from 'react'
import styled from 'styled-components'
import {Grid_flow} from './About'


export class Gtask extends Component {
  constructor() {
    super ();
    this.state = {
      clientX : 0,
      clientY : 0,
    }
  }
  coordinate = (event) => {
    console.log(`X - coordiante ${event.clientX}`)
    console.log(`Y - coordiante ${event.clientY}`)
    this.setState({clientX: event.clientX})
  }
  render() {
    document.title = 'Task'
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
        </div>
    )
  }
}

export const _Gtask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`