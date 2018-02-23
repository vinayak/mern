import React, { Component } from 'react';

class Objective extends Component {
  constructor(props){
    super(props)
    this.state={
      options:[0,1,2],
      type: 1,
      question:'',
      option:[]
    }
    this.addOption =this.addOption.bind(this)
    this.removeOption =this.removeOption.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
    this.onChange =this.onChange.bind(this)
  }
  onChangeArray(i, e){
    let option = [...this.state.option];
     option[i] = e.target.value;
     this.setState({ option });
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    if(this.props.show === '1'){
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
                <div className="input-group-prepend">
                  <div className="input-group-text">
                  <input type="radio" name="vinay" aria-label="Radio button for following text input" />
                  </div>
                </div>
                <input type="text" className="form-control" onChange={this.onChangeArray.bind(this, i)} aria-label="Text input with radio button" placeholder="Option"/>
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
    })
  }
  removeOption(i, e){
    let option = [...this.state.option];
    let options = [...this.state.options]
    let index= options.indexOf(i)
    options.splice(index,1);
    option.splice(index,1);
    this.setState({
      options,
      option
    })
  }
  onSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state)
  }
}

export default Objective;
