import React, { Component } from 'react';
import { connect } from 'react-redux'

import ReactGA from 'react-ga';

// Application components
import DocumentItem from '../components/DocumentItem'
import TableNavigation from '../components/TableNavigation'
import TableHeader from '../components/TableHeader'

// DocumentList main container component  ------------------------------------------------------------------
class DocumentList extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log("DocumentList.render()")

    return <div>
      <div className="w3-container">
        <TableNavigation/>
        <div className="w3-border w3-round w3-medium">
            <TableHeader/>
            {/* List of documents */}
            { this.props.documents.items.map( (document)=>(
              <DocumentItem 
                key={document.Id} 
                document={document}/>
              ))}
        </div>
    </div>
  </div>;
  }
}

export default connect(
  (state) => {
    return {
      documents: state.documents
    }}
)(DocumentList)
