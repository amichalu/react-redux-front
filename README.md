#### The front demo app REACT + REDUX + REDUX-THUNK

This is the demo app, kind of invoices viewer utilizing React + Redux store, feeded with data by RESTful API app  https://github.com/amichalu/react-redux-back-flask

:smile: Live demo: https://solidity.kz:9001 

The application was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and designed in fulfilment of the pattern of [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) recommended by Dan Abramov.

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

![OneToManyReactAppScrSht](https://github.com/amichalu/react-redux-front/blob/master/img/main.png)

#### Install

npm install && npm start

In the local dev http server API calls are forwaded to "proxy": "https://solidity.kz:9001" (package.json)

#### Components' structure 


```
                         DocumentListContainer.js    - the only React container aware of data fetching 
                                    |                  Data are fetched and stored in Redux
                                    v
                              DocumentList.js        - Presentational component: the list of records
                                    |         
                                    v
                              DocumentItem.js        - Presentational component: the record of the invoice
                                    |         
                                    v
                           DocumentItemDetail.js     - Presentational component: document's detail 
                                                            && fetched articles for clicked record
                                    |
            +-----------+-----------+------------------------------+---------------------------+
            |                       |                              |                           | 
            v                       v                              v                           v
DocumentItemDetailNumber.js DocumentItemDetailHeader.js DocumentItemDetailArticles.js DocumentItemDetailFooter.js
                                    |
                       +------------+------------+
                       |                         |
                       v                         v
                  HeaderItem               HeaderItemCust   

Trivial wrapper function/class presentational components for HTML/CSS:

  DocumentItemDetailNumber.js
  DocumentItemDetailHeader.js + HeaderItem, HeaderItemCust (inside)
  DocumentItemDetailArticles.js
  DocumentItemDetailFooter.js 

```

