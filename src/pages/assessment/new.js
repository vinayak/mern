import React, { Component } from 'react';
import Basic from './basic';
import Config from './config';
import Question from './question';
import User from './user';
import Publish from './publish';
import Tabs from './tabs'

import axios from '../../utils/axios';
import history from '../../utils/history';

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
      users:[],
      publish:{
        activate: false
      }
    }
    this.switchTab = this.switchTab.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onChangeQuestion = this.onChangeQuestion.bind(this)
    this.onChangeUser = this.onChangeUser.bind(this)
    this.validate = this.validate.bind(this)
  }
  componentDidMount(){
    let self=this
    if(this.props.match.params.id){
      axios.get('/assessment/'+this.props.match.params.id)
        .then(function(res){
          self.setState({
            active: 'basic',
            basic: res.data.basic,
            config: res.data.config,
            questions: res.data.questions,
            users: res.data.users,
            publish: res.data.publish,
           })
        })
        .catch(function(err){
          console.log(err);
        })
    }
  }
  switchTab(active){
    //check the validation for previous tabs
    console.log("clicked"+ active);
    this.setState({active})
  }

  onChange(name,value,section){
    this.state[section][name] = value
    this.setState(this.state)
  }
  onChangeQuestion(name, action, value){
    let tmp = this.state['questions']
    if(action){
      tmp[name]=value
    }else{
      delete tmp[name]
    }
    this.setState({questions: tmp});
  }
  onChangeUser(name, action){
    let tmp = this.state['users']
    if(action){
      tmp.push(name)
    }else{
      tmp.splice(tmp.indexOf(name), 1)
    }
    this.setState({users: tmp});
  }
  validate(active){
    //do the validation and move on or save
    console.log(this.state);
    let assessment = this.state
    if(active==="save"){
      if(this.props.match.params.id){
        axios.put('/assessment/'+this.props.match.params.id, {assessment})
            .then(function(res){
              // history.push('/bank')
            })
            .catch(function(err){
              console.log(err);
            })
      }else{
        axios.post('/assessment', {assessment})
          .then(function(res){
            console.log(res)
          }).then(()=>{
            console.log("done");
            // history.push('/users')
          })
          .catch(function(err){
            console.log(err.response);
          })
      }
      history.push('/assessment')
    }else{
      this.setState({active})
    }
  }
  render() {
    const content = {
      basic: <Basic onChange={this.onChange} validate={this.validate} basic={this.state.basic}/>,
      config: <Config onChange={this.onChange} validate={this.validate} config={this.state.config}/>,
      question: <Question onChangeQuestion={this.onChangeQuestion} validate={this.validate} questions={this.state.questions}/>,
      user: <User onChangeUser={this.onChangeUser} validate={this.validate} users={this.state.users}/>,
      publish: <Publish onChange={this.onChange} validate={this.validate} publish={this.state.publish}/>
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
