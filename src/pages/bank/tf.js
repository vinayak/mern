import React, { Component } from 'react';

class TF extends Component {
  render() {
    if(this.props.show === '3'){
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
              <div className="input-group-prepend">
                <div className="input-group-text">
                <input type="radio" name="vinay" aria-label="Radio button for following text input" />
                </div>
              </div>
              <input type="text" className="form-control" aria-label="Text input with radio button" placeholder="True"/>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                <input type="radio" name="vinay" aria-label="Radio button for following text input" />
                </div>
              </div>
              <input type="text" className="form-control" aria-label="Text input with radio button" placeholder="False"/>
            </div>
          </div>
          <div className="form-group text-right">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      );
    }else{
      return null
    }
  }
}

export default TF;
