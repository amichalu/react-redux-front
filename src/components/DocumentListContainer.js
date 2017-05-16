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

    return <DocumentList 
              documents={this.props.documents}
              articles={this.props.articles}
              onPageClick={this.props.onPageClick}
              onRefreshData={this.props.onRefreshData}
              onCloseAllDocuments={this.props.onCloseAllDocuments}
              onChangeOrder={(i,dir)=>(this.props.onChangeOrder(i,dir))}
              onToggle={(id)=>(this.props.onToggle(id))}
              onToggleAllDocuments={(selectAll)=>(this.props.onToggleAllDocuments(selectAll))}
              onOpenDetail={this.props.onOpenDetail}
              onCloseDetail={this.props.onCloseDetail}/>
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
