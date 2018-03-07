import React, { Component } from 'react';

class Blanks extends Component {
  constructor(props){
    super(props)

    if(Object.keys(props.question).length === 0 && props.question.constructor === Object){
      this.state={
        options:[0],
        type: 4,
        question:'',
        ans:[]
      }
    }else{
      let options=[]
      for (let i = 0; i < props.question.ans.length; i++) {
          options.push(i)
      }
      this.state={
        options:options,
        type: props.question.type,
        question:props.question.question,
        ans: props.question.ans
      }
    }
    this.addOption =this.addOption.bind(this)
    // this.removeOption =this.removeOption.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
    this.onChange =this.onChange.bind(this)
  }
  onChangeArray(i, e){
    let ans = [...this.state.ans];
     ans[i] = e.target.value;
     this.setState({ ans });
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
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
            <textarea className="form-control" value={this.state.question} name="question" onChange={this.onChange} aria-label="With textarea"></textarea>
          </div>
          </div>
          {this.state.options.map(i =>
            <div className="form-group" key={i}>
              <div className="input-group">
                <input type="text" className="form-control" value={this.state.ans[i]} onChange={this.onChangeArray.bind(this, i)} aria-label="Text input with radio button" placeholder="Option"/>
                {i>0 ? (
                  <div className="input-group-append cursor" onClick={this.removeOption.bind(this, i)}>
                    <span className="input-group-text" id="basic-addon2">X</span>
                  </div>
                ) : null }
              </div>
            </div>
          )}
          <div className="form-group text-right">
            <button className="btn btn-primary" onClick={this.addOption}>Add Option</button> &nbsp;
            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
      );
    }else{
      return null
    }
  }
  addOption(e){
    e.preventDefault();
    let options = [...this.state.options]
    options.push(options[options.length-1]+1)
    this.setState({
      options
    }, ()=>{
      console.log(this.state);
    })
  }
  removeOption(i, e){
    let ans = [...this.state.ans];
    ans=ans.filter(item => item);
    let options = [...this.state.options]
    let index= options.indexOf(i)
    options.splice(index,1);
    ans.splice(index,1);
    this.setState({
      options,
      ans
    }, ()=>{
      console.log(this.state);
    })
  }
  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
    let ans = [...this.state.ans];
    ans=ans.filter(item => item);
    this.setState({
      ans
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
}

export default Blanks;
