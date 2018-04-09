import React, { Component } from 'react';
import axios from '../../utils/axios';

class Password extends Component {
  constructor(props){
    super(props)
    console.log(props);
  }
  componentDidMount(){
    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <div className="Password">
        Password
      </div>
    );
  }
}

export default Password;
