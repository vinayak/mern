import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from '../../utils/axios';

class TutorList extends Component {
  render() {
    return (
      <div className="TutorList">
        <h3>Tutor List</h3>
        <p><Link to="/tutor/new" className="btn btn-primary btn-xs">New</Link></p>
      </div>
    );
  }
}

export default TutorList;
