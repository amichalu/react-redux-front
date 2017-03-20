import React, { Component } from 'react';
import {mylog} from '../solidity/apputils';

// DocumentItemDetail  ------------------------------------------------------------------
class DocumentItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onClose: props.onClose,
      document: props.document,
      classNameAnim: props.document ? "doc-opening" : "doc-closing"
    };
    this.onClose = this.onClose.bind(this);
    mylog("DocumentItemDetail.constructor()");
  }

  componentWillReceiveProps(nextProps) {
    this.setState( {
      classNameAnim: this.state.document.opened ? "doc-opening" : "doc-closing",
      document: nextProps.document
    });
  }

  onClose() {
    this.setState({ classNameAnim: "doc-closing" });
    this.state.onClose();
  }
  render() {
    return <div className={"div-detail " + this.state.classNameAnim}>DETAIL
        <input type="button" value="Close" onClick={this.onClose}/>
      </div>
  }
}

export default DocumentItemDetail