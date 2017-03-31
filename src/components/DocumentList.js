import React, { Component } from 'react';

import DocumentItem from '../components/DocumentItem'
import {mylog} from '../solidity/apputils';

// DocumentList component  ------------------------------------------------------------------
class DocumentList extends Component {
  constructor() {
    super()
    mylog( 'DocumentList.constructor()')
  }

  shouldComponentUpdate( nextProps, nextState ) {
    mylog( 'shouldComponentUpdate() ? ', ((nextProps.documents.lastUpdated !== this.props.documents.lastUpdated) || (nextProps.opened.opened !== this.props.opened.opened )) )
    return ((nextProps.documents.lastUpdated !== this.props.documents.lastUpdated) || (nextProps.opened.opened !== this.props.opened.opened ))
  }

  // onCheckClick(id) {
  //   console.log( 'DocumentList.onCheck(): ', id)
  //   this.props.onToogle(id)
  // }

  onChangeOrder(col) {
    this.props.onChangeOrder(col);
  }

  getDir(order) {
    return this.props.documents.order === order ? this.props.documents.dirOrder === 'asc' ? 'A' : 'V' : '';
  }

  renderDocument( document, col ) {
    return <DocumentItem 
      key={document.id} 
      document={document} 
      order_col={col}
      onCheckClick={this.props.onToogle}
      opened={this.props.opened}
      onRowClick={this.props.onRowClick}/>;
  }
  render() {
    mylog("DocumentList.redner()");

    return <div className="doc-list">
        <div className="div-row title-row">
          <div className="doc-check div-cell"><input type="checkbox" name="" value=""/></div>
          <div className="doc-id div-cell"><p className="text-ar p-cell">ID</p></div>
          <div className="doc-number div-cell" onClick={()=>this.onChangeOrder('number')}><p className="text-al p-cell">Numer { this.getDir('number') }</p></div>
          <div className="doc-type div-cell"><p className="text-al p-cell">Rodzaj</p></div>
          <div className="doc-number div-cell" onClick={()=>this.onChangeOrder('date')}><p className="text-al p-cell">Data { this.getDir('date') }</p></div>
          <div className="doc-customername1 div-cell text-al " onClick={()=>this.onChangeOrder('custname1')}><p className="p-cell">Kontrahent { this.getDir('custname1') }</p></div>
          <div className="doc-nip div-cell"><p className="text-al p-cell">NIP</p></div>
          <div className="doc-val div-cell" onClick={()=>this.onChangeOrder('netto')}><p className="text-al p-cell">Netto { this.getDir('netto') }</p></div>
          <div className="doc-val div-cell" onClick={()=>this.onChangeOrder('brutto')}><p className="text-al p-cell">Brutto { this.getDir('brutto') }</p></div>
          <div className="doc-val div-cell"><p className="text-al p-cell">Akcyza</p></div>
      </div>
      
    { this.props.documents.items.map( (document,col)=>(this.renderDocument(document,this.props.documents.order)) )} </div>;
  }
}

export default DocumentList
