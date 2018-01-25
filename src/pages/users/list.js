import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import store from '../../store';
import axios from '../../utils/axios';

class UserList extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log("mounting");
    console.log(store);
    axios.get('/users')
      .then(function(res){
        console.log(res);
      })
      .catch(function(err){
        console.log(err);
      })
  }

  render() {
    console.log("list page......");
    const { token } = store.getState();
    console.log(token)
     if (!token) {
       return <Redirect to='/'/>;
     }
    return (
      <div className="UserList">
        User List
      </div>
    );
  }
}

export default UserList;
