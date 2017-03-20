import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchDocumentsIfNeeded } from './actions'


class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchDocumentsIfNeeded())
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   const { selectedReddit, postsByReddit } = state
//   const {
//     isFetching,
//     lastUpdated,
//     items: posts
//   } = postsByReddit[selectedReddit] || {
//     isFetching: true,
//     items: []
//   }

//   return {
//     selectedReddit,
//     posts,
//     isFetching,
//     lastUpdated
//   }
// }

const mapStateToProps = state => {
  // Return object for props
  return state.documents
    // isFetching: false || state.isFetching,
    // docments: [] || state.documents,
    // lastUpdated: '' || state.lastUpdated,
    // didInvalidate: false || state.didInvalidate,
    // pageNmb: 0 || state.pageNmb,
    // pageSize: 20 || state.pageSize,
    // order: 'number' || state.order,
    // dirOrder: 'asc' || state.dirOrder
}
export default connect(mapStateToProps)(App)
