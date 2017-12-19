import React, { Component } from 'react';

class SignIn extends Component {
  constructor() {
    super();
    this.state = { message: '' };
  }
  // componentWillMount() {
  //   fetch('/carousel')
  //     .then(response => response.json())
  //     .then(json => this.setState({ message: json }));
  // }
  render() {
    return (
      <div className="SignIn">
        Sign In
      </div>
    );
  }
}

export default SignIn;
