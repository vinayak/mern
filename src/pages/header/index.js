import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/images/logo.png'

class Header extends Component {
  render() {
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
          </ul>
        </div>
      </nav>
      </header>
    );
  }
}

export default Header;
