import React, { Component } from 'react';
import axios from '../../utils/axios';
import Modal from './modal'

class AccountList extends Component {
  constructor(props){
    super(props)
    this.state={
      loading:false,
      accounts:[],
      show: false
    }
    this.delete =this.delete.bind(this)
    this.add =this.add.bind(this)
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
  add(e){
    this.setState({
      show: true
    })
    console.log("adding...");
    console.log(this.state);
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
        <button className="btn btn-primary" onClick={this.add}>New</button>
        <Modal show={this.state.show}/>
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
