import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import store from '../../store'

class UserList extends Component {
  // constructor(props){
  //   super(props)
  // }
  // componentDidMount(){
  //   console.log("mounting");
  // }

  render() {
    console.log("list page......");
    console.log(store)

    const { token } = store.getState();

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
