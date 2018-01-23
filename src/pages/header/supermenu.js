import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SuperMenu extends Component {
  render() {
    console.log("menu....");
    console.log(this.props);
    return (
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link">Create Client</Link>
          </li>
          <li className="nav-item">
            <Link to="/list" className="nav-link">Client List</Link>
          </li>
          <li className="nav-item">
            <a href="javscript:void(0)" onClick={this.props.logout} className="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SuperMenu;
