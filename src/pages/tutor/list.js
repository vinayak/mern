import React, { Component } from 'react';
import axios from '../../utils/axios';

class TutorList extends Component {
  constructor(props){
    super(props)
    this.state={
      loading:false,
      tutors:[]
    }
    this.delete =this.delete.bind(this)
    this.update =this.update.bind(this)
  }
  componentDidMount(){
    let self=this;
    axios.get('/tutor')
      .then(function(res){
        self.setState({
          tutors: res.data,
          loading: false
        })
        console.log(res);
      })
      .catch(function(err){
        console.log(err);
      })
  }
  render() {
    return (
      <div className="TutorList">
        TutorList
      </div>
    );
  }
}

export default TutorList;
