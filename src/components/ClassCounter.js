import React, { Component } from 'react'

export class ClassCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  componentDidMount() {
    document.title = this.state.count;
  }
  componentDidUpdate() {
    document.title = this.state.count;
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState(
            prevState => ({
                count: prevState.count + 1
            })
        )}>
          Increment Count ({this.state.count})
        </button>
      </div>
    )
  }
}

export default ClassCounter