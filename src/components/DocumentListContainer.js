import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
  fetchDocumentsIfNeeded, 
  invalidateDocuments, 
  prevPage, 
  nextPage, 
  changeOrder, 
  toggleDocument,
  toggleAllDocuments,
  toggleSpinner,
  closeDocument, 
  closeAllDocuments,
  fetchDocumentDetail
 } from '../actions'
import DocumentList from '../components/DocumentList'

class DocumentListContainer extends Component {

  componentDidMount() {
    this.props.fetchDocumentsIfNeeded();
  }

  render() {
    console.log('DocumentListContainer.render()')

    const reloadAnimClass = 'w3-padding-small fa fa-refresh' + (this.props.documents && this.props.documents.isFetching ? ' w3-spin' : '')

    return <div>

          <div className="w3-container">
            <div className="w3-bar">
              <a className="w3-button w3-border w3-round w3-padding-small button-margin button-style" href="#" onClick={(e) => this.props.onPageClick(e, -1)}>
                Backward<i className="w3-padding-small fa fa-arrow-left" aria-hidden="true"></i></a>
              <a className="w3-button w3-border w3-round w3-padding-small button-margin button-style" href="#" onClick={(e) => this.props.onPageClick(e, 1)}>
                Forward<i className="w3-padding-small fa fa-arrow-right"></i></a>
              <a className="w3-button w3-border w3-round w3-padding-small button-margin button-style" href="#" onClick={this.props.onRefreshData}>
                Reload<i className={reloadAnimClass}></i></a>
              <a className="w3-button w3-border w3-round w3-padding-small button-margin button-style" href="#" onClick={this.props.onCloseAllDocuments}>
                Close all<i className="w3-padding-small fa fa-compress"></i></a>
              { this.props.documents.isFetchError ? <div className="button-margin w3-left w3-padding-small error_msg">Oops, no response from the server or an unexpected format received</div> : '' }
              <div className="button-margin w3-right w3-padding-small">Page: {this.props.documents.pageNmb + 1}</div>
            </div>

            <DocumentList 
              documents={this.props.documents}
              articles={this.props.articles}
              onChangeOrder={(i,dir)=>(this.props.onChangeOrder(i,dir))}
              onToggle={(id)=>(this.props.onToggle(id))}
              onToggleAllDocuments={(selectAll)=>(this.props.onToggleAllDocuments(selectAll))}
              onOpenDetail={this.props.onOpenDetail}
              onCloseDetail={this.props.onCloseDetail}/>
            
          </div>

  </div>;// root div
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {

    fetchDocumentsIfNeeded: () => {
      dispatch(fetchDocumentsIfNeeded())
    },
    onPageClick: (e, incr) => {
      if ( incr === -1 ) {
        dispatch(prevPage())
        dispatch(invalidateDocuments())
        dispatch(fetchDocumentsIfNeeded())
      }
      if ( incr === 1 ) {
        dispatch(nextPage())
        dispatch(invalidateDocuments())
        dispatch(fetchDocumentsIfNeeded())
      }
    },
    onChangeOrder: ( order ) => {    
      dispatch(changeOrder(order))
      dispatch(invalidateDocuments())
      dispatch(fetchDocumentsIfNeeded())
    },
    onRefreshData: () => {
      dispatch(invalidateDocuments())
      dispatch(fetchDocumentsIfNeeded())
    },
    onToggle: ( id ) => {
      dispatch(toggleDocument(id))
    },
    onToggleAllDocuments: ( selectAll ) => {
      dispatch(toggleAllDocuments(selectAll))
    },
    onCloseDetail: (id) => {
      dispatch(closeDocument(id))
    },
    onCloseAllDocuments: () => {
      dispatch(closeAllDocuments())    
    },
    onOpenDetail: (id) => {
      dispatch(fetchDocumentDetail(id))
    }
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
    documents: state.documents
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentListContainer)
