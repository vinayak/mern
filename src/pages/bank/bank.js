import React, { Component } from 'react';
import Objective from './objective';
import Blanks from './blanks';
import TF from './tf';
import Multiple from './multiple';
import Match from './match';
import axios from '../../utils/axios';

class Bank extends Component {
  constructor(props){
    super(props)
    this.state={
      type:'10'
    }
    this.onChange =this.onChange.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(question){
    console.log(question);
    // send it to server.
    axios.post('/qbank', {question})
        .then(function(res){
          console.log("great........");
          console.log(res);
        })
        .catch(function(err){
          console.log("errrorororororo");
          console.log(err);
        })

  }
  render() {
    return (
      <div>
        <form >
          <div className="form-group">
            <select name="type" onChange={this.onChange} className="custom-select">
              <option value='10'>Question Type</option>
              <option value="1">Objective</option>
              <option value="2">Multiple Choice</option>
              <option value="3">True/False</option>
              <option value="4">Fill in the blanks</option>
              <option value="5">Match the Following</option>
            </select>
          </div>
          <Objective show={this.state.type} onSubmit={this.onSubmit}/>
          <Multiple show={this.state.type} onSubmit={this.onSubmit}/>
          <Blanks show={this.state.type} onSubmit={this.onSubmit}/>
          <TF show={this.state.type} onSubmit={this.onSubmit}/>
          <Match show={this.state.type} onSubmit={this.onSubmit}/>
        </form>
      </div>
    );
  }
}

export default Bank;
