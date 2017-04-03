import React, { Component } from 'react'

// DocumentItemDetail  ------------------------------------------------------------------
class DocumentItemDetail extends Component {
  constructor(props) {
    super(props)
    console.log("DocumentItemDetail.constructor()");
    this.state = {      
      classNameAnim: props.document.opening ? "doc-opening" : "doc-closing"
    }
    this.onClose = this.onClose.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    //console.log('DocumentItemDetailContainer.componentWillReceiveProps()', nextProps)
    this.setState( {
      classNameAnim: nextProps.document.opening ? "doc-opening" : "doc-closing",
    })
  }

  onClose() {
    this.props.onCloseDetail(this.props.document.id);
  }

  renderArticles() {
    return this.props.documentDetail.data.articles.map((art) => (
    <li key={art.id.toString()}>{art.artname1} {art.artprice} {art.arttaxlabel} {art.artunit} {art.quantity} {art.nettovalue} {art.bruttovalue}</li> ))
  }

  render() {
    return <div className={"div-detail " + this.state.classNameAnim}>DETAIL
        <input type="button" value="Close" onClick={this.onClose}/>
        <div><ul>{this.props.documentDetail.data ? this.renderArticles() : ''}</ul></div>
      </div>
  }
}

export default DocumentItemDetail