import React, { Component } from 'react';
import axios from '../../utils/axios';

class Exam extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    let self=this
    if(this.props.match.params.id){
      axios.get('/exam/'+this.props.match.params.id)
        .then(function(res){
          console.log(res.data);
        })
        .catch(function(err){
          console.log(err);
        })
    }
  }
  render() {
    return (
      <div className="Exam">
        Start Exam
      </div>
    );
  }
}

export default Exam;
