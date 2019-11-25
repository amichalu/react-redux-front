// React, redux and thunk
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'

import reducer from './reducers'
import Container from './components/Container';

import 'w3-css/w3.css';
import './css/styles.css';

// Enable logger 
const middleware = [ thunk ]
if ( process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger()) // logger enables verbose info of prev and current state once action has been fired
}

// Redux store
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}> {/* Redux store will be available to any nested components if wrapped by connect() */}    
    <Container/>
  </Provider>,
  document.getElementById('root')
)
