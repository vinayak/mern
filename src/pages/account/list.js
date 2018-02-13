import React, { Component } from 'react';
import axios from '../../utils/axios';
import Modal from './modal'
import Tbl from './tbl'

class AccountList extends Component {
  constructor(props){
    super(props)
    this.state={
      loading:false,
      accounts:[]
    }
    this.delete =this.delete.bind(this)
    this.update =this.update.bind(this)
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
  update(accounts){
    console.log("updating.....");
    console.log(accounts);
    this.setState({
      accounts: accounts,
    })
  }
  render() {
    const {loading, accounts} = this.state;
    console.log(accounts);
    return (
      <div className="AccountList">
        <h3>Account List </h3>
        <Modal update={this.update} title="New" modalId="New"/>
        {accounts.length > 0 ? <Tbl data={this.state.accounts} delete={this.delete}/> : null}
        {
          !loading && accounts.length > 0 ? accounts.map(account =>{
            return <div key={account._id}>
              <div>Name: {account.name}</div>
              <div>Domain: {account.domain}</div>
              <div><button className="btn btn-primary" onClick={this.delete} value={account._id}>Delete</button></div>
              <div><Modal update={this.update} title="Edit" account={account} modalId={account._id}/></div>
              <hr/>
            </div>
          }) : null
        }
      </div>
    );
  }
}

export default AccountList;
