import React, { Component } from 'react'
import { connect } from 'react-redux'

import ReactGA from 'react-ga';

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

ReactGA.initialize('UA-105506825-2');

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
        
        ReactGA.event({
          category: 'Navigation',
          action: 'Prev page',
          label: 'Top navigation'
        });
      }
      if ( incr === 1 ) {
        dispatch(nextPage())
        dispatch(invalidateDocuments())
        dispatch(fetchDocumentsIfNeeded())

        ReactGA.event({
          category: 'Navigation',
          action: 'Next page',
          label: 'Top navigation'
        });
        
      }
    },
    onChangeOrder: ( order ) => {    
      dispatch(changeOrder(order))
      dispatch(invalidateDocuments())
      dispatch(fetchDocumentsIfNeeded())

      ReactGA.event({
        category: 'Documents',
        action: 'Change order: ' + order,
        label: 'Sorting'
      });

    },
    onRefreshData: () => {
      dispatch(invalidateDocuments())
      dispatch(fetchDocumentsIfNeeded())

      ReactGA.event({
        category: 'Navigation',
        action: 'Refresh',
        label: 'Top navigation'
      });
      
    },
    onToggle: ( id ) => {
      dispatch(toggleDocument(id))

      ReactGA.event({
        category: 'Documents',
        action: 'Toggle document',
        label: ''
      });
      
    },
    onToggleAllDocuments: ( selectAll ) => {
      dispatch(toggleAllDocuments(selectAll))

      ReactGA.event({
        category: 'Documents',
        action: 'Toggle all documents',
        label: ''
      });


    },
    onCloseDetail: (id) => {
      dispatch(closeDocument(id))

      ReactGA.event({
        category: 'Document',
        action: 'Close detail',
        label: 'Document detail'
      });
      
    },
    onCloseAllDocuments: () => {
      dispatch(closeAllDocuments())    

      ReactGA.event({
        category: 'Document',
        action: 'Close all documents',
        label: 'Document detail'
      });
      
    },
    onOpenDetail: (id) => {
      dispatch(fetchDocumentDetail(id))

      ReactGA.event({
        category: 'Document',
        action: 'Open detail',
        label: 'Document detail'
      });
      
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
