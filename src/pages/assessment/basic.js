import React, { Component } from 'react';

class Basic extends Component {
  constructor(props){
    super(props)
    this.state={name: '', duration:'', tQuestion:'', tMark:'', instruction:''}
    this.onChange = this.onChange.bind(this)
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <div className="box">
        <h3> Basic Information</h3>
          <div className="form-group">
            <input
              value={this.state.name}
              onChange={this.onChange}
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"/>
          </div>
          <div className="form-group">
            <input
              value={this.state.duration}
              onChange={this.onChange}
              type="number"
              name="duration"
              className="form-control"
              placeholder="Duration in minutes"/>
          </div>
          <div className="form-group">
            <input
              value={this.state.tQuestion}
              onChange={this.onChange}
              type="number"
              name="tQuestion"
              className="form-control"
              placeholder="Total Questions"/>
          </div>
          <div className="form-group">
            <input
              value={this.state.tMark}
              onChange={this.onChange}
              type="number"
              name="tMark"
              className="form-control"
              placeholder="Total Marks"/>
          </div>
          <div className="form-group">
            <input
              value={this.state.tMark}
              onChange={this.onChange}
              type="number"
              name="instruction"
              className="form-control"
              placeholder="Total Marks"/>
              <textarea type="text" className="form-control" placeholder="Instructions"/>
          </div>
          <div className="form-group">
            <button className="btn btn-primary"
              onClick={()=>{
              this.props.switchTab('config')
              }}>Submit</button>
          </div>
      </div>
    );
  }
}

export default Basic;
