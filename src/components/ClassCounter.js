import React, { Component } from 'react'

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    return (
      <div>
        <h1>
          Hello, I'm a stateful class component!
        </h1>
        <h2>You clicked {this.state.count} times</h2>
        <button onClick={this.handleClick}>
            Increment Counter
        </button>
      </div>
    );
  }
}