import React, { Component } from 'react';
import classnames from 'classnames';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';


class SignIn extends Component {
  constructor(props){
    super(props)
    this.state={
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }
    this.onChange =this.onChange.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
  }
  // componentWillMount() {
  //   fetch('/carousel')
  //     .then(response => response.json())
  //     .then(json => this.setState({ message: json }));
  // }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  validateInput(data){
    let errors = {}
    if(Validator.isEmpty(data.firstname)){
      errors.firstname="This field is required"
    }
    if(Validator.isEmpty(data.lastname)){
      errors.lastname="This field is required"
    }
    if(Validator.isEmpty(data.email)){
      errors.email="This field is required"
    }
    if(!Validator.isEmail(data.email)){
      errors.email="Email is invalid"
    }
    if(Validator.isEmpty(data.password)){
      errors.password="This field is required"
    }
    if(Validator.isEmpty(data.password2)){
      errors.password2="This field is required"
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
      console.log("Will be sending the data to server")
    }else{
      this.setState({errors })
    }
    console.log(this.state)
  }
  render() {
    const {errors} = this.state;
    return (
      <div className="SignIn">
        <form onSubmit={this.onSubmit}>
        <div className="text-center text-uppercase"></div>
          <div className="row">
            <div className={classnames("form-group col-md-6", {'has-danger':errors.firstname})}>
              <input
                value={this.state.firstname}
                onChange={this.onChange}
                type="text"
                name="firstname"
                className="form-control"
                placeholder="First Name"/>
                {errors.firstname && <span className="help-block">{errors.firstname}</span>}
            </div>
            <div className={classnames("form-group col-md-6", {'has-danger':errors.lastname})}>
              <input
                value={this.state.lastname}
                onChange={this.onChange}
                type="text"
                name="lastname"
                className="form-control"
                placeholder="Last Name"/>
                {errors.lastname && <span className="help-block">{errors.lastname}</span>}
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
