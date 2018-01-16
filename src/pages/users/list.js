import React, { Component } from 'react';

class UserList extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log("mounting");
  }

  render() {
    console.log(this.state)
    return (
      <div className="UserList">
        User List
      </div>
    );
  }
}

export default UserList;
