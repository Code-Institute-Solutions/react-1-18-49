import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    console.log('constructor')
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log('componentDidMount')
  }
  componentDidUpdate() {
    // console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('componentWillUnmount')
  }
  tick() {
    this.setState({
      date: new Date()
    });
    // console.log('tick!')
  }
  render() {
    console.log('render')
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default Clock