import React, { Component } from 'react';
import axios from '../../utils/axios';
import {Link} from 'react-router-dom';

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
    this.setState({
      users: users,
    })
  }
  invite(e){
    console.log(e.target.value);
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
                  <th>Status</th>
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
                      <td>{user.password === undefined ?
                          <button className="btn btn-primary btn-xs" onClick={this.invite} value={user._id} >Invite</button>
                          : 'Verified'}</td>
                      <td><Link to={"/candidatesave/"+user._id} className="btn btn-primary btn-xs">Edit</Link></td>
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
