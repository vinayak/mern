import React, { Component } from 'react';

class Basic extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <div className="input-group">
              <input type="text" className="form-control" placeholder="Name"/>
          </div>
          <div className="input-group">
              <input type="text" className="form-control" placeholder="Duration"/>
          </div>
          <div className="input-group">
              <input type="text" className="form-control" placeholder="Total Questions"/>
          </div>
          <div className="input-group">
              <input type="text" className="form-control" placeholder="Total Marks"/>
          </div>
          <div className="input-group">
              <input type="text" className="form-control" placeholder="Instructions"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Basic;
