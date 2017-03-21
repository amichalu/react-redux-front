import React, { Component } from 'react';

import DocumentItem from '../components/DocumentItem'
import {mylog} from '../solidity/apputils';

// DocumentList component  ------------------------------------------------------------------
class DocumentList extends Component {
  constructor(props) {
    super(props);
    mylog("DocumentList.constructor()");
    this.onChange = this.onChangeOrder.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.order = {
      dir: 'asc',
      col: 'number'
    }
    this.checked = [];
    this.state = { 
      documents: this.prepareDocuments( props.documents.items ),
      changeOrder: props.onChangeOrder
    };
  }

  componentDidMount() {
    mylog("DocumentList.componentDidMount()");
  }

  componentWillReceiveProps(nextProps) {
    mylog("DocumentList.componentWillReceiveProps()");
    mylog('prepareDocuments(nextProps.documents.items) => ', this.prepareDocuments(nextProps.documents.items)); // TO JEST CZARY MARY !!!!!
  }

  shouldComponentUpdate( nextProps, nextState ) {
    mylog( 'shouldComponentUpdate() ? ', nextProps.documents.lastUpdated !== this.props.documents.lastUpdated )
    return (nextProps.documents.lastUpdated !== this.props.documents.lastUpdated)
  }

  prepareDocuments( docs ) {
    if ( typeof docs !== 'undefined' ) docs.forEach((doc)=>{ doc.checked = this.checked[doc.id] || false });
    return docs;
  }

  onCheck( id, checked ) {
    checked ? this.checked[id] = checked : delete(this.checked[id]);
  }

  onChangeOrder(col) {
    this.order.dir = this.order.dir === 'asc' ? 'desc' : 'asc';
    this.order.col = col;
    this.state.changeOrder.call(this, this.order);
  }

  getDir( colDir ) {
    const diri = this.order.dir;
    const coli = this.order.col;
    return coli === colDir ? diri === 'asc' ? 'A' : 'V' : '';
  }

  renderDocument(document, col) {
    return <DocumentItem key={document.id} document={document} order_col={col} on_check_click={this.onCheck}/>;
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
      
    { this.props.documents.items ? this.props.documents.items.map((document,col)=>(this.renderDocument(document,this.order.col))) : ''} </div>;
  }
}

export default DocumentList
