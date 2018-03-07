import React, { Component } from 'react';

class TF extends Component {
  constructor(props){
    super(props)
    if(Object.keys(props.question).length === 0 && props.question.constructor === Object){
      this.state={
        type: 3,
        question:'',
        option:[],
        ans: null
      }
    }else{
      this.state={
        type: props.question.type,
        question:props.question.question,
        option:props.question.option,
        ans: props.question.ans
      }
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
      if(Object.keys(this.props.question).length === 0 && this.props.question.constructor === Object){
        console.log("new");
        this.props.onSubmit(this.state, null)
      }else{
        console.log("update");
        this.props.onSubmit(this.state, this.props.question._id)
      }
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
              <input type="text" className="form-control" value={this.state.option[0]} onChange={this.onChangeArray.bind(this, 0)} aria-label="Text input with radio button" placeholder="True"/>
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
              <input type="text" className="form-control" value={this.state.option[1]} onChange={this.onChangeArray.bind(this, 1)} aria-label="Text input with radio button" placeholder="False"/>
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
