import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
  fetchDocumentsIfNeeded, 
  invalidateDocuments, 
  prevPage, 
  //changePage,
  nextPage, 
  changeOrder, 
  toogleDocument,
  toogleAllDocuments,
  toogleSpinner,
  closeDocument, 
  closeAllDocuments,
  fetchDocumentDetail
 } from '../actions'
import DocumentList from '../components/DocumentList'

class DocumentListContainer extends Component {
  constructor(props) {
    super(props)
    this.handleOnOpenDetail = this.handleOnOpenDetail.bind(this)
  }

  componentDidMount() {
    this.props.fetchDocumentsIfNeeded();
  }

  handleOnOpenDetail(id) {
    const { dispatch } = this.props
    var alreadyOpened = false;
    this.props.documents.items.forEach((doc)=>{
      if (doc.id === id && doc.opening) {
        alreadyOpened = true
        return
      }
    })
    if (!alreadyOpened) {
      dispatch(toogleSpinner(id))
      dispatch(fetchDocumentDetail(id))
    }
  }  
 



  render() {
    console.log('DocumentListContainer.render()')
    const reloadAnimClass = 'w3-padding-small fa fa-refresh' + ((this.props.documents.isFetching || false) ? ' w3-spin' : '')
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
              <div className="button-margin w3-right w3-padding-small">Page: {this.props.documents.pageNmb + 1}</div>
            </div>

            <DocumentList 
              documents={this.props.documents}
              articles={this.props.articles}
              onChangeOrder={(i,dir)=>(this.props.onChangeOrder(i,dir))}
              onToogle={(id)=>(this.props.onToggle(id))}
              onToogleAllDocuments={(selectAll)=>(this.props.onToggleAllDocuments(selectAll))}
              onOpenDetail={(id)=>(this.handleOnOpenDetail(id))}
              onCloseDetail={(id)=>(this.props.onCloseDetail(id))}/>
            
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
      dispatch(toogleDocument(id))
    },
    onToggleAllDocuments: ( selectAll ) => {
      dispatch(toogleAllDocuments(selectAll))
    },
    onCloseDetail: (id) => {
      dispatch(closeDocument(id))
    },
    onCloseAllDocuments: () => {
      dispatch(closeAllDocuments())    
    }
  }
}

const mapStateToProps = state => {
  return state
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentListContainer)
