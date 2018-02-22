import React, { Component } from 'react';

class Blanks extends Component {
  constructor(props){
    super(props)
    this.state={
      options:1
    }
    this.addOption =this.addOption.bind(this)
    this.removeOption =this.removeOption.bind(this)
  }
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
        {[...Array(this.state.options)].map((e, i) =>
          <div className="form-group" key={i}>
            <div className="input-group">
              <input type="text" className="form-control" aria-label="Text input with radio button" placeholder="Answer"/>
              {i>0 ? (
                <div className="input-group-append cursor" onClick={this.removeOption}>
                  <span className="input-group-text" id="basic-addon2">X</span>
                </div>
              ) : null }
            </div>
          </div>
        )}
        <div className="form-group text-right">
          <button className="btn btn-primary" onClick={this.addOption}>Add Answer</button> &nbsp;
          <button className="btn btn-primary">Submit</button>
        </div>
        </div>
      );
    }else{
      return null
    }
  }
  addOption(e){
    e.preventDefault();
    this.setState({
      options: this.state.options+1
    })
  }
  removeOption(){
    this.setState({
      options: this.state.options-1
    })
  }
}

export default Blanks;
