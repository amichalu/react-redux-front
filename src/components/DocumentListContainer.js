import React, { Component } from 'react';
import { connect } from 'react-redux'
import spiner from '../images/ripple.svg';

import { 
  fetchDocumentsIfNeeded, 
  invalidateDocuments, 
  prevPage, 
  nextPage, 
  changeOrder, 
  toogleDocument, 
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

  componentWillReceiveProps(nextProps) {
    console.log( 'DocumentListContainer.componentWillReceiveProps()' )
    const { dispatch } = this.props
    if (nextProps.documentDetail.documentId 
      && (this.props.documentDetail.documentId !== nextProps.documentDetail.documentId)) {
        dispatch(toogleSpinner(nextProps.documentDetail.documentId))
        dispatch(openDocument(nextProps.documentDetail.documentId))
      }
  }

  render() {
    console.log('DocumentListContainer.render() this.props.documents: ', this.props.documents)
    const isFetching = this.props.documents.isFetching || false
    return <div>
              <div style={{float: "left", margin: ".2em"}}>
                <div className="div-button" style={{color: "white", backgroundColor: "lightslategrey"}} 
                  onClick={(e) => this.handlePageClick(e, -1)}>❮ Previous</div>
                <div className="div-button" style={{color: "white", backgroundColor: "lightslategrey"}} 
                  onClick={(e) => this.handlePageClick(e, 1)}>Next ❯</div>
                <div className="div-button" style={{color: "white", backgroundColor: "indianred"}} 
                  onClick={this.handleRefreshData}>Reload {isFetching ? (<img src={spiner} alt=''/>) : ('')}</div>
                <div className="div-button" style={{color: "white", backgroundColor: "lightslategrey"}} 
                  onClick={this.handleCloseAllDocuments}>Close all</div>                  
                <div className="div-button" style={{color: "#000"}}>Page: {this.props.documents.pageNmb + 1}</div>
              </div>

              <DocumentList 
                documents={this.props.documents}
                documentDetail={this.props.documentDetail}
                onChangeOrder={(i,dir)=>(this.handleOnChangeOrder(i,dir))}
                onToogle={(id)=>(this.handleOnToogle(id))}
                onOpenDetail={(id)=>(this.handleOnOpenDetail(id))}
                onCloseDetail={(id)=>(this.handleOnCloseDetail(id))}/>
          </div>;   
  }
}

const mapStateToProps = state => {
  return state
}
export default connect(mapStateToProps)(DocumentListContainer)
