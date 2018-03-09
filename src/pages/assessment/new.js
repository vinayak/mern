import React, { Component } from 'react';
//https://react-bootstrap.github.io/components/tabs/
class AssessmentNew extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" href="#basic" role="tab" data-toggle="tab">Basic Info</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#config" role="tab" data-toggle="tab">Configuration</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#adding" role="tab" data-toggle="tab">Adding Questions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#adding" role="tab" data-toggle="tab">Assign Candiate</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#publish" role="tab" data-toggle="tab">Publishing</a>
          </li>
        </ul>
        <div className="tab-content border-bottom-0">
          <div role="tabpanel" className="tab-pane fade in active" id="basic">
            Basic
          </div>
          <div role="tabpanel" className="tab-pane fade" id="config">bbb</div>
          <div role="tabpanel" className="tab-pane fade" id="adding">ccc</div>
          <div role="tabpanel" className="tab-pane fade" id="publish">publishing</div>
        </div>
      </div>
    );
  }
}

export default AssessmentNew;
