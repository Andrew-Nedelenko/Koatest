import React, { PureComponent } from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import { Ubuntu } from './Auth';

class Compiler extends PureComponent {
  constructor() {
    super();
    this.state = {
      areaValue: '',
      output: '',
      error: ''
    };
  }

  handleText = (e) => {
    this.setState({ areaValue: e.target.value });
  }

  clearText = () => {
    this.setState({ areaValue: '', error: '' });
  }

  submitText = (e) => {
    e.preventDefault();
    const { areaValue } = this.state;
    console.log(areaValue);
    if (areaValue === '') {
      this.setState({ error: 'nothing to compile...' });
    } else {
      this.setState({ error: '' });
      fetch('http://localhost:3201/compiler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          codearea: areaValue
        })
      });
    }
  }

  render() {
    const { areaValue, output, error } = this.state;
    return (
      <CompilerC>
        <textarea name="codearea" id="codearea" cols="50" rows="20" value={areaValue} onInput={this.handleText} />
        <div className="button_block">
          <button type="submit" onClick={this.submitText}>Compiling</button>
          <button type="submit" onClick={this.clearText}>Clear</button>
        </div>
        <div className="errors">{error}</div>
        <div className="output">{output}</div>
      </CompilerC>
    );
  }
}

const CompilerC = styled.div`
    font-family: ${Ubuntu};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    textarea{
        margin-top: 20px;  
        display: block;
        &:focus{
            background-color: rgb(220,234,255);
        }
    }
    .button_block{
        button{
            padding: 5px;
            font-family: ${Ubuntu};
            margin: 10px 0 0 10px;
        }
    }
`;

export default Compiler;
