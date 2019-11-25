#### The front demo app REACT + REDUX + REDUX-THUNK

DEMO APP IS BEING REBUILT TO CONFORM TO THE LAST REACT TRENDS LIKE HOOKS, CONTEXT ... AND GOLANG

This is the demo app, kind of invoices viewer utilizing React + Redux store, supplied by backend RESTful API app https://github.com/amichalu/react-redux-back-flask (it's being migrated to GOLANG)

Runtime technologies:

* [caddy](https://caddyserver.com/) - as the https server and the REST API proxy in the live demo
* [React](https://reactjs.org/)
* [Redux](http://redux.js.org/) - as the state store
* [redux-thunk](https://github.com/gaearon/redux-thunk) - middleware which allows async calls

Dev tools:

* [Create React App](https://github.com/facebookincubator/create-react-app) - for the app boostrapping
* [redux-logger](https://github.com/evgenyrodionov/redux-logger) - the middleware logger for Redux
* [gulp](https://gulpjs.com/) &&  - [gulp-sass](https://www.npmjs.com/package/gulp-sass) for the saas transpilation
* [redux-devtools](https://github.com/gaearon/redux-devtools) - browser extension

![OneToManyReactAppScrSht](https://github.com/amichalu/react-redux-front/blob/master/img/main.png)

#### Install

yarn && yarn build && yarn start

In the local dev http server API calls are forwaded to "proxy": "https://rrapp.amovile.com" (package.json)

#### Components' structure 


```
                             Container.js        - Component container which renders following components:
                                    |                navigation buttons component <TableNavigation/>
                                    |                table header <TableHeader/>
                                    |                list of <DocumentItem .../> components
                                    |                Component also manges the theme as context
                                    v
                             TableNavigation.js      - Navigation buttons: prev/next/refresh/close all
                                    |      
                                    v
                             TableHeader.js          - Component which  
                                    |                gives the possibility to change the order   
                                    v
                             DocumentItem.js        - he record of the invoice
                                    |         
                                    v
                           DocumentItemDetail.js    - Component renders invoice details once clicked
                                    |                                                            
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

