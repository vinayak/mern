import React, { Component } from 'react';

class Basic extends Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange(e){
    this.props.onChange(e.target.name, e.target.value, 'basic')
  }
  render() {
    return (
      <div className="box">
        <h3>Basic Information</h3>
          <div className="form-group">
            <input
              value={this.props.basic.name}
              onChange={this.onChange}
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"/>
          </div>
          <div className="form-group">
            <input
              value={this.props.basic.duration}
              onChange={this.onChange}
              type="number"
              name="duration"
              className="form-control"
              placeholder="Duration in minutes"/>
          </div>
          <div className="form-group">
            <input
              value={this.props.basic.tQuestion}
              onChange={this.onChange}
              type="number"
              name="tQuestion"
              className="form-control"
              placeholder="Total Questions"/>
          </div>
          <div className="form-group">
            <input
              value={this.props.basic.tMark}
              onChange={this.onChange}
              type="number"
              name="tMark"
              className="form-control"
              placeholder="Total Marks"/>
          </div>
          <div className="form-group">
            <textarea
              value={this.props.basic.instruction}
              onChange={this.onChange}
              type="number"
              name="instruction"
              className="form-control"
              placeholder="Instructions"/>
          </div>
          <div className="form-group">
            <button className="btn btn-primary"
              onClick={()=>{
              this.props.validate('config')
            }}>Next</button>
          </div>
      </div>
    );
  }
}

export default Basic;
