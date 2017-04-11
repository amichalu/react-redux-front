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

    const d = this.props.document
    const w3class = "w3-card w3-leftbar w3-border-grey"
    return <div className={w3class + " div-detail " + this.state.classNameAnim}>
        <span onClick={this.onClose} className="w3-button w3-display-topright">X</span>

        <header className="w3-container w3-amber">
          <h5>Invoice Nmb: {d.id}</h5>
        </header>

        <div className="w3-container w3-padding-small">

          <div className="w3-cell-row">

            <div className="w3-container w3-cell w3-mobile w3-padding-small" style={{width: "50%"}}>
              <form className="w3-container">
                <label className="w3-text-gray">Document Nmb</label>
                <input className="w3-input w3-padding-small" type="text" value={d.id}/>
                <label className="w3-text-gray">Place of Invoice</label>
                <input className="w3-input w3-padding-small" type="text" value={d.location}/>
                <label className="w3-text-gray">Date</label>
                <input className="w3-input w3-padding-small" type="text" value={d.date}/>
                <label className="w3-text-gray">Payment</label>
                <input className="w3-input w3-padding-small" type="text" value={d.paymethod_name}/>
                <label className="w3-text-gray">Period from:</label>
                <input className="w3-input w3-padding-small" type="text" value={d.period_startdate}/>
                <label className="w3-text-gray">Period to:</label>
                <input className="w3-input w3-padding-small" type="text" value={d.period_enddate}/>                
              </form>
            </div>

            <div className="w3-container w3-cell w3-mobile" style={{width: "50%"}}>
              <form className="w3-container">
                <label className="w3-text-gray">Customer name I</label>
                <input className="w3-input w3-padding-small" type="text" value={d.custname1}/>
                <label className="w3-text-gray">Customer Name II</label>
                <input className="w3-input w3-padding-small" type="text" value={d.custname2}/>
                <label className="w3-text-gray">VAT ID</label>
                <input className="w3-input w3-padding-small" type="text" value={d.custnip}/>
                <label className="w3-text-gray">Internal Account Nmb</label>
                <input className="w3-input w3-padding-small" type="text" value={d.custaccnmb}/>
              </form>
            </div>
          
          </div>

          <table className="w3-table w3-bordered w3-border" style={{ margin: "5px 0px"}}><tbody>
            <tr className=""><th>Nr</th><th>Article name</th><th>Price</th><th></th><th></th><th></th><th></th><th></th></tr>
            {this.props.articles.items ? this.renderArticles() : ''}
          </tbody></table>
        </div>

      </div>
  }  
}

export default DocumentItemDetail