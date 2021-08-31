import React from "react";

class EventBinding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: "Hello!",
      buttonText: "Exit",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //   handleClick() {
  //     this.setState({
  //       introduction: "Goodbye!",
  //     });
  //     console.log(this);
  //   }

  handleClick = () => {
    this.setState({
      introduction: "Goodbye!",
    });
    console.log(this);
  };

  render() {
    return (
      <div>
        <h1>
          {this.state.introduction} {this.props.greeting}
        </h1>
        {/* <button onClick={() => this.handleClick()}> */}
        {/* <button onClick={this.handleClick.bind(this)}> */}
        <button onClick={this.handleClick}>{this.state.buttonText}</button>
      </div>
    );
  }
}

export default EventBinding;
