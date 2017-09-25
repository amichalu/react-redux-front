import React, { Component } from 'react';

import DocumentItem from '../components/DocumentItem'

// DocumentList component  ------------------------------------------------------------------
class DocumentList extends Component {

  onChangeOrder(col) {
    this.props.onChangeOrder(col);
  }

  getOrderElement(order) {
    const el =  (this.props.documents.order === order ? (this.props.documents.dirOrder === 'asc' ? 1 : 2) : 0)
    if (!el) return ''
    return el === 1 ? <i className="fa fa-sort-amount-asc w3-padding-small" style={{ float: "right"}}aria-hidden="true"></i> : <i className="fa fa-sort-amount-desc w3-padding-small" style={{ float: "right"}}aria-hidden="true"></i>
  }
  onToogleAllDocuments(event) {
    this.props.onToggleAllDocuments(event.target.checked)
  }

  renderDocument( document, col ) {
    return <DocumentItem 
      key={document.id} 
      document={document}
      articles={this.props.articles}
      order={col}
      onCheckClick={this.props.onToggle}
      onOpenDetail={this.props.onOpenDetail}
      onCloseDetail={this.props.onCloseDetail}/>
  }
  getHighlightedColClass(col) {
    return this.props.documents.order === col ? 'w3-theme-d2' : ''
  }
  render() {
    console.log("DocumentList.render()")
    const reloadAnimClass = 'w3-padding-small fa fa-refresh' + (this.props.documents && this.props.documents.isFetching ? ' w3-spin' : '')

    return <div>
      <div className="w3-container">
        <div className="w3-bar">
          <a className="w3-button w3-border w3-round w3-padding-small button-margin button-style" href="#" onClick={(e) => this.props.onPageClick(e, -1, this.props.documents.pageNmb)}>
            Backward<i className="w3-padding-small fa fa-arrow-left" aria-hidden="true"></i></a>
          <a className="w3-button w3-border w3-round w3-padding-small button-margin button-style" href="#" onClick={(e) => this.props.onPageClick(e, 1, this.props.documents.pageNmb)}>
            Forward<i className="w3-padding-small fa fa-arrow-right"></i></a>
          <a className="w3-button w3-border w3-round w3-padding-small button-margin button-style" href="#" onClick={this.props.onRefreshData}>
            Reload<i className={reloadAnimClass}></i></a>
          <a className="w3-button w3-border w3-round w3-padding-small button-margin button-style" href="#" onClick={this.props.onCloseAllDocuments}>
            Close all<i className="w3-padding-small fa fa-compress"></i></a>
          { this.props.documents.isFetchError ? <div className="button-margin w3-left w3-padding-small error_msg">Oops, no response from the server or an unexpected format received</div> : '' }
          <div className="button-margin w3-right w3-padding-small">Page: {this.props.documents && this.props.documents.isFetching ? '..' : this.props.documents.pageNmb + 1}</div>
        </div>

        <div className="w3-border w3-round w3-medium">
            <div className="w3-row w3-theme-d1 w3-text-white"> {/* table header */}
              <div className="w3-col w3-left doc-check"><input type="checkbox" className="input-checkbox" name="" value="" checked={this.props.documents.allSelectedItems} onClick={(e)=>(this.onToogleAllDocuments(e))}/></div>
              <div className="w3-col w3-left doc-id"><p className="text-ar p-cell">id</p></div>
              <div className="hover-div"><div className={"w3-col w3-left doc-number " + this.getHighlightedColClass('number')}  onClick={()=>this.onChangeOrder('number')}><p className="text-al p-cell">Inv Nmb {this.getOrderElement('number')} </p></div></div>
              <div className="w3-col w3-left doc-type"><p className="text-ac p-cell">Inv Type</p></div>
              <div className="hover-div"><div className={"w3-col w3-left doc-number " + this.getHighlightedColClass('date')} onClick={()=>this.onChangeOrder('date')}><p className="text-al p-cell">Date {this.getOrderElement('date')}</p></div></div>
              <div className="hover-div"><div className={"w3-col w3-right doc-val " + this.getHighlightedColClass('excise')} onClick={()=>this.onChangeOrder('excise')}><p className="text-al p-cell">Excise {this.getOrderElement('excise')}</p></div></div>
              <div className="hover-div"><div className={"w3-col w3-right doc-val " + this.getHighlightedColClass('brutto')} onClick={()=>this.onChangeOrder('brutto')}><p className="text-al p-cell">Brutto {this.getOrderElement('brutto')}</p></div></div>
              <div className="hover-div"><div className={"w3-col w3-right doc-val " + this.getHighlightedColClass('netto')} onClick={()=>this.onChangeOrder('netto')}><p className="text-al p-cell">Netto {this.getOrderElement('netto')}</p></div></div>
              <div className="hover-div"><div className={"w3-col w3-right doc-nip " + this.getHighlightedColClass('custnip')} onClick={()=>this.onChangeOrder('custnip')}><p className="text-al p-cell">VAT ID {this.getOrderElement('custnip')}</p></div></div>
              <div className="hover-div"><div className={"w3-rest text-al " + this.getHighlightedColClass('custname1')} onClick={()=>this.onChangeOrder('custname1')}><p className="p-cell">Customer {this.getOrderElement('custname1')}</p></div></div>
            </div>
            {/* list of documents */}
            { this.props.documents.items.map( (document)=>(this.renderDocument(document, this.props.documents.order)) )}
        </div>
    </div>
  </div>;
  }
}

export default DocumentList
