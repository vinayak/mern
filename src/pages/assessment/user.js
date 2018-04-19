import React, { Component } from 'react';
import axios from '../../utils/axios';

class User extends Component {
  constructor(props){
    super(props)
    this.state={
      loading:false,
      users:[]
    }
    this.onChange =this.onChange.bind(this)
  }
  componentDidMount(){
    let self=this;
    axios.get('/candidate')
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
  onChange(e){
    this.props.onChangeUser(e.target.name, e.target.checked)
  }
  render() {
    const {loading, users} = this.state;
    return (
      <div className="box">
        {/*add users from the list<br/>
        allow anyone to take the test with users information and provide a token(password)<br/>
      generate a token and link to test<br/>*/}
      <div className="UsersList">
        <h3>Candidate List </h3>
          <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Batch</th>
                </tr>
              </thead>
              <tbody>
        {
          !loading && users.length > 0 ? users.map(user =>{
            return (
                    <tr key={user._id}>
                      <td>
                        <input className="form-input"
                               type="checkbox"
                               checked={this.props.users.includes(user._id)}
                               onChange={this.onChange}
                               name={user._id} />
                      </td>
                      <td>{user.firstName} {user.lastName} </td>
                      <td>{user.email}</td>
                      <td>{user.tag}</td>
                    </tr>
            )
          }) : null
        }
          </tbody>
        </table>
        <div className="form-group">
          <button className="btn btn-primary"
            onClick={()=>{
            this.props.validate('publish')
          }}>Next</button>
        </div>
      </div>

      </div>
    );
  }
}

export default User;
