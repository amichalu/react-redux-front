#### The front demo app REACT + REDUX + REDUX-THUNK

live demo: https://solidity.kz:9001

This project is bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Runtime technologies used so far:

* [caddy](https://caddyserver.com/) - as the https server and the REST API proxy in the live demo
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/) - as the state store
* [redux-thunk](https://github.com/gaearon/redux-thunk) - middleware which allows some side effects in action functions like calling the external api

Dev tools:

* [Create React App](https://github.com/facebookincubator/create-react-app) - for the app boostrapping
* [redux-logger](https://github.com/evgenyrodionov/redux-logger) - the middleware logger for Redux
* [gulp](http://gulpjs.com) &&  - [gulp-sass](https://www.npmjs.com/package/gulp-sass) for the saas transpilation
* [redux-devtools](https://github.com/gaearon/redux-devtools) - for the browser extention

#### Install

npm install && npm start

In the local dev http server API calls are forwaded to "proxy": "https://solidity.kz:9001" (package.json)

#### Components' structure deescription


```
 DocumentListContainer.js   - the only React container for fetching the data 
           |                  (calls ext. REST API). 
           |                  Tha data are afterwards stored in Redux.
           v
     DocumentList.js        - View component - the list of the records
           |         
           v
     DocumentItem.js        - View component - the record
           |         
           v
  DocumentItemDetail.js     - View component - document's detail 
                              && fetched articles for clicked record
```

