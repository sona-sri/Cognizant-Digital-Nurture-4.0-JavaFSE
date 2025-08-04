import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  UpdateEntry = () => {
    this.setState(prevState => ({
      entrycount: prevState.entrycount + 1
    }));
  };

  UpdateExit = () => {
    this.setState(prevState => ({
      exitcount: prevState.exitcount + 1
    }));
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Mall Entry/Exit Counter</h1>
        <h2>People Entered: {this.state.entrycount}</h2>
        <h2>People Exited: {this.state.exitcount}</h2>
        <button onClick={this.UpdateEntry} style={{ marginRight: '10px', padding: '10px' }}>Login</button>
        <button onClick={this.UpdateExit} style={{ padding: '10px' }}>Exit</button>
      </div>
    );
  }
}

export default CountPeople;
