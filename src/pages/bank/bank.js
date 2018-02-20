import React, { Component } from 'react';

class Bank extends Component {
  constructor(props){
    super(props)
    this.state={
      type:'10'
    }
    this.onChange =this.onChange.bind(this)
  }
  onChange(e){
    console.log(e.target.name);
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <select name="type" onChange={this.onChange} className="custom-select">
              <option value='10'>Question Type</option>
              <option value="1">Objective</option>
              <option value="2">Multiple Choice</option>
              <option value="3">True/False</option>
              <option value="4">Fill in the blanks</option>
              <option value="5">Match the Following</option>
            </select>
          </div>
          {this.state.type < 5 ?
            <div className="form-group">
            <input
            value={this.state.firstName}
            onChange={this.onChange}
            type="text"
            name="question"
            className="form-control"
            placeholder="Question"/></div> : ''}
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                  <input type="radio" name="vinay" aria-label="Radio button for following text input" />
                  </div>
                </div>
                <input type="text" className="form-control" aria-label="Text input with radio button" placeholder="Option"/>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                  <input type="radio" name="vinay" aria-label="Radio button for following text input" />
                  </div>
                </div>
                <input type="text" className="form-control" aria-label="Text input with radio button" placeholder="Option"/>
              </div>
            </div>
          <div>{this.state.type}</div>
        </form>
      </div>
    );
  }
}

export default Bank;
