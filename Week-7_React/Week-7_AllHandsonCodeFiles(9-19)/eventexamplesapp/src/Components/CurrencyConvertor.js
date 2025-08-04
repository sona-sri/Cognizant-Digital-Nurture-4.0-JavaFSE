import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: '',
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = () => {
    const conversionRate = 0.011; // 1 INR = 0.011 EUR
    const euroValue = (parseFloat(this.state.rupees) * conversionRate).toFixed(2);
    
    this.setState({ euro: euroValue }, () => {
      alert(`Converting to Euro. Amount is €${this.state.euro}`);
    });
  };

  render() {
    return (
      <div>
        <h2>Currency Converter</h2>
        <input
          type="number"
          placeholder="Enter amount in INR"
          value={this.state.rupees}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Convert</button>
        <p>Equivalent in Euro: € {this.state.euro}</p>
      </div>
    );
  }
}

export default CurrencyConvertor;
