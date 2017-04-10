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
    return this.props.articles.items[this.props.document.id].articles.map((art,k) => (      
      <tr key={k}>
        <td>{id++}</td>      
        <td>{art.artname1}</td>
        <td><p className="text-ar art-cell">{art.artprice}</p></td>
        <td>{art.arttaxlabel}</td>
        <td>{art.artunit}</td>
        <td><p className="text-ar art-cell">{art.quantity}</p></td>
        <td><p className="text-ar art-cell">{art.nettovalue}</p></td>
        <td><p className="text-ar art-cell">{art.bruttovalue}</p></td>
      </tr>
    ))
  }
  render() {
    console.log("DocumentItemDetail.render()")
    const w3class = "w3-panel w3-leftbar w3-border-blue"
    return <div className={w3class + " div-detail " + this.state.classNameAnim}>
        <span onClick={this.onClose} className="w3-button w3-display-topright">X</span>

        <table className="w3-table w3-bordered w3-border"><tbody>
          <tr className=""><th>Nr</th><th>Article name</th><th>Price</th><th></th><th></th><th></th><th></th><th></th></tr>
          {this.props.articles.items ? this.renderArticles() : ''}
        </tbody></table>
        

      </div>
  }  
}

export default DocumentItemDetail