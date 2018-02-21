import React, { Component } from 'react';

class Match extends Component {
  render() {
    if(this.props.show === '5'){
      return (
        <div>
          Match {this.props.show}
        </div>
      );
    }else{
      return null
    }
  }
}

export default Match;
