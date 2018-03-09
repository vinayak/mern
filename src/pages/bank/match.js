import React, { Component } from 'react';

class Objective extends Component {
  constructor(props){
    super(props)
    if(Object.keys(props.question).length === 0 && props.question.constructor === Object){
      this.state={
        options:[0,1,2],
        type: 5,
        option:[],
        ans:[],
        question: 'N/A'
      }
    }else{
      let options=[]
      for (let i = 0; i < props.question.option.length; i++) {
          options.push(i)
      }
      this.state={
        options:options,
        type: props.question.type,
        option:props.question.option,
        ans: props.question.ans,
        question: 'N/A'
      }
    }

    console.log(props);
    console.log(this.state);
    this.addOption =this.addOption.bind(this)
    // this.removeOption =this.removeOption.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
    this.onChange =this.onChange.bind(this)
  }
  onChangeAns(i, e){
    let ans = [...this.state.ans];
     ans[i] = e.target.value;
     this.setState({ ans });
  }
  onChangeOption(i, e){
    let option = [...this.state.option];
     option[i] = e.target.value;
     this.setState({ option });
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    if(this.props.show === '5'){
      return (
        <div>
          {this.state.options.map(i =>
            <div className="row" key={i}>
              <div className="form-group col-md-6">
                <input type="text" className="form-control" value={this.state.option[i]}  onChange={this.onChangeOption.bind(this, i)} aria-label="Text input with radio button" placeholder="Option"/>
              </div>
              <div className="form-group input-group col-md-6">
                <input type="text" className="form-control" value={this.state.ans[i]}  onChange={this.onChangeAns.bind(this, i)} aria-label="Text input with radio button" placeholder="Answer"/>
                {i>2 ? (
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
    let option = [...this.state.option];
    option=option.filter(item => item);
    let ans = [...this.state.ans];
    ans=ans.filter(item => item);
    let options = [...this.state.options]
    let index= options.indexOf(i)
    options.splice(index,1);
    option.splice(index,1);
    ans.splice(index,1);
    this.setState({
      options,
      option,
      ans
    }, ()=>{
      console.log(this.state);
    })
  }
  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
    let option = [...this.state.option];
    let ans = [...this.state.ans];
    option=option.filter(item => item);
    ans=ans.filter(item => item);
    this.setState({
      option,
      ans
    }, ()=>{
      if(Object.keys(this.props.question).length === 0 && this.props.question.constructor === Object){
        console.log("new");
        console.log(this.state);
        this.props.onSubmit(this.state, null)
      }else{
        console.log("update");
        console.log(this.state);
        this.props.onSubmit(this.state, this.props.question._id)
      }
    })
  }
}

export default Objective;
