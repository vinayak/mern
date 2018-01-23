import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LogoutMenu extends Component {
  render() {
    return (
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
    );
  }
}

export default LogoutMenu;
