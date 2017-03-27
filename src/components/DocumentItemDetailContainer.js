import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchDocumentArticlesIfNeeded } from '../actions'
import {mylog} from '../solidity/apputils';

// DocumentItemDetail  ------------------------------------------------------------------
class DocumentItemDetailContainer extends Component {
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

  componentDidMount() {
    console.log('DocumentItemDetailContainer.componentDidMount()')
    const { dispatch } = this.props
    dispatch(fetchDocumentArticlesIfNeeded())    
  }

  componentWillReceiveProps(nextProps) {
    console.log('DocumentItemDetailContainer.componentWillReceiveProps()')
    const { dispatch } = this.nextProps
    dispatch(fetchDocumentArticlesIfNeeded())

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

const mapStateToProps = state => {
  console.log('mapStateToProps() ', state)
  return state
}
export default connect(mapStateToProps)(DocumentItemDetailContainer)