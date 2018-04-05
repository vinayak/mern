import React, { Component } from 'react';
import classnames from 'classnames';
import axios from '../../utils/axios';

class TutorNew extends Component {
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
      type: 'text',
      errors: {}
    }
    this.onFocus =this.onFocus.bind(this)
    this.onBlur =this.onBlur.bind(this)
    // this.onChange =this.onChange.bind(this)
    // this.onSubmit =this.onSubmit.bind(this)
  }
  /*
  additional field like active,
  invite should send a email invitation default should be checked
  drop down for gender and domain
  */
  onFocus(){
    this.setState({
      type: 'date'
    });
  }
  onBlur(){
    this.setState({
      type: 'text'
    });
  }
  render(){
    const {errors} = this.state;
    return (
      <div className="TutorNew">
        <h3>New Tutor</h3>
        <form action="/action_page.php">
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
        <div className="row">
          <div className={classnames("form-group col-md-6", {'has-danger':errors.gender})}>
            <select className="custom-select">
              <option defaultValue>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className={classnames("form-group col-md-6", {'has-danger':errors.dob})}>
            <input
              value={this.state.dob}
              onChange={this.onChange}
              type={ this.state.type }
              name="dob"
              className="form-control"
              placeholder="DOB"
              onFocus={this.onFocus}
              onBlur={this.onBlur} />
              {errors.dob && <span className="help-block">{errors.dob}</span>}
          </div>
        </div>
        <div className="row">
          <div className={classnames("form-group col-md-6", {'has-danger':errors.email})}>
            <input
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              name="email"
              className="form-control"
              placeholder="Email"/>
              {errors.email && <span className="help-block">{errors.email}</span>}
          </div>
          <div className={classnames("form-group col-md-6", {'has-danger':errors.mobile})}>
            <input
              value={this.state.mobile}
              onChange={this.onChange}
              type="text"
              name="mobile"
              className="form-control"
              placeholder="Mobile"/>
              {errors.mobile && <span className="help-block">{errors.mobile}</span>}
          </div>
        </div>
        <div className="row">
          <div className={classnames("form-group col-md-6", {'has-danger':errors.address})}>
            <input
              value={this.state.address}
              onChange={this.onChange}
              type="text"
              name="address"
              className="form-control"
              placeholder="Address"/>
              {errors.address && <span className="help-block">{errors.address}</span>}
          </div>
          <div className={classnames("form-group col-md-6", {'has-danger':errors.domain})}>
            <input
              value={this.state.domain}
              onChange={this.onChange}
              type="text"
              name="domain"
              className="form-control"
              placeholder="Domain"/>
              {errors.domain && <span className="help-block">{errors.domain}</span>}
          </div>
        </div>
        <div className="row">
          <div className={classnames("form-group col-md-6", {'has-danger':errors.city})}>
            <input
              value={this.state.city}
              onChange={this.onChange}
              type="text"
              name="city"
              className="form-control"
              placeholder="City"/>
              {errors.city && <span className="help-block">{errors.city}</span>}
          </div>
          <div className={classnames("form-group col-md-6", {'has-danger':errors.state})}>
            <input
              value={this.state.state}
              onChange={this.onChange}
              type="text"
              name="state"
              className="form-control"
              placeholder="State"/>
              {errors.state && <span className="help-block">{errors.state}</span>}
          </div>
        </div>
        <div className="row">
          <div className={classnames("form-group col-md-6", {'has-danger':errors.country})}>
            <input
              value={this.state.country}
              onChange={this.onChange}
              type="text"
              name="country"
              className="form-control"
              placeholder="Country"/>
              {errors.country && <span className="help-block">{errors.country}</span>}
          </div>
          <div className={classnames("form-group col-md-6", {'has-danger':errors.zip})}>
            <input
              value={this.state.zip}
              onChange={this.onChange}
              type="text"
              name="zip"
              className="form-control"
              placeholder="Zip"/>
              {errors.zip && <span className="help-block">{errors.zip}</span>}
          </div>
        </div>
        <div className="form-check">
          <label className="form-check-label" >
            <input className="form-check-input" type="checkbox" checked value="invite"/>
            Send Invite
          </label>
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
        </div>
        </form>
      </div>
    );
  }
}

export default TutorNew;
