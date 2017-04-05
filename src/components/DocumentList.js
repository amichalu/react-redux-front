import React, { Component } from 'react';

import DocumentItem from '../components/DocumentItem'

// DocumentList component  ------------------------------------------------------------------
class DocumentList extends Component {
  constructor() {
    super()
    console.log( 'DocumentList.constructor()')
    //this.onToogleAllDocuments = this.onToogleAllDocuments.bind(this)
  }

  onChangeOrder(col) {
    this.props.onChangeOrder(col);
  }

  getOrderElement(order) {
    const el =  (this.props.documents.order === order ? (this.props.documents.dirOrder === 'asc' ? 1 : 2) : 0)
    if (!el) return ''
    return el === 1 ? <i className="fa fa-sort-amount-asc" style={{ float: "right"}}aria-hidden="true"></i> : <i className="fa fa-sort-amount-desc" style={{ float: "right"}}aria-hidden="true"></i>
  }
  onToogleAllDocuments(event) {
    this.props.onToogleAllDocuments(event.target.checked)
  }

  renderDocument( document, col ) {
    return <DocumentItem 
      key={document.id} 
      document={document}
      documentDetail={this.props.documentDetail}
      order={col}
      onCheckClick={this.props.onToogle}
      onOpenDetail={this.props.onOpenDetail}
      onCloseDetail={this.props.onCloseDetail}/>
  }
  render() {
    console.log("DocumentList.redner()")

    return <div className="doc-list w3-border w3-round">
        <div className="div-row title-row">
          <div className="doc-check div-cell"><input type="checkbox" className="input-checkbox" name="" value="" onClick={(e)=>(this.onToogleAllDocuments(e))}/></div>
          <div className="doc-id div-cell"><p className="text-ar p-cell">ID</p></div>
          <div className="doc-number div-cell" onClick={()=>this.onChangeOrder('number')}><p className="text-al p-cell ">Numer {this.getOrderElement('number')} </p></div>
          <div className="doc-type div-cell"><p className="text-al p-cell">Rodzaj</p></div>
          <div className="doc-number div-cell" onClick={()=>this.onChangeOrder('date')}><p className="text-al p-cell">Data {this.getOrderElement('date')}</p></div>
          <div className="doc-customername1 div-cell text-al" onClick={()=>this.onChangeOrder('custname1')}><p className="p-cell">Kontrahent {this.getOrderElement('custname1')}</p></div>
          <div className="doc-nip div-cell" onClick={()=>this.onChangeOrder('custnip')}><p className="text-al p-cell">NIP {this.getOrderElement('custnip')}</p></div>
          <div className="doc-val div-cell" onClick={()=>this.onChangeOrder('netto')}><p className="text-al p-cell">Netto {this.getOrderElement('netto')}</p></div>
          <div className="doc-val div-cell" onClick={()=>this.onChangeOrder('brutto')}><p className="text-al p-cell">Brutto {this.getOrderElement('brutto')}</p></div>
          <div className="doc-val div-cell" onClick={()=>this.onChangeOrder('excise')}><p className="text-al p-cell">Akcyza {this.getOrderElement('excise')}</p></div>
      </div>
      
    { this.props.documents.items.map( (document, col)=>(this.renderDocument(document, this.props.documents.order)) )} </div>;
  }
}

export default DocumentList
