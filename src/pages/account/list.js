import React, { Component } from 'react';
import axios from '../../utils/axios';
import Modal from './modal'

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
    const {loading, accounts, show} =this.state;
    return (
      <div className="AccountList">
        Account List <br/>
      <Modal />
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
