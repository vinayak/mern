import React, { Component } from 'react';
import classnames from 'classnames';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import axios from '../../utils/axios';
import history from '../../utils/history';

class Password extends Component {
  constructor(props){
    super(props)
    this.state={
      password: '',
      password2: '',
      name:'',
      valid: true,
      errors: {}
    }
    this.onChange =this.onChange.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  componentDidMount(){
    let self=this
    axios.get('/tutor/'+this.props.match.params.id)
      .then(function(res){
        self.setState({
          name: res.data.firstName,
          valid: res.data.password === undefined
        })
      })
      .catch(function(err){
        console.log(err);
      })
  }
  validateInput(data){
    let errors = {}
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
      let credential=this.state
      console.log(credential);

      axios.put('/tutor/setpassword/'+this.props.match.params.id, {credential})
        .then(function(res){
          console.log(res)
        }).then(()=>{
          console.log("done");
          history.push('/login')
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
    if(this.state.valid){
      return(
        <div>
          Hello {this.state.name} <br/>
        Please set your password <br/>
          <form onSubmit={this.onSubmit}>
          <div className="text-center text-uppercase"></div>
            <div className={classnames("form-group", {'has-danger':errors.password})}>
              <input
                value={this.state.password}
                onChange={this.onChange}
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"/>
                {errors.password && <span className="help-block">{errors.password}</span>}
            </div>
            <div className={classnames("form-group", {'has-danger':errors.password2})}>
              <input
                value={this.state.password2}
                onChange={this.onChange}
                type="password"
                name="password2"
                className="form-control"
                placeholder="Password Confirmation"/>
                {errors.password2 && <span className="help-block">{errors.password2}</span>}
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
          </div>
      )
    }else{
      return(
        <div>
          Hello {this.state.name} <br/>
          Your have already set the password
        </div>
      )
    }
  }
}

export default Password;
