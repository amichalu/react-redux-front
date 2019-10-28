import React, { Component } from 'react';
import { connect } from 'react-redux'

// Application components
import DocumentItem from '../components/DocumentItem'
import TableNavigation from '../components/TableNavigation'
import TableHeader from '../components/TableHeader'

import {AppContext, themes} from './app-context';

import '@fortawesome/fontawesome-free/css/all.css'



// DocumentList main container component  ------------------------------------------------------------------
class DocumentList extends Component {

  constructor(props) {
    super(props)
    
    this.state = {context: {
      theme: themes.light,
      lightThemeMode: true, 
    }}
    document.body.style.backgroundColor = this.state.context.theme.background; // default value theme

    this.toggleTheme = () => {
      this.setState(state => ({
        context: {
          theme: state.context.theme === themes.dark
            ? themes.light // if dark theme then make it light
            : themes.dark, // and opposite way
            lightThemeMode: !state.context.lightThemeMode,
      }}));
    };
  }

  render() {
    console.log("DocumentList.render()")

    document.body.style.backgroundColor = this.state.context.theme.background; // let's change background color

    return <div>
      <div className="w3-container">

        <button style={{backgroundColor: this.state.context.theme.background}} onClick={this.toggleTheme}>
          <i className="fas fa-moon" aria-hidden="true"> dark mode</i>
        </button>

        <AppContext.Provider value={this.state.context}>

          <TableNavigation/>

          <div className="w3-border w3-round">

              <TableHeader/>

              {/* List of documents */}
              { this.props.documents.items.map( (document)=>(
                <DocumentItem key={document.Id} document={document}/>
              ))}
          </div>

        </AppContext.Provider>
        
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
