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
    this.switchTab =this.switchTab.bind(this)
  }
  switchTab(active){
    console.log("clicked"+ active);
    this.setState({active})
  }
  render() {
    const content = {
      basic: <Basic  onChange={this.switchTab}/>,
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
          onChange={this.switchTab}
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
