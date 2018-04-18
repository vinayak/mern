import React, { Component } from 'react';
import axios from '../../utils/axios';

class Question extends Component {
  constructor(props){
    super(props)
    this.state={
      loading:false,
      questions:[]
    }
    console.log("constructor");
    // this.delete =this.delete.bind(this)
    // this.update =this.update.bind(this)
  }
  componentDidMount(){
    console.log("did mount");
    let self=this;
    axios.get('/qbank')
      .then(function(res){
        self.setState({
          questions: res.data,
          loading: false
        })
        console.log(res);
      })
      .catch(function(err){
        console.log(err);
      })
  }
  render() {
    const {loading, questions} = this.state;
    return (
      <div className="box">
          <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Question</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
        {
          !loading && questions.length > 0 ? questions.map(question =>{
            return (
                    <tr key={question._id}>
                      <td><input className="form-input" type="checkbox" name="invite" /></td>
                      <td>{question.question}</td>
                      <td><input defaultValue="1" type="text" className="form-control" /></td>
                    </tr>
            )
          }) : null
        }
          </tbody>
        </table>
        <div className="form-group">
          <button className="btn btn-primary"
            onClick={()=>{
            this.props.validate('config')
          }}>Next</button>
        </div>
      </div>
    );
  }
}

export default Question;
