import React, { Component } from 'react';
import {AppContext} from './app-context';
import { connect } from 'react-redux'
import classNames from 'classnames'
import '@fortawesome/fontawesome-free/css/all.css'

import { 
  fetchDocumentsIfNeeded, 
  invalidateDocuments, 
  prevPage, 
  nextPage, 
  closeAllDocuments,
 } from '../actions'

// TableNavigation component  ------------------------------------------------------------------
class TableNavigation extends Component {

  constructor(props) {
    super(props)

    this.onPrevPageClick = () => {
      this.props.dispatch(prevPage())
      this.refreshData()
    }

    this.onNextPageClick = () => {  
      this.props.dispatch(nextPage())
      this.refreshData()
    }
    
    this.onCloseAllDocuments = () => {  
      this.props.dispatch(closeAllDocuments())
    }
  
    this.onRefreshClick = () => {
      this.refreshData()
    }

    this.refreshData = () => {
      this.props.dispatch(invalidateDocuments())
      this.props.dispatch(fetchDocumentsIfNeeded())
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchDocumentsIfNeeded())
  }

  render() {
    console.log("TableNavigation.render()")

    const reloadAnimClass = 'w3-padding-small fas fa-sync' + (this.props.documents && this.props.documents.isFetching ? ' w3-spin' : '')

    const btnStyle = classNames(
      'w3-button w3-border w3-round w3-padding-small button-margin button-style',
      { 'button-style-dark': !this.context.lightThemeMode }
    )

    return <div>
          <div className="w3-bar">
            <a className={btnStyle} href="#" onClick={this.onPrevPageClick}>
              Backward<i className="w3-padding-small fas fa-arrow-left" aria-hidden="true"></i></a>

            <a className={btnStyle} href="#" onClick={this.onNextPageClick}>
              Forward<i className="w3-padding-small fas fa-arrow-right"></i></a>

            <a className={btnStyle} href="#" onClick={this.onRefreshClick}>
              Reload<i className={reloadAnimClass}></i></a>

            <a className={btnStyle} href="#" onClick={this.onCloseAllDocuments}>
              Close all<i className="w3-padding-small fas fa-window-close"></i></a>

            { this.props.documents.isFetchError ? <div className="button-margin w3-left w3-padding-small error_msg">Oops, no response from the server or an unexpected format received</div> : '' }
            
            <div className="button-margin w3-right w3-padding-small">Page: {this.props.documents && this.props.documents.isFetching ? '..' : this.props.documents.pageNmb + 1}</div>
          </div>
      </div>
  }
}

TableNavigation.contextType = AppContext;

export default connect(
  (state) => {
    return {
      documents: state.documents
    }}
)(TableNavigation)
