import React, { Component } from 'react';
import axios from '../../utils/axios';

class BankList extends Component {
  constructor(props){
    super(props)
    this.state={
      loading:false,
      questions:[]
    }
    this.delete =this.delete.bind(this)
    this.update =this.update.bind(this)
  }
  componentDidMount(){
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
  delete(e){
    let self=this;
    console.log(e.target.value);
    axios.delete('/qbank/'+e.target.value)
      .then(function(res){
          self.setState({
            questions: res.data,
            loading: false
          })
      })
      .catch(function(err){
        console.log(err);
      })
  }
  update(questions){
    console.log("updating.....");
    console.log(questions);
    this.setState({
      questions: questions,
    })
  }
  render() {
    const {loading, questions} = this.state;
    console.log(questions);
    return (
      <div className="UsersList">
        <h3>Questions</h3>
          <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Topic</th>
                  <th>Level</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
        {
          !loading && questions.length > 0 ? questions.map(question =>{
            return (
                    <tr key={question._id}>
                      <td>{question.question}</td>
                      <td>{question.type}</td>
                      <td>{question.type}</td>
                      <td>Edit | Delete</td>
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

export default BankList;
