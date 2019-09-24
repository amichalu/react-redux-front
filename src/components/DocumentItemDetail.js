import React, { Component } from 'react'
import { connect } from 'react-redux'

import ReactGA from 'react-ga'
//import {formatDecimal, roundFloat} from '../solidity/numbers'

import DocumentItemDetailNumber from '../components/DocumentItemDetailNumber'
import DocumentItemDetailHeader from '../components/DocumentItemDetailHeader'
import DocumentItemDetailArticles from '../components/DocumentItemDetailArticles'
import DocumentItemDetailFooter from '../components/DocumentItemDetailFooter'
import { closeDocument } from '../actions'

// DocumentItemDetail  ------------------------------------------------------------------
class DocumentItemDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {      
      classNameAnim: props.document.opening ? "doc-opening" : "doc-closing"
    }
    this.onClose = this.onClose.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.document.opening !== nextProps.document.opening)
      this.setState( {
        classNameAnim: nextProps.document.opening ? "doc-opening" : "doc-closing",
      })
  }

  onClose() {
    ReactGA.event({
      category: 'Document',
      action: 'Close detail',
      label: 'Document detail'
    });
    this.props.dispatch(closeDocument(this.props.document.Id))
  }

  render() {
    console.log("DocumentItemDetail.render()")
    
    //const d = this.props.document

    return <div className={"w3-card w3-leftbar w3-border-grey div-detail " + this.state.classNameAnim}>

        <span onClick={this.onClose} className="w3-button w3-display-topright">x</span>

        <DocumentItemDetailNumber document={this.props.document}/>

        <div className="w3-container w3-padding-small">
          <DocumentItemDetailHeader document={this.props.document}/>
          <DocumentItemDetailArticles document={this.props.document} articles={this.props.articles}/>
          <DocumentItemDetailFooter document={this.props.document} articles={this.props.articles}/> 
        </div>

      </div>
  }  
}

//export default DocumentItemDetail
export default connect(
  null,
  null
)(DocumentItemDetail)