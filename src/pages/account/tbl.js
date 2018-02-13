import React, { Component } from 'react';
const $ = require('jquery')
$.DataTable = require('datatables.net')


class Tbl extends Component {
  constructor(props){
    super(props)
    console.log(props);
  }
  componentDidMount(){
    console.log(this.el);
    console.log(this.props.data);
    this.$el=$(this.el)
    this.$el.DataTable({
      data: this.props.data,
      columns: [
        { data: 'name' },
        { data: 'domain' },
        { data: 'expiry' },
        { data: 'createdAt'},
        {
          data: null,
          className: "center",
          defaultContent: '<a href="" class="editor_edit">Edit</a> / <button class="btn btn-primary" onClick={this.delete} value={account._id}>Delete</button>'
         }
      ]
    })
  }
  componentWillUnmount(){
    this.$el.DataTable().destroy(true)
  }
  render() {
    return (
      <div>
      <table className="display" width="100%" ref={el => this.el = el}>
      <thead>
        <tr>
            <th>Name</th>
            <th>Domain</th>
            <th>Expiry</th>
            <th>Created</th>
            <th>Action</th>
        </tr>
    </thead>
      </table>
      </div>
    );
  }
}

export default Tbl;
