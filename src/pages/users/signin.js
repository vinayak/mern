import React, { Component } from 'react';
import classnames from 'classnames';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import axios from '../../utils/axios';
import history from '../../utils/history';

class SignIn extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
    this.state={
      firstName: '',
      lastName: '',
      email: '',
      domain:'',
      password: '',
      password2: '',
      errors: {}
    }
    this.onChange =this.onChange.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  validateInput(data){
    let errors = {}
    if(Validator.isEmpty(data.firstName)){
      errors.firstName="First Name is required"
    }
    if(Validator.isEmpty(data.lastName)){
      errors.lastName="Last Name is required"
    }
    if(Validator.isEmpty(data.email)){
      errors.email="Email is required"
    }
    if(!Validator.isEmail(data.email)){
      errors.email="Email is invalid"
    }
    if(Validator.isEmpty(data.domain)){
      errors.domain="Domain is required"
    }
    if(Validator.isEmpty(data.password)){
      errors.password="This Password is required"
    }
    if(Validator.isEmpty(data.password2)){
      errors.password2="This Password Confirmation is required"
    }
    if(!Validator.equals(data.password, data.password2)){
      errors.password2="Passwords do not match"
    }
    return {
      errors,
      isValid: isEmpty(errors)
    }
  }
  onSubmit(e){
    e.preventDefault();
    this.setState({errors: {}} )
    const {errors, isValid} = this.validateInput(this.state)
    if(isValid){
      let user=this.state
      delete user.errors
      axios.post('/users', {user})
        .then(function(res){
          console.log(res)
          //
        }).then(()=>{
          console.log("done");
          history.push('/list')
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
        <div className="text-center text-uppercase"></div>
          <div className="row">
            <div className={classnames("form-group col-md-6", {'has-danger':errors.firstName})}>
              <input
                value={this.state.firstName}
                onChange={this.onChange}
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First Name"/>
                {errors.firstName && <span className="help-block">{errors.firstName}</span>}
            </div>
            <div className={classnames("form-group col-md-6", {'has-danger':errors.lastName})}>
              <input
                value={this.state.lastName}
                onChange={this.onChange}
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last Name"/>
                {errors.lastName && <span className="help-block">{errors.lastName}</span>}
            </div>
          </div>
          <div className={classnames("form-group", {'has-danger':errors.email})}>
            <input
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              name="email"
              className="form-control"
              placeholder="Email" />
              {errors.email && <span className="help-block">{errors.email}</span>}
          </div>
          <div className={classnames("form-group", {'has-danger':errors.domain})}>
            <input
              value={this.state.domain}
              onChange={this.onChange}
              type="text"
              name="domain"
              className="form-control"
              placeholder="Domain" />
            {errors.domain && <span className="help-block">{errors.domain}</span>}
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
          <div className={classnames("form-group", {'has-danger':errors.password2})}>
            <input
              value={this.state.password2}
              onChange={this.onChange}
              type="password"
              name="password2"
              className="form-control"
              placeholder="Password Confirmation" />
            {errors.password2 && <span className="help-block">{errors.password2}</span>}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
      </form>

      </div>
    );
  }
}

export default SignIn;
