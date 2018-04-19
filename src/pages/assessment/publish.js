import React, { Component } from 'react';

class Publish extends Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange(e){
    this.props.onChange(e.target.name, e.target.checked, 'publish')
  }
  render() {
    let width={width: '400px'}
    return (
      <div className="box">
        {/*Publish<br/>
        ON OFF button to publish<br/>
        start time calendar<br/>
        end time calendar<br/>*/}
        <div className="row" style={width}>
          <div className="mx-auto" >
            Shuffle Questions
          </div>
          <label className="switch">
            <input type="checkbox"
              checked={this.props.publish.activate}
              name="activate"
              onChange={this.onChange}/>
            <span className="slider round"></span>
          </label>
        </div>
        <div className="form-group">
          <button className="btn btn-primary"
            onClick={()=>{
            this.props.validate('publish')
          }}>Save</button>
      </div>
      </div>
    );
  }
}

export default Publish;
