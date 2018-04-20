import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from '../../utils/axios';

class AssessmentList extends Component {
  constructor(props){
    super(props)
    this.state={
      loading:false,
      assessments:[]
    }
    // this.delete =this.delete.bind(this)
    // this.update =this.update.bind(this)
  }
  componentDidMount(){
    let self=this;
    axios.get('/assessment')
      .then(function(res){
        self.setState({
          assessments: res.data,
          loading: false
        })
      })
      .catch(function(err){
        console.log(err);
      })
  }
  render() {
    const {loading, assessments} = this.state;
    return (
      <div>
      <h3>Assessments</h3>
      <p><Link to="/test" className="btn btn-primary btn-xs">New</Link></p>
          <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Total Question</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
        {
          !loading && assessments.length > 0 ? assessments.map(assessment =>{
            return (
                    <tr key={assessment._id}>
                      <td>{assessment.basic.name}</td>
                      <td>{assessment.basic.desc}</td>
                      <td>{assessment.basic.tQuestion}</td>
                      <td><Link to={"/test/"+assessment._id} className="btn btn-primary btn-xs">Edit</Link> </td>
                      <td>
                        <button className="btn btn-primary btn-xs" onClick={this.delete} value={assessment._id} >Delete</button>
                      </td>
                    </tr>
            )
          }) : null
        }
          </tbody>
        </table>
      </div>
    );
  }
}

export default AssessmentList;
