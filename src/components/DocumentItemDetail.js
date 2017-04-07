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
//w3-panel w3-border w3-light-grey w3-round-large
//w3-panel w3-light-grey w3-leftbar w3-border-blue
  render() {
    const w3class = "w3-panel w3-light-grey w3-leftbar w3-border-blue"
    return <div className={w3class + " div-detail " + this.state.classNameAnim}>
        <span onClick={this.onClose} className="w3-button w3-display-topright">X</span>
        <div><ul>{this.props.documentDetail.data ? this.renderArticles() : ''}</ul></div>
      </div>
  }

  /*render() {
    return <div className={"div-detail " + this.state.classNameAnim}>DETAIL
        <input type="button" value="Close" onClick={this.onClose}/>
        <div className="w3-sand"><ul>{this.props.documentDetail.data ? this.renderArticles() : ''}</ul></div>
      </div>
  }*/
  
}
//w3-panel w3-sand w3-display-container

export default DocumentItemDetail