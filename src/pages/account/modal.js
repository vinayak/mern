import React, { Component } from 'react';

class Modal extends Component {
  constructor(props){
    super(props)
    console.log(props);
    this.save =this.save.bind(this)
  }
  save(e){
    console.log("saving...");
    this.refs.closeModal.click();
    //need to close
  }
  render() {
    console.log(this.props);
    return (
      <div className="Modal">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          New
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
                <button type="button" ref="closeModal" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" onClick={this.save} className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Modal;
