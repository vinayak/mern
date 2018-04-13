import React, { Component } from 'react';
import classnames from 'classnames';
import axios from '../../utils/axios';

class Modal extends Component {
  constructor(props){
    super(props)
    this.state={
      firstName: '',
      lastName:'',
      email: '',
      role: '',
      errors: {}
    }
    this.onChange =this.onChange.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
  }
  componentDidMount(){
    console.log(this.props.user);
    if(this.props.user){
      this.setState({
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        email: this.props.user.email,
        role: this.props.user.role
      })
    }
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(e){
    e.preventDefault();
    this.setState({errors: {}} )
    let user=this.state
    let self=this
    let close=this.refs.closeModal
    delete user.errors
    console.log(user);
    if(this.props.modalId==="New"){
      axios.post('/users', {user})
          .then(function(res){
            self.props.update(res.data);
            self.setState({
              firstName: '',
              lastName:'',
              email: '',
              role: '',
              errors: {}
            })
            close.click();
          })
          .catch(function(err){
            console.log(err);
          })
    }else{
      axios.put('/users/'+this.props.modalId, {user})
          .then(function(res){
            self.props.update(res.data);
            close.click();
          })
          .catch(function(err){
            console.log(err);
          })
    }

  }
  render() {
    const {errors} = this.state;
    console.log(this.state);
    return (
      <div className="Modal">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#"+this.props.modalId}>
          {this.props.title}
        </button>
        <div className="modal fade" id={this.props.modalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{this.props.title} Account</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={this.onSubmit}>
              <div className="modal-body">
                <div className="text-center text-uppercase"></div>
                  <div className={classnames("form-group", {'has-danger':errors.firstName})}>
                    <input
                      value={this.state.firstName}
                      onChange={this.onChange}
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="First Name"/>
                      {errors.firstName && <span className="help-block">{errors.firstName}</span>}
                  </div>
                  <div className={classnames("form-group", {'has-danger':errors.lastName})}>
                    <input
                      value={this.state.lastName}
                      onChange={this.onChange}
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Last Name"/>
                    {errors.lastName && <span className="help-block">{errors.lastName}</span>}
                  </div>
                  <div className={classnames("form-group", {'has-danger':errors.email})}>
                    <input
                      value={this.state.email}
                      onChange={this.onChange}
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Email"/>
                    {errors.email && <span className="help-block">{errors.email}</span>}
                  </div>
                  <div className={classnames("form-group", {'has-danger':errors.role})}>
                    <select
                      value={this.state.role}
                      onChange={this.onChange}
                      name="role"
                      className="form-control"
                      placeholder="Role">
                      <option value=''>Role</option>
                      <option>Candidate</option>
                      <option>Tutor</option>
                    </select>
                    {errors.role && <span className="help-block">{errors.role}</span>}
                  </div>
              </div>
              <div className="modal-footer form-group">
                <button type="button" ref="closeModal" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button className="btn btn-primary">{this.props.modalId==="New"? 'Create' : 'Update'}</button>
              </div>
            </form>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Modal;
