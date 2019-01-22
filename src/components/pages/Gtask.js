import React, { Component } from 'react';
import styled from 'styled-components';
import { GridFlow } from './About';


export class Gtask extends Component {
  constructor() {
    super();
    this.state = {
      clientX: 0,
    };
  }


  nextFrame() {
    const { frame } = this.state;

    this.setState({ frame: frame + 1 });
  }

  render() {
    global.document.title = 'Task';
    const { clientX } = this.state;
    const stroke = 1;
    const size = 520;
    const d = 'M10 0 L10 1 L20 1 2 20 30 3 50 22 40 1 50 1 40 1';
    return (
      <div>
        <GridFlow>
          <div className="stateCoordinate">{clientX}</div>
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
        <GtaskC onMouseMove={this.coordinate} />
        <PicTaskC>
          <svg width={size} height={size}>
            <path
              d={d}
              stroke="green"
              strokeWidth={stroke}
              fill="transparent"
            />
          </svg>
        </PicTaskC>
      </div>
    );
  }
}

export const GtaskC = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;
export const PicTaskC = styled.div`
  position: absolute;
  top: 120px;
  left: 200px;
`;
