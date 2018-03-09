import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import axios from '../../utils/axios';

class AssessmentList extends Component {
  render() {
    return (
      <div>
      <h3>Assessments</h3>
      <p><Link to="/test" className="btn btn-primary btn-xs">New</Link></p>
      </div>
    );
  }
}

export default AssessmentList;
