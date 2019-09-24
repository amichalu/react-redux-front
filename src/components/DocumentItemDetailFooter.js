import React, { Component } from 'react'
import {formatDecimal, roundFloat} from '../solidity/numbers'

class DocumentItemDetailFooter extends Component {

  renderInvFooter() {
    var tBrutto = 0;
    var tNetto = 0;

    const articles = this.props.articles.items[this.props.document.Id].articles
    for (var i = 0; i < articles.length; i++) {
      tBrutto += parseFloat(articles[i].Bruttovalue)
      tNetto += parseFloat(articles[i].Nettovalue)
    }

    return <table className="w3-table w3-striped"><tbody>
        <tr><th className="w3-right-align w3-padding-small">Total Netto</th><th className="w3-right-align w3-padding-small">Total Brutto</th></tr>
        <tr><td className="w3-right-align w3-padding-small">{formatDecimal(roundFloat(tNetto,2))}</td><td className="w3-right-align w3-padding-small">{formatDecimal(roundFloat(tBrutto, 2))}</td></tr>
      </tbody></table>;    
  }

  render() {
    return (
      <div className="w3-cell-row">
        <div className="w3-third w3-right">
          {this.renderInvFooter()}
        </div>
      </div>
    )
  }
}
export default DocumentItemDetailFooter