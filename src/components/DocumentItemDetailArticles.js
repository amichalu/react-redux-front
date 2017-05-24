import React, { Component } from 'react'
import {formatDecimal} from '../solidity/numbers'

class DocumentItemDetailArticles extends Component {

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

    render() {
      return (
        <div className="w3-cell-row">
          <table className="w3-table-all"><tbody>
            <tr className="w3-yellow">
              <th>Nmb</th>
              <th>Article's name</th>
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
      )
    }
}

export default DocumentItemDetailArticles