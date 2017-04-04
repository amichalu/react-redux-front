import React, { Component } from 'react'
import { connect } from 'react-redux'

//import spiner from '../images/ripple.svg'
import spiner from '../images/reload.svg'

import next from '../images/ic_keyboard_arrow_right_black_24px.svg'
import prev from '../images/ic_keyboard_arrow_left_black_24px.svg'
import refresh from '../images/ic_refresh_black_24px.svg'


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

  //<i className="material-icons md-24" style={{ marginLeft: "5px"}}>fast_forward</i>
  //<img src={spiner} style={{ margin: "0px 5px"}} width="24" height="24" alt=''/>
  //<img style={{ margin: "0px 5px"}} src={refresh}/>
  //{isFetching ? ('....') : ('')}
  render() {
    console.log('DocumentListContainer.render() this.props.documents: ', this.props.documents)
    //const isFetching = this.props.documents.isFetching || false
    const reloadAnimClass = 'w3-padding-small fa fa-refresh' + ((this.props.documents.isFetching || false) ? ' w3-spin' : '')

    return <div> 
          
      <div className="w3-container">
          <div className="w3-bar">

            <a className="w3-button w3-border w3-round w3-padding-small button-margin" href="#" onClick={(e) => this.handlePageClick(e, -1)}>
              Backward<i className="w3-padding-small fa fa-arrow-left" aria-hidden="true"></i></a>
              
            <a className="w3-button w3-border w3-round w3-padding-small button-margin" href="#" onClick={(e) => this.handlePageClick(e, 1)}>
              Forward<i className="w3-padding-small fa fa-arrow-right"></i></a>
            
            <a className="w3-button w3-border w3-round w3-padding-small button-margin" href="#" onClick={this.handleRefreshData}>
              Reload<i className={reloadAnimClass}></i></a>

            <a className="w3-button w3-border w3-round w3-padding-small button-margin" href="#" onClick={this.handleCloseAllDocuments}>
              Close all<i className="w3-padding-small fa fa-compress"></i></a>

            <div className="div-button button-margin" style={{color: "#000"}}>Page: {this.props.documents.pageNmb + 1}</div>
          </div>

          <DocumentList 
            documents={this.props.documents}
            documentDetail={this.props.documentDetail}
            onChangeOrder={(i,dir)=>(this.handleOnChangeOrder(i,dir))}
            onToogle={(id)=>(this.handleOnToogle(id))}
            onOpenDetail={(id)=>(this.handleOnOpenDetail(id))}
            onCloseDetail={(id)=>(this.handleOnCloseDetail(id))}/>
      </div>
  </div>;   
  }
}

const mapStateToProps = state => {
  return state
}
export default connect(mapStateToProps)(DocumentListContainer)
