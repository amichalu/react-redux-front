// React, redux and thunk
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'

import reducer from './reducers'
import DocumentList from './components/DocumentList';
import {AppContext} from './components/app-context';
import './css/styles.css';

// Enable logger 
const middleware = [ thunk ]
if ( process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

// Redux store
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <AppContext.Provider value="dark">
      <DocumentList />
    </AppContext.Provider>
  </Provider>,
  document.getElementById('root')
)
