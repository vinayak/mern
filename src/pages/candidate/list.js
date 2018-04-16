import React, { Component } from 'react';
import axios from '../../utils/axios';
import {Link} from 'react-router-dom';
import Modal from './modal';

class UserList extends Component {
  constructor(props){
    super(props)
    this.state={
      loading:false,
      users:[]
    }
    this.delete =this.delete.bind(this)
    this.update =this.update.bind(this)
  }
  componentDidMount(){
    let self=this;
    axios.get('/candidate')
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
  render() {
    const {loading, users} = this.state;
    console.log(users);
    return (
      <div className="UsersList">
        <h3>Candidate List </h3>
        <p><Link to="/candidatesave" className="btn btn-primary btn-xs">New</Link></p>
          <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Batch</th>
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
                      <td>{user.tag}</td>
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
