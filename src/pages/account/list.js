import React, { Component } from 'react';
import axios from '../../utils/axios';

class AccountList extends Component {
  constructor(props){
    super(props)
    this.state={
      loading:false,
      accounts:[]
    }
    this.delete =this.delete.bind(this)
  }
  componentDidMount(){
    let self=this;
    axios.get('/accounts')
      .then(function(res){
        self.setState({
          accounts: res.data,
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
    axios.delete('/accounts/'+e.target.value)
      .then(function(res){
          self.setState({
            accounts: res.data,
            loading: false
          })
      })
      .catch(function(err){
        console.log(err);
      })
  }
  render() {
    const {loading, accounts} =this.state;
    return (
      <div className="AccountList">
        Account List <br/>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        {
          !loading && accounts.length > 0 ? accounts.map(account =>{
            return <div key={account._id}>
              <p>Name: {account.name}</p>
              <p>Domain: {account.domain}</p>
              <p><button className="btn btn-primary" onClick={this.delete} value={account._id}>Delete</button></p>
              <hr/>
            </div>
          }) : null
        }
      </div>
    );
  }
}

export default AccountList;
