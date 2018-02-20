import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LoginMenu extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Settings
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/users" className="dropdown-item">Users</Link>
              <Link to="/bank" className="dropdown-item">Question Bank</Link>
              <Link to="/assessment" className="dropdown-item">Assessment</Link>
              <Link to="/report" className="dropdown-item">Report</Link>
              <div class="dropdown-divider"></div>
              <Link to="/profile" className="dropdown-item">Profile</Link>
            </div>
          </li>
          <li className="nav-item">
            <a href="javscript:void(0)" onClick={this.props.logout} className="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default LoginMenu;
