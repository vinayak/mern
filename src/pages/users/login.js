import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      username: '',
      password: '',
      errors: {}
    }
    this.onChange =this.onChange.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(e){
    e.preventDefault();
    this.setState({errors: {}} )
    // const {errors, isValid} = this.validateInput(this.state)
    let errors={}
    let isValid =true
    if(isValid){
      let user=this.state
      delete user.errors
      axios.post('/users/login', {username: user.username, password: user.password})
        .then(function(res){
          console.log(res.data)
        })
        .catch(function(err){
          console.log(err.response);
        })
    }else{
      this.setState({errors })
    }
  }
  render() {
    const {errors} = this.state;
    return (
      <div className="SignIn">
        <form onSubmit={this.onSubmit}>
          <div className={classnames("form-group", {'has-danger':errors.username})}>
            <input
              value={this.state.username}
              onChange={this.onChange}
              type="text"
              name="username"
              className="form-control"
              placeholder="Username or Email" />
              {errors.username && <span className="help-block">{errors.username}</span>}
          </div>
          <div className={classnames("form-group", {'has-danger':errors.password})}>
            <input
              value={this.state.password}
              onChange={this.onChange}
              type="password"
              name="password"
              className="form-control"
              placeholder="Password" />
              {errors.password && <span className="help-block">{errors.password}</span>}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
      </form>

      </div>
    );
  }
}

export default Login;
