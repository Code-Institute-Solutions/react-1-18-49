import React, { Component } from 'react'

export class ClassCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  handleClick = () => {
    this.setState(prevState => ({
        count: prevState.count + 1
    }))
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick }>
          Increment Class Counter {this.state.count}
        </button>
      </div>
    )
  }
}

export default ClassCounter