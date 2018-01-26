import React, { Component } from 'react';
import axios from '../../utils/axios';

class UserList extends Component {
  constructor(props){
    console.log("constructor......");
    super(props)
    this.state={
      loading:false,
      users:[]
    }
  }
  componentDidMount(){
    console.log("Mounting........");
    console.log(this.state);
    let self=this
    axios.get('/users')
      .then(function(res){
        self.setState({
          users: res.data,
          loading: false
        })
        console.log(res);
      })
      .catch(function(err){
        console.log(err);
      })
  }

  render() {
    const {loading, users} =this.state;
    return (
      <div className="UserList">
        User List
        {
          !loading && users.length > 0 ? users.map(user =>{
            return <div key={user.email}>
              <p>Name: {user.firstName} {user.lastName}</p>
              <p>Email: {user.email}</p>
              <hr/>
            </div>
          }) : null
        }
      </div>
    );
  }
}

export default UserList;
