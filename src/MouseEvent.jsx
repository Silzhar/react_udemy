import React, { Component } from 'react';

export default class MouseEvent extends Component {
  constructor() {
    super();
    this.state = { mouseX: 0, mouseY: 0 };
    // this.handleMouseMove = this.handleMouseMove.bind(this); 
  }
  handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    this.setState({ mouseX: clientX, mouseY: clientY });
  }
  render() {
    return (
      <div>
        <h4>Mouse event</h4>
        <button onClick={this.handleClick}>Hi there !</button>
        <div
          onMouseMove={this.handleMouseMove}
          style={{
            border: '2px solid black',
            marginTop: 10,
            padding: 20,
          }}
          
        >
          <p>{this.state.mouseX} - {this.state.mouseY}</p>
        </div>
      </div>
    );
  }
}
