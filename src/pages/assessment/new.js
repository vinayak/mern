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
    this.state={active: 'basic'}
    this.switchTab = this.switchTab.bind(this)
    // this.onChange = this.onChange.bind(this)
  }
  switchTab(active){
    console.log("clicked"+ active);
    //save the data from each section here.
    this.setState({active})
  }

  // onChange(e){
  //   console.log("getting it");
  //   this.setState({[e.target.name]: e.target.value});
  // }

  render() {
    const content = {
      basic: <Basic switchTab={this.switchTab}/>,
      config: <Config/>,
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
          <div key="publish">Publish</div>
        </Tabs>
        <div>
          {content[this.state.active]}
        </div>
      </div>
    );
  }
}

export default AssessmentNew;
