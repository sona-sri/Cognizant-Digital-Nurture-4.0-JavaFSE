import React, { Component } from 'react';

class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ename: '',
      complaint: '',
      numberHolder: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    const referenceNumber = 'REF' + Math.floor(1000 + Math.random() * 9000);
    this.setState({ numberHolder: referenceNumber }, () => {
      const msg =
        'Thanks ' +
        this.state.ename +
        ', your complaint was submitted successfully.\nYour reference number is: ' +
        this.state.numberHolder;
      alert(msg);
    });
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ width: '50%', margin: '0 auto' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Employee Name:</label><br />
          <input
            type="text"
            name="ename"
            value={this.state.ename}
            onChange={this.handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Complaint:</label><br />
          <textarea
            name="complaint"
            value={this.state.complaint}
            onChange={this.handleChange}
            required
            rows="4"
            style={{ width: '100%' }}
          />
        </div>
        <button type="submit">Submit Complaint</button>
      </form>
    );
  }
}

export default ComplaintRegister;
