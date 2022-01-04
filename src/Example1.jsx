import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Example1 extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 }
  }
  render() {
    return (
      <div className='example'>
        <h1 className='example-title'>Example 1: State in Class Components</h1>
        <div className='section'>
          <h4>setState</h4>
          <div className='button-container'>
            <Button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</Button>
            <Button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</Button>
          </div>
        </div>
        <div className="section">
          <h5>Counter: {this.state.counter}</h5>
        </div>
      </div>
    )
  }
}
