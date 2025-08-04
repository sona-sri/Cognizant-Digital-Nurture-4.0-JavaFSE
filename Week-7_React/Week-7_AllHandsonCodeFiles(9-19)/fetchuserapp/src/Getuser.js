import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      loading: true
    };
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
    console.log(data.results[0]);
  }

  render() {
    const { person, loading } = this.state;

    if (loading) {
      return <h2>Loading user data...</h2>;
    }

    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>User Info</h1>
        <h3>{person.name.title} {person.name.first}</h3>
        <img src={person.picture.large} alt="User" />
      </div>
    );
  }
}

export default Getuser;
