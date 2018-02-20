import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TokenActions from '../../actions/token';
import classnames from 'classnames';
import axios from '../../utils/axios';
import history from '../../utils/history';

class Login extends Component {
  constructor(props){
    super(props)
    this.errors={} //will help in validation
    this.onSubmit =this.onSubmit.bind(this)
  }
  onSubmit(e){
    e.preventDefault();
    let self=this
    //do some validation
    axios.post('/users/login', {username: this.refs.username.value, password: this.refs.password.value})
      .then(function(res){
        // console.log("data from server");
        // console.log(res.data)
        // console.log(self.props);
        console.log(res.data.token);
        // window.location=window.location.protocol + '//vinay.'+ window.location.hostname +":"+ window.location.port+'/list'
        self.props.action.login(res.data.token)
        history.push('/') // need to redirect properly depending on super or sub domain
      })
      .catch(function(err){
        console.log(err.response);
      })
  }
  render() {
    return (
      <div className="SignIn">
        <form onSubmit={this.onSubmit}>
          <div className={classnames("form-group", {'has-danger':this.errors.username})}>
            <input type="email" required  ref="username" placeholder="Username" className="form-control"/>
          </div>
          <div className={classnames("form-group", {'has-danger':this.errors.password})}>
            <input type="password" required ref="password" placeholder="Password" className="form-control"/>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
      </form>

      </div>
    );
  }
}

function mapStateToProps(state, props){
  return {
    token: state.token
  }
}

function mapDispatchToProps(dispatch){
  return {
    action : bindActionCreators(TokenActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default Login;
