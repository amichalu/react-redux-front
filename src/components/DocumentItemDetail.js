import React, { Component } from 'react'
import {formatDecimal} from '../solidity/numbers'

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
        <td><p className="text-ar art-cell">{formatDecimal(art.artprice)}</p></td>
        <td>{art.arttaxlabel}</td>
        <td>{art.artunit}</td>
        <td><p className="text-ar art-cell">{formatDecimal(art.quantity)}</p></td>
        <td><p className="text-ar art-cell">{formatDecimal(art.nettovalue)}</p></td>
        <td><p className="text-ar art-cell">{formatDecimal(art.bruttovalue)}</p></td>
      </tr>
    ))
  }

  renderInvFooter() {

    var tBrutto = 0;
    var tNetto = 0;

    const articles = this.props.articles.items[this.props.document.id].articles
    for (var i = 0; i < articles.length; i++) {
      tBrutto += parseFloat(articles[i].bruttovalue)
      tNetto += parseFloat(articles[i].nettovalue)
    }

    return <table className="w3-table w3-striped">
        <tr><th className="w3-right-align w3-padding-small">Total Netto</th><th className="w3-right-align w3-padding-small">Total Brutto</th></tr>
        <tr><td className="w3-right-align w3-padding-small">{formatDecimal(tNetto)}</td><td className="w3-right-align w3-padding-small">{formatDecimal(tBrutto)}</td></tr>
      </table>;    
  }

  render() {
    console.log("DocumentItemDetail.render()")
    
    const d = this.props.document
    return <div className={"w3-card w3-leftbar w3-border-grey div-detail " + this.state.classNameAnim}>
        <span onClick={this.onClose} className="w3-button w3-display-topright">x</span>

        <header className="w3-container w3-amber">
          <h5>Invoice Nmb: {d.number}</h5>
        </header>

        <div className="w3-container w3-padding-small">

          <div className="w3-cell-row">

            <div className="w3-container w3-cell w3-mobile w3-padding-small" style={{width: "50%"}}>
              <form className="w3-container w3-padding-small">

                <div className="w3-cell-row">
                  <div className="w3-cell" style={{width: "50%"}}>    
                    <label className="w3-text-gray">Document Nmb</label>
                    <input className="w3-input w3-padding-small" type="text" value={d.number}/>
                  </div>
                  <div className="w3-cell" style={{width: "50%"}}>    
                    <label className="w3-text-gray">Place of Invoice</label>
                    <input className="w3-input w3-padding-small" type="text" value={d.location}/>
                  </div>
                </div>

                <div className="w3-cell-row">
                  <div className="w3-cell" style={{width: "50%"}}>    
                    <label className="w3-text-gray">Date</label>
                    <input className="w3-input w3-padding-small" type="text" value={d.date}/>
                  </div>
                  <div className="w3-cell" style={{width: "50%"}}>    
                    <label className="w3-text-gray">Payment</label>
                    <input className="w3-input w3-padding-small" type="text" value={d.paymethod_name}/>
                  </div>
                </div>

                <div className="w3-cell-row">
                  <div className="w3-cell" style={{width: "50%"}}>
                    <label className="w3-text-gray">Period from:</label>
                    <input className="w3-input w3-padding-small" type="text" value={d.period_startdate}/>
                  </div>
                  <div className="w3-cell" style={{width: "50%"}}>
                    <label className="w3-text-gray">Period to:</label>
                    <input className="w3-input w3-padding-small" type="text" value={d.period_enddate}/>                
                  </div>
                </div>

              </form>
            </div>

            <div className="w3-cell w3-mobile w3-padding-small" style={{width: "50%"}}>
              <form className="w3-padding-small">
                <label className="w3-text-gray">Customer Name 1</label>
                <input className="w3-input w3-padding-small" type="text" value={d.custname1}/>
                <label className="w3-text-gray">Customer Name 2</label>
                <input className="w3-input w3-padding-small" type="text" value={d.custname2}/>
                <label className="w3-text-gray">VAT ID</label>
                <input className="w3-input w3-padding-small" type="text" value={d.custnip}/>
                <label className="w3-text-gray">Internal Account Nmb</label>
                <input className="w3-input w3-padding-small" type="text" value={d.custaccnmb}/>
              </form>
            </div>
          
          </div>

          <div className="w3-cell-row">
            <table className="w3-table-all"><tbody>
              <tr className="w3-yellow">
                <th>Nmb</th>
                <th>Article's' name</th>
                <th>Price</th>
                <th>Tax Rate</th>
                <th>Unit</th>
                <th>Qty</th>
                <th>Netto</th>
                <th>Brutto</th>
              </tr>
              {this.props.articles.items ? this.renderArticles() : ''}
            </tbody></table>
          </div>

          <div className="w3-cell-row">
            <div className="w3-third w3-right">
              {this.renderInvFooter()}
            </div>
          </div>

        </div>

      </div>
  }  
}

export default DocumentItemDetail