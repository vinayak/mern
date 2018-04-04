import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SuperMenu extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="javascrpt:void(0)" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Settings
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/accounts" className="dropdown-item">Accounts</Link>
              <Link to="/tutors" className="dropdown-item">Tutor</Link>
            </div>
          </li>
          {/*<li className="nav-item">
            <Link to="/signin" className="nav-link">Create Client</Link>
          </li>
          <li className="nav-item">
            <Link to="/list" className="nav-link">Client List</Link>
          </li>*/}
          <li className="nav-item">
            <a href="javscript:void(0)" onClick={this.props.logout} className="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SuperMenu;
