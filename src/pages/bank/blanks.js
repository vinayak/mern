import React, { Component } from 'react';

class Blanks extends Component {
  render() {
    if(this.props.show === '4'){
      return (
        <div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Question</span>
            </div>
            <textarea className="form-control" aria-label="With textarea"></textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <input type="text" className="form-control" aria-label="Text input with radio button" placeholder="Answer"/>
          </div>
        </div>
        <div className="form-group text-right">
          <button className="btn btn-primary" onClick={this.addOption}>Add Option</button> &nbsp;
          <button className="btn btn-primary">Submit</button>
        </div>
        </div>
      );
    }else{
      return null
    }
  }
}

export default Blanks;
