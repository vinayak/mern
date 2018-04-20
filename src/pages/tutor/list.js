import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from '../../utils/axios';

class TutorList extends Component {
  constructor(props){
    super(props)
    this.state={
      loading:false,
      tutors:[]
    }
    // this.delete =this.delete.bind(this)
    // this.update =this.update.bind(this)
  }
  componentDidMount(){
    let self=this;
    axios.get('/tutor')
      .then(function(res){
        self.setState({
          tutors: res.data,
          loading: false
        })
      })
      .catch(function(err){
        console.log(err);
      })
  }
  render() {
    const {loading, tutors} = this.state;
    return (
      <div className="TutorList">
        <h3>Tutor List</h3>
        <p><Link to="/tutor/new" className="btn btn-primary btn-xs">New</Link></p>
          <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Domain</th>
                  <th>Status</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
        {
          !loading && tutors.length > 0 ? tutors.map(tutor =>{
            return (
                    <tr key={tutor._id}>
                      <td>{tutor.firstName}</td>
                      <td>{tutor.email}</td>
                      <td>{tutor.domain}</td>
                      <td>{tutor.password === undefined ? 'Resend' : 'Verified'}</td>
                      <td><Link to={"/tutor/edit/"+tutor._id} className="btn btn-primary btn-xs">Edit</Link></td>
                      <td>
                        <button className="btn btn-primary btn-xs" onClick={this.delete} value={tutor._id} >Delete</button>
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

export default TutorList;
