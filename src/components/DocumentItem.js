import React, { Component } from 'react'
import {formatDecimal} from '../solidity/numbers'

import DocumentItemDetail from '../components/DocumentItemDetail'

import { connect } from 'react-redux'

import ReactGA from 'react-ga';

import { toggleDocument,
  fetchDocumentDetail 
} from '../actions/index'
import { throws } from 'assert';

const CORR_DOC_TYPE = -2 // correction document type

// DocumentItem  ------------------------------------------------------------------
class DocumentItem extends Component {
  constructor(props) {
    super(props)
    this.state = { hover: false }
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)
    this.onCheckClick = this.onCheckClick.bind(this)
    this.onOpenDetail = this.onOpenDetail.bind(this)
  }
  shouldComponentUpdate( nextProps, nextState ) {
    return nextProps.document.lastUpdated !== this.props.document.lastUpdated || this.state.hover !== nextState.hover
  }
  onMouseEnterHandler() {
    this.setState({ hover: true })
  }
  onMouseLeaveHandler() {
    this.setState({ hover: false })
  }
  onCheckClick(event) {
    ReactGA.event({
      category: 'Documents',
      action: 'Toggle document',
      label: ''
    });
    this.props.dispatch(toggleDocument(event.target.value))
  }

  onOpenDetail(id) {
    ReactGA.event({
      category: 'Document',
      action: 'Open detail',
      label: 'Document detail'
    });

    this.props.dispatch(fetchDocumentDetail(id))
  }

  getHighlightedColClass(col) {
    return this.props.documents.order === col && 
      !(this.props.document && this.props.document.checked) && 
      !this.state.hover ? 
      'w3-theme-l4' : ''
  }

  render() {
    console.log("DocumentItem.render()")
    const doc = this.props.document
    const docType = (doc.Type === CORR_DOC_TYPE) ? 'Corr' : 'Inv VAT'
    const openDocumentDetailAnim = 'w3-cell w3-left doc-id' + (this.props.document.spinner || false ? ' request-documentdetail-spinner' : '')
    
    return <div>
        <div className={"w3-row " + (doc.even ? 'div-row-grey' : '') + " " + (this.state.hover ? 'w3-theme-l3' : '') + " " + (doc.checked ? 'row-checked' : '')} 
          onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
        
          <div className="w3-cell w3-left doc-check"><input className="input-checkbox" type="checkbox" name="" value={doc.Id} onChange={this.onCheckClick} checked={doc.checked ? 'checked' : ''}/></div>
          <div onClick={ ()=>{this.onOpenDetail(doc.Id)} }>    
            <div className={openDocumentDetailAnim}><p className='text-ar p-cell whitespace'>{this.props.document.spinner || false ? ('') : (doc.Id) }</p></div>
            <div className={"w3-cell w3-left doc-number " + this.getHighlightedColClass('number')}><p className="text-al p-cell whitespace">{doc.Number}</p></div>
            <div className={"w3-cell w3-left doc-type " + (doc.Type === -1 ? 'div-doc-norm' : 'div-doc-corr')}><p className="text-ac p-cell whitespace">{docType}</p></div>
            <div className={"w3-cell w3-left doc-number " + this.getHighlightedColClass('date')}><p className="text-al p-cell whitespace">{doc.Date1}</p></div>
            <div className={"w3-cell w3-right doc-val " + this.getHighlightedColClass('excise')}><p className="text-ar p-cell whitespace">{formatDecimal(doc.Excise)}</p></div>
            <div className={"w3-cell w3-right doc-val " + this.getHighlightedColClass('brutto')}><p className="text-ar p-cell whitespace">{formatDecimal(doc.Brutto)}</p></div>
            <div className={"w3-cell w3-right doc-val " + this.getHighlightedColClass('netto')}><p className="text-ar p-cell whitespace">{formatDecimal(doc.Netto)}</p></div>
            <div className={"w3-cell w3-right doc-nip " + this.getHighlightedColClass('custnip')}><p className="text-al p-cell whitespace">{doc.Custnip}</p></div>
            <div className={"w3-rest doc-customername1 text-al " + this.getHighlightedColClass('custname1')}><p className="p-cell whitespace" style={{minWidth: "200px"}}>{doc.Custname1}</p></div>
          </div>
        </div>
        {(doc.opening || doc.closing) ? (<DocumentItemDetail 
            document={this.props.document} 
            //onCloseDetail={(id)=>{this.props.onCloseDetail(id)}}
            articles={this.props.articles}/>) : ('')}
        
      </div>
  }
}

//export default DocumentItem

const mapStateToProps = state => {
  return {
    articles: state.articles,
    documents: state.documents
  }
}

export default connect(
  mapStateToProps,
  null
)(DocumentItem)