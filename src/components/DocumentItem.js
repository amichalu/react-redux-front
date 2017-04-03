import React, { Component } from 'react';
import {mylog} from '../solidity/apputils';
import {formatDecimal} from '../solidity/numbers';

import DocumentItemDetail from '../components/DocumentItemDetail'

// DocumentItem  ------------------------------------------------------------------
class DocumentItem extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false }
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onCheckClick = this.onCheckClick.bind(this);
  };
  componentWillReceiveProps(nextProps) {
    console.log( 'DocumentItem.componentWillReceiveProps()' )
  };

  onMouseEnterHandler() {
    this.setState({ hover: true })
  };
  onMouseLeaveHandler() {
    this.setState({ hover: false });
  };

  onCheckClick(event) {
    this.props.onCheckClick(event.target.value, event.target.checked)
  }
  onClose(id) {
    
  }
  
  //<div className="doc-id">{ doc.opening ? 'opening' : ''} { doc.closing ? 'closing' : ''}</div>
  render() {
    mylog("DocumentItem.render(): ");
    var doc = this.props.document;
    var docType = (doc.type === -2) ? 'Kor' : 'Fak VAT';

    return <div>
        <div className={"div-row " + (doc.even ? 'div-row-grey' : '') + " " + (this.state.hover ? 'row-hover' : '') + " " + (doc.checked ? 'row-checked' : '')} 
        onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
        
          <div className="doc-check div-cell"><input type="checkbox" name="" value={doc.id} onChange={this.onCheckClick} checked={doc.checked ? 'checked' : ''}/></div>
          <div onClick={ ()=>{this.props.onOpenDetail(doc.id)} }>
          <div className="doc-id div-cell"><p className="text-ar p-cell">{doc.id}</p></div>
          <div className={"doc-number div-cell " + (this.state.col === 'number' && !doc.checked && !this.state.hover ? 'col-highlighted' : '')}><p className="text-al p-cell">{doc.number}</p></div>
          <div className={"doc-type div-cell " + (doc.type === -1 ? 'div-doc-norm' : 'div-doc-corr')}><p className="text-al p-cell">{docType}</p></div>
          <div className={"doc-number div-cell " + (this.state.col === 'date'  && !doc.checked && !this.state.hover ? 'col-highlighted' : '')}><p className="text-al p-cell">{doc.date}</p></div>
          <div className={"doc-customername1 div-cell text-al " + (this.state.col === 'custname1' && !doc.checked && !this.state.hover ? 'col-highlighted' : '')}><p className="p-cell">{doc.custname1}</p></div>
          <div className="doc-nip div-cell"><p className="text-al p-cell">{doc.custnip}</p></div>
          <div className={"doc-val div-cell " + (this.state.col === 'netto' && !doc.checked && !this.state.hover ? 'col-highlighted' : '')}><p className="text-ar p-cell">{formatDecimal(doc.netto)}</p></div>
          <div className={"doc-val div-cell " + (this.state.col === 'brutto' && !doc.checked && !this.state.hover ? 'col-highlighted' : '')}><p className="text-ar p-cell">{formatDecimal(doc.brutto)}</p></div>
          <div className="doc-val div-cell"><p className="text-ar p-cell">{formatDecimal(doc.excise)}</p></div>
          </div>
        </div>
        {(doc.opening || doc.closing) ? (<DocumentItemDetail document={this.props.document} onCloseDetail={(id)=>{this.props.onCloseDetail(id)}}/>) : ('')}
        
      </div>;
  }
}

export default DocumentItem