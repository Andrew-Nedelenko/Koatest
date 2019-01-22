import React, { Component } from 'react';
import styled from 'styled-components';

class Figure extends Component {
  constructor() {
    super();
    this.state = {
      frame: 0
    };

    setInterval(this.nextFrame.bind(this), 25);
  }

  nextFrame() {
    const { frame } = this.state;
    this.setState({ frame: frame + 1 });
  }

  render() {
    const { frame } = this.state;
    const {
      sin, tan,
    } = Math;
    const size = 900;
    const padding = 20;
    const stroke = 1;
    const d = new Array(1100).fill(0).reduce((result, $, index) => {
      const x = (size / 4 - padding) * sin(3 * index + frame / 620);
      const y = (size / 2 - padding) * tan(0.1 * index + frame / 500);
      const c = index === 0 ? 'M' : 'L';

      return `${result}${c}${x + size / 2} ${y + size / 2}`;
    }, '');
    return (
      <div>
        <FigureC>
          <svg height="100vh" width={size}>
            <path
              d={d}
              stroke="green"
              strokeWidth={stroke}
              fill="transparent"
            />
          </svg>
        </FigureC>
      </div>
    );
  }
}

const FigureC = styled.div`
    margin: 50px 0 0 0;
    svg{
        transform: rotate(0deg);
    }
`;


export default Figure;
