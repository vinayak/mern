import React, { Component } from 'react';
import Basic from './basic';
import Config from './config';
import Question from './question';
import User from './user';
import Publish from './publish';

import Tabs from './tabs'


class AssessmentNew extends Component {
  constructor(props){
    super(props)
    this.state={
      active: 'basic',
      basic:{},
      config:{
        shuffleQ:true,
        shuffleO: true,
        showMarks: true,
        navigation: true,
        review: true,
        result:true,
        report:true
      },
      questions:{},
      users:{},
      publish:{}}
    this.switchTab = this.switchTab.bind(this)
    this.onChange = this.onChange.bind(this)
    this.validate = this.validate.bind(this)
  }
  switchTab(active){
    //check the validation for previous tabs
    console.log("clicked"+ active);
    this.setState({active})
  }

  onChange(name,value,section){
    let tmp = this.state[section]
    tmp[name]=value
    this.setState({section: tmp});
  }
  validate(e){
    //do the validation and move on or save
    console.log("getting it "+ e);
    console.log(this.state);
  }
  render() {
    const content = {
      basic: <Basic onChange={this.onChange} validate={this.validate} basic={this.state.basic}/>,
      config: <Config onChange={this.onChange} validate={this.validate} config={this.state.config}/>,
      question: <Question/>,
      user: <User/>,
      publish: <Publish/>
    }
    return (
      <div>
      <br/>
        <Tabs
          active={this.state.active}
          switchTab={this.switchTab}
        >
          <div key="basic">Basic Info</div>
          <div key="config">Configuration</div>
          <div key="question">Add Questions</div>
          <div key="user">Assign User</div>
          <div key="publish">Publish & Save</div>
        </Tabs>
        <div>
          {content[this.state.active]}
        </div>
      </div>
    );
  }
}

export default AssessmentNew;
