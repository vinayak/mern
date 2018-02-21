import React, { Component } from 'react';

class Multiple extends Component {
  constructor(props){
    super(props)
    this.state={
      options:3
    }
    this.addOption =this.addOption.bind(this)
    this.removeOption =this.removeOption.bind(this)
  }
  render() {
    console.log("rendering");
    if(this.props.show === '2'){
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
                <div className="input-group-prepend">
                  <div className="input-group-text">
                  <input type="checkbox" aria-label="Checkbox for following text input"/>
                  </div>
                </div>
                <input type="text" className="form-control" aria-label="Text input with radio button" placeholder="Option"/>
                {i>2 ? (
                  <div className="input-group-append cursor" onClick={this.removeOption}>
                    <span className="input-group-text" id="basic-addon2">X</span>
                  </div>
                ) : null }
              </div>
            </div>
          )}
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

export default Multiple;
