import React, { Component } from 'react';

import {mylog} from '../solidity/apputils';

// DocumentItemDetail  ------------------------------------------------------------------
class DocumentItemDetail extends Component {
  constructor(props) {
    super(props);
    mylog("DocumentItemDetail.constructor()");
    this.state = {      
      classNameAnim: props.document.opening ? "doc-opening" : "doc-closing"
    }
    this.onClose = this.onClose.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log('DocumentItemDetailContainer.componentWillReceiveProps()', nextProps)
    this.setState( {
      classNameAnim: nextProps.document.opening ? "doc-opening" : "doc-closing",
    });
  }

  onClose() {
    this.props.onCloseDetail(this.props.document.id);
  }
  render() {
    return <div className={"div-detail " + this.state.classNameAnim}>DETAIL
        <input type="button" value="Close" onClick={this.onClose}/>
        <p>oeuoewfewofubwe</p>
        <p>oeuoewfewofubwe</p>
        <p>oeuoewfewofubwe</p>
        
      </div>
  }
}

export default DocumentItemDetail