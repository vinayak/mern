import React, { Component } from 'react';
import axios from '../../utils/axios';
import Modal from './modal';

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
        <Modal update={this.update} title="New" modalId="New"/><br/>
          <table class="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Domain</th>
                  <th>Expiry</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
        {
          !loading && accounts.length > 0 ? accounts.map(account =>{
            return (
                    <tr key={account._id}>
                      <td>{account.name}</td>
                      <td>{account.domain}</td>
                      <td>{account.expiry}</td>
                      <td><Modal update={this.update} title="Edit" account={account} modalId={account._id}/></td>
                      <td>
                        <button className="btn btn-primary btn-xs" onClick={this.delete} value={account._id} >Delete</button>
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

export default AccountList;
