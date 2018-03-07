import React, { Component } from 'react';
import Objective from './objective';
import Blanks from './blanks';
import TF from './tf';
import Multiple from './multiple';
import Match from './match';
import axios from '../../utils/axios';
import history from '../../utils/history';

class Bank extends Component {
  constructor(props){
    super(props)
    this.state={
      type:'10',
      question: {}
    }
    this.onChange =this.onChange.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
  }
  componentDidMount(){
    // console.log(this.props.match.params.id);
    let self=this
    if(this.props.match.params.id){
      axios.get('/qbank/'+this.props.match.params.id)
        .then(function(res){
          // console.log(res.data);
          self.setState({
            type: res.data.type,
            question: res.data
          })
          // console.log(res);
        })
        .catch(function(err){
          console.log(err);
        })
    }
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(question, update){
    console.log(question);
    // send it to server.
    console.log(update);
    if(update){
      axios.put('/qbank/'+update, {question})
          .then(function(res){
            history.push('/bank')
          })
          .catch(function(err){
            console.log("errrorororororo");
            console.log(err);
          })
    }else{
      axios.post('/qbank', {question})
          .then(function(res){
            history.push('/bank')
          })
          .catch(function(err){
            console.log("errrorororororo");
            console.log(err);
          })
    }
  }
  render() {
    let qType= null
    switch(this.state.type){
      case "1":
        qType=<Objective show={this.state.type} question={this.state.question} onSubmit={this.onSubmit}/>;
        break;
      case "2":
        qType=<Multiple show={this.state.type} question={this.state.question} onSubmit={this.onSubmit}/>;
        break;
      case "3":
        qType=<TF show={this.state.type} question={this.state.question} onSubmit={this.onSubmit}/>;
        break;
      case "4":
        qType=<Blanks show={this.state.type} question={this.state.question} onSubmit={this.onSubmit}/>;
        break;
      case "5":
        qType=<Match show={this.state.type} question={this.state.question} onSubmit={this.onSubmit}/>;
        break;
      default:
        qType=null
        break;
    }
    return (
      <div>
        <form >
          <div className="form-group">
            <select name="type" onChange={this.onChange} value={this.state.type} className="custom-select">
              <option value="10">Question Type</option>
              <option value="1">Objective</option>
              <option value="2">Multiple Choice</option>
              <option value="3">True/False</option>
              <option value="4">Fill in the blanks</option>
              <option value="5">Match the Following</option>
            </select>
          </div>
          {qType}
        </form>
      </div>
    );
  }
}

export default Bank;
