import React, { Component } from 'react';

class Modal extends Component {
  constructor(props){
    super(props)
    console.log(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className="Modal">
        Modal
      </div>
    );
  }
}

export default Modal;
