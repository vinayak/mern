import React, { Component } from 'react';

class Config extends Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange(e){
    console.log(e.target.checked);
    this.props.onChange(e.target.name, e.target.checked, 'config')
  }
  render() {
    let width={width: '400px'}
    return (
      <div className="box">
        <div className="row" style={width}>
          <div className="mx-auto" >
            Shuffle Questions
          </div>
          <label className="switch">
            <input type="checkbox"
              checked={this.props.config.shuffleQ}
              name="shuffleQ"
              onChange={this.onChange}/>
            <span className="slider round"></span>
          </label>
        </div>
        <div className="row" style={width}>
          <div className="mx-auto">
            Shuffle Options
          </div>
          <label className="switch">
            <input type="checkbox"
              checked={this.props.config.shuffleO}
              name="shuffleO"
              onChange={this.onChange}/>
            <span className="slider round"></span>
          </label>
        </div>
        <div className="row" style={width}>
          <div className="mx-auto">
            Show Marks
          </div>
          <label className="switch">
            <input type="checkbox"
              checked={this.props.config.showMarks}
              name="showMarks"
              onChange={this.onChange}/>
            <span className="slider round"></span>
          </label>
        </div>
        <div className="row" style={width}>
          <div className="mx-auto">
            Enable Navigation
          </div>
          <label className="switch">
            <input type="checkbox"
              checked={this.props.config.navigation}
              name="navigation"
              onChange={this.onChange}/>
            <span className="slider round"></span>
          </label>
        </div>
        <div className="row" style={width}>
          <div className="mx-auto">
            Allow Review
          </div>
          <label className="switch">
            <input type="checkbox"
              checked={this.props.config.review}
              name="review"
              onChange={this.onChange}/>
            <span className="slider round"></span>
          </label>
        </div>
        {/*question wise time<br/>*/}
        <div className="row" style={width}>
          <div className="mx-auto">
            Show Result
          </div>
          <label className="switch">
            <input type="checkbox"
              checked={this.props.config.result}
              name="result"
              onChange={this.onChange}/>
            <span className="slider round"></span>
          </label>
        </div>
        <div className="row" style={width}>
          <div className="mx-auto">
            Show Report
          </div>
          <label className="switch">
            <input type="checkbox"
              checked={this.props.config.report}
              name="report"
              onChange={this.onChange}/>
            <span className="slider round"></span>
          </label>
        </div>
      {/*message after completion<br/>
      define a pass percentage %<br/>*/}
      <div className="form-group">
        <button className="btn btn-primary"
          onClick={()=>{
          this.props.validate('question')
        }}>Next</button>
      </div>
      </div>
    );
  }
}

export default Config;
