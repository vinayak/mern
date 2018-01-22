import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as TokenActions from '../../actions/token';
import store from '../../store'

import logo from '../../assets/images/logo.png'
import Menu from './menu'

class Header extends Component {
  constructor(props){
    super(props)
    this.logout =this.logout.bind(this)
  }
  render() {
    var menu;
    const {token}= store.getState()
    console.log("(header........)");
    console.log(token);
    if (window.location.hostname.split('.').length === 2) {
      menu = <Menu logout={this.logout} token={token}/>;
    }
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <Link to="/" className="navbar-brand"><img src={logo} alt="logo"/></Link>
             {menu}
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
