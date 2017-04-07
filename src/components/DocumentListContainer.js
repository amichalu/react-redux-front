import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
  fetchDocumentsIfNeeded, 
  invalidateDocuments, 
  prevPage, 
  nextPage, 
  changeOrder, 
  toogleDocument,
  toogleAllDocuments,
  toogleSpinner,
  openDocument, 
  closeDocument, 
  closeAllDocuments,
  fetchDocumentDetail
 } from '../actions'
import DocumentList from '../components/DocumentList'

class DocumentListContainer extends Component {
  constructor(props) {
    super(props)
    this.handlePageClick = this.handlePageClick.bind(this)
    this.handleRefreshData = this.handleRefreshData.bind(this)
    this.handleOnToogle = this.handleOnToogle.bind(this)
    this.handleOnOpenDetail = this.handleOnOpenDetail.bind(this)
    this.handleCloseAllDocuments = this.handleCloseAllDocuments.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchDocumentsIfNeeded())
  }

  handlePageClick( e, incr ) {
    const { dispatch } = this.props
    if ( incr === -1 && this.props.documents.pageNmb > 0 ) {
      dispatch(prevPage())
      dispatch(invalidateDocuments())
      dispatch(fetchDocumentsIfNeeded())
    }
    if ( incr === 1 ) {
      dispatch(nextPage())
      dispatch(invalidateDocuments())
      dispatch(fetchDocumentsIfNeeded())
    }
  }

  handleOnChangeOrder( order ) {
    const { dispatch } = this.props
    dispatch(changeOrder(order))
    dispatch(invalidateDocuments())
    dispatch(fetchDocumentsIfNeeded())
  }

  handleRefreshData() {
    const { dispatch } = this.props
    dispatch(invalidateDocuments())
    dispatch(fetchDocumentsIfNeeded())
  }

  handleOnToogle(id) {
    const { dispatch } = this.props
    dispatch(toogleDocument(id))
  }

  handleOnOpenDetail(id) {
    const { dispatch } = this.props
    dispatch(toogleSpinner(id))
    dispatch(fetchDocumentDetail(id))
  }  
  handleOnCloseDetail(id) {
    const { dispatch } = this.props
    dispatch(closeDocument(id))
  }  
  handleCloseAllDocuments() {
    const { dispatch } = this.props
    dispatch(closeAllDocuments())    
  }
  handleOnToogleAllDocuments(selectAll) {
    const { dispatch } = this.props
    dispatch(toogleAllDocuments(selectAll))
  }

  // It's a solution how to dispatch the new action as a consequence of another action:
  // First we dispatch TOOGLE_SPINNER, REQUEST_DOCUMENTDETAIL, RECEIVE_DOCUMENTDETAIL through handleOnOpenDetail()
  // and here we check if we received the new document's details
  // and then we dispatch TOOGLE_SPINNER, OPEN_DOCUMENT  
  componentWillReceiveProps(nextProps) {
    console.log( 'DocumentListContainer.componentWillReceiveProps()' )
    const { dispatch } = this.props
    if (this.props.documentDetail.lastUpdated !== nextProps.documentDetail.lastUpdated) {
        // New document's details received so we need turn off the spinner and open document panel
        dispatch(toogleSpinner(nextProps.documentDetail.documentId))
        dispatch(openDocument(nextProps.documentDetail.documentId))
      }
  }

  render() {
    console.log('DocumentListContainer.render() this.props.documents: ', this.props.documents)
    const reloadAnimClass = 'w3-padding-small fa fa-refresh' + ((this.props.documents.isFetching || false) ? ' w3-spin' : '')

    return <div>

          <div className="w3-container">
            <div className="w3-bar">
              <a className="w3-button w3-border w3-round w3-padding-small button-margin button-style" href="#" onClick={(e) => this.handlePageClick(e, -1)}>
                Backward<i className="w3-padding-small fa fa-arrow-left" aria-hidden="true"></i></a>
              <a className="w3-button w3-border w3-round w3-padding-small button-margin button-style" href="#" onClick={(e) => this.handlePageClick(e, 1)}>
                Forward<i className="w3-padding-small fa fa-arrow-right"></i></a>
              <a className="w3-button w3-border w3-round w3-padding-small button-margin button-style" href="#" onClick={this.handleRefreshData}>
                Reload<i className={reloadAnimClass}></i></a>
              <a className="w3-button w3-border w3-round w3-padding-small button-margin button-style" href="#" onClick={this.handleCloseAllDocuments}>
                Close all<i className="w3-padding-small fa fa-compress"></i></a>
            </div>

            <DocumentList 
              documents={this.props.documents}
              documentDetail={this.props.documentDetail}
              onChangeOrder={(i,dir)=>(this.handleOnChangeOrder(i,dir))}
              onToogle={(id)=>(this.handleOnToogle(id))}
              onToogleAllDocuments={(selectAll)=>(this.handleOnToogleAllDocuments(selectAll))}
              onOpenDetail={(id)=>(this.handleOnOpenDetail(id))}
              onCloseDetail={(id)=>(this.handleOnCloseDetail(id))}/>
            <div className="button-margin" style={{color: "#000"}}>Page: {this.props.documents.pageNmb + 1}</div>
          </div>

  </div>;// root div
  }
}

const mapStateToProps = state => {
  return state
}
export default connect(mapStateToProps)(DocumentListContainer)
