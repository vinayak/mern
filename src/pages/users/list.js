import React, { Component } from 'react';
import axios from '../../utils/axios';
import Modal from './modal';

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
  update(users){
    console.log("updating.....");
    console.log(users);
    this.setState({
      users: users,
    })
  }
  /*render() {
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
  }*/
  render() {
    const {loading, users} = this.state;
    console.log(users);
    return (
      <div className="UsersList">
        <h3>Users List </h3>
        <Modal update={this.update} title="New" modalId="New"/>
          <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
        {
          !loading && users.length > 0 ? users.map(user =>{
            return (
                    <tr key={user._id}>
                      <td>{user.firstName} {user.lastName} </td>
                      <td>{user.email}</td>
                      <td>{user.email}</td>
                      <td><Modal update={this.update} title="Edit" user={user} modalId={user._id}/></td>
                      <td>
                        <button className="btn btn-primary btn-xs" onClick={this.delete} value={user._id} >Delete</button>
                      </td>
                    </tr>
            )
          }) : null
        }
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;
