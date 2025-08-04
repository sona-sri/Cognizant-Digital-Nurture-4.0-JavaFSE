import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      errors: {
        fullName: '',
        email: '',
        password: ''
      }
    };
  }

  validateForm = (errors) => {
    return Object.values(errors).every((val) => val === '');
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    const errors = { ...this.state.errors };

    switch (name) {
      case 'fullName':
        errors.fullName = value.length < 5 ? 'Full Name must be at least 5 characters long' : '';
        break;

      case 'email':
        const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid';
        break;

      case 'password':
        errors.password = value.length < 8 ? 'Password must be at least 8 characters long' : '';
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      alert('Valid Form');
    } else {
      const { fullName, email, password } = this.state.errors;

      if (fullName !== '') alert(fullName);
      if (email !== '') alert(email);
      if (password !== '') alert(password);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ width: '40%', margin: '0 auto' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Full Name:</label><br />
          <input
            type="text"
            name="fullName"
            value={this.state.fullName}
            onChange={this.handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default Register;
