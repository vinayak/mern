import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as TokenActions from '../../actions/token';

import logo from '../../assets/images/logo.png'

class Header extends Component {
  constructor(props){
    super(props)
    this.logout =this.logout.bind(this)
  }
  render() {
    console.log(this.props);
    // const {token}= store.getState()
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link to="/" className="navbar-brand"><img src={logo} alt="logo"/></Link>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/list" className="nav-link">List</Link>
            </li>
            <li className="nav-item">
              <a href="javscript:void(0)" onClick={this.logout} className="nav-link">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
      </header>
    );
  }
  logout(){
    console.log("will logout...");
    this.props.action.logout()
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default Header;
