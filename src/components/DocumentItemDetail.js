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
    var id = 1
    return this.props.documentDetail.data.articles.map((art) => (      
      <tr key={art.id.toString()}>
        <td>{id++}</td>      
        <td>{art.artname1}</td>
        <td>{art.artprice}</td>
        <td>{art.arttaxlabel}</td>
        <td>{art.artunit}</td>
        <td>{art.quantity}</td>
        <td>{art.nettovalue}</td>
        <td>{art.bruttovalue}</td>
      </tr>
    ))
  }
  render() {
    const w3class = "w3-panel w3-light-grey w3-leftbar w3-border-blue"
    return <div className={w3class + " div-detail " + this.state.classNameAnim}>
        <span onClick={this.onClose} className="w3-button w3-display-topright">X</span>

        <table className="w3-table-all w3-card-2">
        <tr><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr>
        {this.props.documentDetail.data ? this.renderArticles() : ''}
        </table>

      </div>
  }  
}

export default DocumentItemDetail