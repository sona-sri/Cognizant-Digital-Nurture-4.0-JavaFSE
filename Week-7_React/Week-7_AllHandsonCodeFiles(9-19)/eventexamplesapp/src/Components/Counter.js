import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementValue = () => {
    this.setState({ count: this.state.count + 1 });
  };

  sayHello = () => {
    console.log('Hello! You clicked the button.');
  };

  handleIncrement = () => {
    this.incrementValue();
    this.sayHello();
  };

  decrementValue = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handleSyntheticEvent = (e) => {
    alert('I was clicked');
    console.log(e.type);
  };

  render() {
    return (
      <div>
        <h2>Counter Value: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.decrementValue}>Decrement</button>

        <br /><br />
        <button onClick={() => this.sayWelcome('Welcome to the Event Handler Demo!')}>
          Say Welcome
        </button>

        <br /><br />
        <button onClick={this.handleSyntheticEvent}>Click Me (Synthetic Event)</button>
      </div>
    );
  }
}

export default Counter;
