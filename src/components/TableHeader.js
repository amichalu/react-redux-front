import React, { Component } from 'react';
import {AppContext} from './app-context';
import { connect } from 'react-redux'
import ReactGA from 'react-ga';

import { 
  changeOrder, 
  toggleAllDocuments,
  invalidateDocuments,
  fetchDocumentsIfNeeded
 } from '../actions'

// TableHeader component  ------------------------------------------------------------------
class TableHeader extends Component {

  constructor(props) {
    super(props)
    this.onChangeOrder = this.onChangeOrder.bind(this)
    this.onToogleAllDocuments = this.onToogleAllDocuments.bind(this)
  }

  onChangeOrder(col) {
    ReactGA.event({
      category: 'Documents',
      action: 'Change order: ' + col,
      label: 'Sorting'
    });

    this.props.dispatch(changeOrder(col))
    this.props.dispatch(invalidateDocuments())
    this.props.dispatch(fetchDocumentsIfNeeded())
  }

  getOrderElement(order) {
    const el =  (this.props.documents.order === order ? (this.props.documents.dirOrder === 'asc' ? 1 : 2) : 0)
    if (!el) return ''
    return el === 1 ? <i className="fa fa-sort-amount-asc w3-padding-small" style={{ float: "right"}}aria-hidden="true"></i> : <i className="fa fa-sort-amount-desc w3-padding-small" style={{ float: "right"}}aria-hidden="true"></i>
  }

  onToogleAllDocuments(event) {
    ReactGA.event({
      category: 'Documents',
      action: 'Toggle all documents',
      label: ''
    });

    this.props.dispatch(toggleAllDocuments(event.target.checked))
  }

  getHighlightedColClass(col) {
    return this.props.documents.order === col ? 'w3-theme-d2' : ''
  }
  render() {
    console.log("DocumentList.render()")
    const reloadAnimClass = 'w3-padding-small fa fa-refresh' + (this.props.documents && this.props.documents.isFetching ? ' w3-spin' : '')
    
    let theme = this.context.theme;
    const mainClass = theme.thead + ' w3-row  w3-text-white'

    return  <div className={mainClass}>
              <div className="w3-col w3-left doc-check"><input type="checkbox" className="input-checkbox" name="" value="" checked={this.props.documents.allSelectedItems} onChange={(e)=>(this.onToogleAllDocuments(e))}/></div>
              <div className="w3-col w3-left doc-id"><p className="text-ar p-cell">id</p></div>
              <div className="hover-div"><div className={"w3-col w3-left doc-number " + this.getHighlightedColClass('number')} onClick={()=>this.onChangeOrder('number')}><p className="text-al p-cell">Inv Nmb {this.getOrderElement('number')} </p></div></div>
              <div className="w3-col w3-left doc-type"><p className="text-ac p-cell">Inv Type</p></div>
              <div className="hover-div"><div className={"w3-col w3-left doc-number " + this.getHighlightedColClass('date')} onClick={()=>this.onChangeOrder('date')}><p className="text-al p-cell">Date {this.getOrderElement('date')}</p></div></div>
              <div className="hover-div"><div className={"w3-col w3-right doc-val " + this.getHighlightedColClass('excise')} onClick={()=>this.onChangeOrder('excise')}><p className="text-al p-cell">Excise {this.getOrderElement('excise')}</p></div></div>
              <div className="hover-div"><div className={"w3-col w3-right doc-val " + this.getHighlightedColClass('brutto')} onClick={()=>this.onChangeOrder('brutto')}><p className="text-al p-cell">Brutto {this.getOrderElement('brutto')}</p></div></div>
              <div className="hover-div"><div className={"w3-col w3-right doc-val " + this.getHighlightedColClass('netto')} onClick={()=>this.onChangeOrder('netto')}><p className="text-al p-cell">Netto {this.getOrderElement('netto')}</p></div></div>
              <div className="hover-div"><div className={"w3-col w3-right doc-nip " + this.getHighlightedColClass('custnip')} onClick={()=>this.onChangeOrder('custnip')}><p className="text-al p-cell">VAT ID {this.getOrderElement('custnip')}</p></div></div>
              <div className="hover-div"><div className={"w3-rest text-al " + this.getHighlightedColClass('custname1')} onClick={()=>this.onChangeOrder('custname1')}><p className="p-cell">Customer {this.getOrderElement('custname1')}</p></div></div>
            </div>;
  }
}

TableHeader.contextType = AppContext;

export default connect(
  (state) => {
    return {
      documents: state.documents
    }}
)(TableHeader)
