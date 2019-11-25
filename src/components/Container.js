import React, { Component } from 'react';
import { connect } from 'react-redux'

// Application components
import DocumentItem from './DocumentItem'
import TableNavigation from './TableNavigation'
import TableHeader from './TableHeader'

// Context object definition
import {AppContext, themes} from './app-context';

import '@fortawesome/fontawesome-free/css/all.css'

// Container of other components ------------------------------------------------------------------
// can change the theme through toogleTheme()
class Container extends Component {

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
    console.log("Container.render()")

    document.body.style.backgroundColor = this.state.context.theme.background; // let's change background color

    return <div>
      <div className="w3-container">

        <button style={{backgroundColor: this.state.context.theme.background}} onClick={this.toggleTheme}>
          <i className="fas fa-moon" aria-hidden="true"> dark mode</i>
        </button>
          
        {/* context allows to avoid data to be passed top-down (parent to child) via props */}
        <AppContext.Provider value={this.state.context}>
      
          <TableNavigation/>

          <div className="w3-border w3-round">

              {/* */}
              <TableHeader/>

              {/* Create list of DocumentItem components */}
              { this.props.documents.items.map( (document)=>(
                <DocumentItem key={document.Id} document={document}/>
              ))}

          </div>

        </AppContext.Provider>
        
    </div>
  </div>;
  }
}
// connect() returns wrapped component and merge state.documents and dispatch() to props
// so you can use this.props.documents in your render()
// and this.props.dispatch(action_id) e.g. in your onClick()
export default connect( 
  (state) => {
    return {
      documents: state.documents
    }}
)(Container)
