import React, { Component } from 'react'
import {formatDecimal} from '../solidity/numbers'

import DocumentItemDetail from '../components/DocumentItemDetail'

// DocumentItem  ------------------------------------------------------------------
class DocumentItem extends Component {
  constructor(props) {
    super(props)
    this.state = { hover: false }
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)
    this.onCheckClick = this.onCheckClick.bind(this)
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
    this.props.onCheckClick(event.target.value, event.target.checked)
  }
  getHighlightedColClass(col) {
    return this.props.order === col && !this.props.document.checked && !this.state.hover ? 'w3-theme-l4' : ''
  }

  render() {
    console.log("DocumentItem.render()")
    const doc = this.props.document
    const docType = (doc.type === -2) ? 'Corr' : 'Inv VAT'
    const openDocumentDetailAnim = 'w3-cell w3-left doc-id' + (this.props.document.spinner || false ? ' request-documentdetail-spinner' : '')
    
    return <div>
        <div className={"w3-row " + (doc.even ? 'div-row-grey' : '') + " " + (this.state.hover ? 'w3-theme-l3' : '') + " " + (doc.checked ? 'row-checked' : '')} 
          onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
        
          <div className="w3-cell w3-left doc-check"><input className="input-checkbox" type="checkbox" name="" value={doc.id} onChange={this.onCheckClick} checked={doc.checked ? 'checked' : ''}/></div>
          <div onClick={ ()=>{this.props.onOpenDetail(doc.id)} }>    
            <div className={openDocumentDetailAnim}><p className='text-ar p-cell whitespace'>{this.props.document.spinner || false ? ('') : (doc.id) }</p></div>
            <div className={"w3-cell w3-left doc-number " + this.getHighlightedColClass('number')}><p className="text-al p-cell whitespace">{doc.number}</p></div>
            <div className={"w3-cell w3-left doc-type " + (doc.type === -1 ? 'div-doc-norm' : 'div-doc-corr')}><p className="text-ac p-cell whitespace">{docType}</p></div>
            <div className={"w3-cell w3-left doc-number " + this.getHighlightedColClass('date')}><p className="text-al p-cell whitespace">{doc.date}</p></div>
            <div className={"w3-cell w3-right doc-val " + this.getHighlightedColClass('excise')}><p className="text-ar p-cell whitespace">{formatDecimal(doc.excise)}</p></div>
            <div className={"w3-cell w3-right doc-val " + this.getHighlightedColClass('brutto')}><p className="text-ar p-cell whitespace">{formatDecimal(doc.brutto)}</p></div>
            <div className={"w3-cell w3-right doc-val " + this.getHighlightedColClass('netto')}><p className="text-ar p-cell whitespace">{formatDecimal(doc.netto)}</p></div>
            <div className={"w3-cell w3-right doc-nip " + this.getHighlightedColClass('custnip')}><p className="text-al p-cell whitespace">{doc.custnip}</p></div>
            <div className={"w3-rest doc-customername1 text-al " + this.getHighlightedColClass('custname1')}><p className="p-cell whitespace" style={{minWidth: "200px"}}>{doc.custname1}</p></div>
          </div>
        </div>
        {(doc.opening || doc.closing) ? (<DocumentItemDetail 
            document={this.props.document} 
            onCloseDetail={(id)=>{this.props.onCloseDetail(id)}}
            articles={this.props.articles}/>) : ('')}
        
      </div>
  }
}

export default DocumentItem