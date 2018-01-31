import React, { Component } from 'react';
import axios from '../../utils/axios';

class UserList extends Component {
  constructor(props){
    super(props)
    this.state={
      loading:false,
      users:[]
    }
    this.delete =this.delete.bind(this)
  }
  componentDidMount(){
    let self=this;
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
  delete(e){
    let self=this;
    console.log(e.target.value);
    axios.delete('/users/'+e.target.value)
      .then(function(res){
          self.setState({
            users: res.data,
            loading: false
          })
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
              <p><button className="btn btn-primary" onClick={this.delete} value={user._id}>Delete</button></p>
              <hr/>
            </div>
          }) : null
        }
      </div>
    );
  }
}

export default UserList;
