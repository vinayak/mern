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
    this.onChange =this.onChange.bind(this)
    this.onChangeText =this.onChangeText.bind(this)
  }
  onChange(e){
    this.props.onChangeQuestion(e.target.name, e.target.checked, document.getElementById(e.target.name).value)
  }

  onChangeText(e){
    this.props.onChangeQuestion(e.target.id, true, e.target.value)
  }
  componentDidMount(){
    let self=this;
    axios.get('/qbank')
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
                      <td>
                        <input className="form-input"
                               type="checkbox"
                               checked={this.props.questions.hasOwnProperty(question._id)}
                               onChange={this.onChange}
                               name={question._id} />
                      </td>
                      <td>{question.question}</td>
                      <td>
                        <input defaultValue="1"
                               type="text"
                               className="form-control"
                               onChange={this.onChangeText}
                               id={question._id}
                               value={this.props.questions[question._id]}
                               disabled={!this.props.questions.hasOwnProperty(question._id)} />

                      </td>
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
