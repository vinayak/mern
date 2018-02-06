import React, { Component } from 'react';
import classnames from 'classnames';
import axios from '../../utils/axios';

class Modal extends Component {
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
  componentDidMount(){
    if(this.props.account){
      this.setState({
        name: this.props.account.name,
        domain: this.props.account.domain,
        expiry: this.props.account.expiry
      })
    }
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(e){
    e.preventDefault();
    this.setState({errors: {}} )
    let account=this.state
    let self=this
    delete account.errors
    axios.post('/accounts', {account})
        .then(function(res){
          self.props.update(res.data);
          self.refs.closeModal.click();
        })
        .catch(function(err){
          console.log(err);
        })
  }
  render() {
    const {errors} = this.state;
    console.log(this.state);
    return (
      <div className="Modal">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          {this.props.title}
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
              </div>
              <div className="modal-footer form-group">
                <button type="button" ref="closeModal" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button className="btn btn-primary">Submit</button>
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
