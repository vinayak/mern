import React, { Component } from 'react';
import classnames from 'classnames';
import axios from '../../utils/axios';

class NewAccount extends Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
      domain: '',
      expiry: '',
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
    let account=this.state
    delete account.errors
    axios.post('/accounts', {account})
        .then(function(res){
          console.log(res)
        }).then(()=>{
          console.log("done");
          // history.push('/list')
        })
        .catch(function(err){
          console.log(err.response);
        })
  }
  render() {
    const {errors} = this.state;
    return (
      <div className="NewAccount">
        New Account
        <form onSubmit={this.onSubmit}>
        <div className="text-center text-uppercase"></div>
          <div className={classnames("form-group", {'has-danger':errors.name})}>
            <input
              value={this.state.name}
              onChange={this.onChange}
              type="text"
              name="name"
              className="form-control"
              placeholder="Company"/>
              {errors.name && <span className="help-block">{errors.name}</span>}
          </div>
          <div className={classnames("form-group", {'has-danger':errors.domain})}>
            <input
              value={this.state.domain}
              onChange={this.onChange}
              type="text"
              name="domain"
              className="form-control"
              placeholder="Domain"/>
              {errors.domain && <span className="help-block">{errors.domain}</span>}
          </div>
          <div className={classnames("form-group", {'has-danger':errors.expiry})}>
            <input
              value={this.state.expiry}
              onChange={this.onChange}
              type="date"
              name="expiry"
              className="form-control"
              placeholder="Expiry" />
              {errors.expiry && <span className="help-block">{errors.expiry}</span>}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
      </form>
      </div>
    );
  }
}

export default NewAccount;
