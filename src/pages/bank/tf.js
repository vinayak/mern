import React, { Component } from 'react';

class TF extends Component {
  constructor(props){
    super(props)
    this.state={
      type: 3,
      question:'',
      option:[],
      ans: null
    }
    this.onSubmit =this.onSubmit.bind(this)
    this.onChange =this.onChange.bind(this)
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  onChangeArray(i, e){
    let option = [...this.state.option];
     option[i] = e.target.value;
     this.setState({ option });
  }
  onSubmit(e){
    e.preventDefault();
    let option = [...this.state.option];
    option=option.filter(item => item);
    this.setState({
      option
    }, ()=>{
      this.props.onSubmit(this.state)
    })
  }
  render() {
    if(this.props.show === '3'){
      return (
        <div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Question</span>
              </div>
              <textarea className="form-control" value={this.state.question} name="question" onChange={this.onChange} aria-label="With textarea"></textarea>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input type="radio" value="0" name="ans"
                      checked={this.state.ans === "0"}
                      onChange={this.onChange} />
                </div>
              </div>
              <input type="text" className="form-control" onChange={this.onChangeArray.bind(this, 0)} aria-label="Text input with radio button" placeholder="True"/>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input type="radio" value="1" name="ans"
                      checked={this.state.ans === "1"}
                      onChange={this.onChange} />
                </div>
              </div>
              <input type="text" className="form-control" onChange={this.onChangeArray.bind(this, 1)} aria-label="Text input with radio button" placeholder="False"/>
            </div>
          </div>
          <div className="form-group text-right">
            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
      );
    }else{
      return null
    }
  }
}

export default TF;
