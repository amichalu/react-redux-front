/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://www.w3schools.com/w3css/4/w3.css);", ""]);
exports.push([module.i, "@import url(https://www.w3schools.com/lib/w3-theme-light-green.css);", ""]);
var getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../images/reload.svg */ "./src/images/reload.svg"));
// Module
exports.push([module.i, ".text-ar {\n  text-align: right; }\n\n.text-al {\n  text-align: left; }\n\n.text-ac {\n  text-align: center; }\n\n.div-row-grey {\n  background-color: #f9f9f9; }\n\n.row-checked {\n  background-color: lightblue; }\n\n.p-cell {\n  padding: 0.2em 0.2em;\n  margin: 0.2em 0.4em;\n  height: 1.8em; }\n\n.whitespace {\n  white-space: nowrap; }\n\n.hover-div div:hover {\n  background-color: #628e2f !important;\n  cursor: pointer; }\n\n.doc-check {\n  width: 1.5em;\n  padding: 0 .5em;\n  height: 1.9em;\n  cursor: auto; }\n\n.input-checkbox {\n  margin-top: 0.5em; }\n\n.doc-id {\n  width: 5em;\n  cursor: auto; }\n\n.doc-number {\n  width: 9em; }\n\n.doc-type {\n  width: 5.8em;\n  cursor: auto; }\n\n.div-doc-norm {\n  color: dodgerblue; }\n\n.div-doc-corr {\n  background-color: #f44336;\n  color: #fff; }\n\n.doc-val {\n  width: 8em; }\n\n.doc-nip {\n  width: 11em; }\n\n.div-detail {\n  height: 0px;\n  overflow: hidden;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  overflow: auto; }\n\n.art-cell {\n  margin: 0px;\n  white-space: nowrap; }\n\n.doc-opening {\n  position: relative;\n  -webkit-animation-name: opening;\n  /* Safari 4.0 - 8.0 */\n  -webkit-animation-duration: 0.7s;\n  /* Safari 4.0 - 8.0 */\n  animation-name: opening;\n  animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n  /* Safari 4.0 - 8.0 */\n  animation-fill-mode: forwards; }\n\n.doc-closing {\n  height: 0px;\n  position: relative;\n  -webkit-animation-name: closing;\n  /* Safari 4.0 - 8.0 */\n  -webkit-animation-duration: 0.7s;\n  /* Safari 4.0 - 8.0 */\n  animation-name: closing;\n  animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n  /* Safari 4.0 - 8.0 */\n  animation-fill-mode: forwards; }\n\n/* Safari 4.0 - 8.0 */\n@-webkit-keyframes opening {\n  0% {\n    height: 0px; }\n  100% {\n    height: 400px;\n    visibility: visible; } }\n\n/* Standard syntax */\n@keyframes opening {\n  0% {\n    height: 0px; }\n  100% {\n    height: 400px;\n    visibility: visible; } }\n\n/* Safari 4.0 - 8.0 */\n@-webkit-keyframes closing {\n  0% {\n    height: 400px; }\n  100% {\n    height: 0px;\n    visibility: hidden; } }\n\n/* Standard syntax */\n@keyframes closing {\n  0% {\n    height: 400px; }\n  100% {\n    height: 0px;\n    visibility: hidden; } }\n\n.button-margin {\n  margin: 8px 8px 8px 0px; }\n\n.button-style {\n  color: #616161;\n  float: left; }\n\n.error_msg {\n  background-color: #ff5722;\n  color: #fff; }\n\n.request-documentdetail-spinner {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 18px 18px; }\n", ""]);


/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: REQUEST_DOCUMENTS, RECEIVE_DOCUMENTS, INVALIDATE_DOCUMENTS, NEXT_PAGE, PREV_PAGE, CHANGE_ORDER, TOGGLE_DOCUMENT, TOGGLE_ALL_DOCUMENTS, TOGGLE_SPINNER, OPEN_DOCUMENT, CLOSE_DOCUMENT, CLOSE_ALLDOCUMENTS, FETCH_ERROR, RECEIVE_DOCUMENTDETAIL, invalidateDocuments, requestDocuments, toggleDocument, toggleAllDocuments, toggleSpinner, openDocument, closeDocument, closeAllDocuments, receiveDocuments, changeOrder, onRefreshData, nextPageClick, prevPageClick, nextPage, prevPage, fetchError, fetchDocumentsIfNeeded, receiveDocumentDetail, receiveDocumentDetailActions, fetchDocumentDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_DOCUMENTS", function() { return REQUEST_DOCUMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_DOCUMENTS", function() { return RECEIVE_DOCUMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALIDATE_DOCUMENTS", function() { return INVALIDATE_DOCUMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEXT_PAGE", function() { return NEXT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREV_PAGE", function() { return PREV_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_ORDER", function() { return CHANGE_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_DOCUMENT", function() { return TOGGLE_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_ALL_DOCUMENTS", function() { return TOGGLE_ALL_DOCUMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_SPINNER", function() { return TOGGLE_SPINNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_DOCUMENT", function() { return OPEN_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_DOCUMENT", function() { return CLOSE_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_ALLDOCUMENTS", function() { return CLOSE_ALLDOCUMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ERROR", function() { return FETCH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_DOCUMENTDETAIL", function() { return RECEIVE_DOCUMENTDETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidateDocuments", function() { return invalidateDocuments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestDocuments", function() { return requestDocuments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleDocument", function() { return toggleDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleAllDocuments", function() { return toggleAllDocuments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSpinner", function() { return toggleSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDocument", function() { return openDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeDocument", function() { return closeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeAllDocuments", function() { return closeAllDocuments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveDocuments", function() { return receiveDocuments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeOrder", function() { return changeOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRefreshData", function() { return onRefreshData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextPageClick", function() { return nextPageClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevPageClick", function() { return prevPageClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextPage", function() { return nextPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevPage", function() { return prevPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchError", function() { return fetchError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDocumentsIfNeeded", function() { return fetchDocumentsIfNeeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveDocumentDetail", function() { return receiveDocumentDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveDocumentDetailActions", function() { return receiveDocumentDetailActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDocumentDetail", function() { return fetchDocumentDetail; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
 // Document's list actions

var REQUEST_DOCUMENTS = 'REQUEST_DOCUMENTS';
var RECEIVE_DOCUMENTS = 'RECEIVE_DOCUMENTS';
var INVALIDATE_DOCUMENTS = 'INVALIDATE_DOCUMENTS';
var NEXT_PAGE = 'NEXT_PAGE';
var PREV_PAGE = 'PREV_PAGE';
var CHANGE_ORDER = 'CHANGE_ORDER';
var TOGGLE_DOCUMENT = 'TOOGLE_DOCUMENT';
var TOGGLE_ALL_DOCUMENTS = 'TOOGLE_ALL_DOCUMENTS';
var TOGGLE_SPINNER = 'TOOGLE_SPINNER';
var OPEN_DOCUMENT = 'OPEN_DOCUMENT';
var CLOSE_DOCUMENT = 'CLOSE_DOCUMENT';
var CLOSE_ALLDOCUMENTS = 'CLOSE_ALLDOCUMENTS';
var FETCH_ERROR = 'FETCH_ERROR'; // Document detail actions

var RECEIVE_DOCUMENTDETAIL = 'RECEIVE_DOCUMENTDETAIL';
var invalidateDocuments = function invalidateDocuments() {
  return {
    type: INVALIDATE_DOCUMENTS
  };
};
var requestDocuments = function requestDocuments() {
  return {
    type: REQUEST_DOCUMENTS
  };
};

var prepareDocuments = function prepareDocuments(documents) {
  if (!documents) return;
  var even = false;

  for (var i = 0; i < documents.length; i++) {
    documents[i].even = !even;
    even = !even;
  }

  return documents;
};

var toggleDocument = function toggleDocument(id) {
  return {
    type: TOGGLE_DOCUMENT,
    id: id,
    receivedAt: Date.now()
  };
};
var toggleAllDocuments = function toggleAllDocuments(selectAll) {
  return {
    type: TOGGLE_ALL_DOCUMENTS,
    selectAll: selectAll,
    receivedAt: Date.now()
  };
};
var toggleSpinner = function toggleSpinner(id) {
  return {
    type: TOGGLE_SPINNER,
    id: id,
    receivedAt: Date.now()
  };
};
var openDocument = function openDocument(id) {
  return {
    type: OPEN_DOCUMENT,
    id: id,
    receivedAt: Date.now()
  };
};
var closeDocument = function closeDocument(id) {
  return {
    type: CLOSE_DOCUMENT,
    id: id,
    receivedAt: Date.now()
  };
};
var closeAllDocuments = function closeAllDocuments() {
  return {
    type: CLOSE_ALLDOCUMENTS,
    receivedAt: Date.now()
  };
};
var receiveDocuments = function receiveDocuments(json) {
  return {
    type: RECEIVE_DOCUMENTS,
    items: prepareDocuments(json),
    receivedAt: Date.now()
  };
};
var changeOrder = function changeOrder() {
  var col = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'number';
  return {
    type: CHANGE_ORDER,
    order: col
  };
};
var onRefreshData = function onRefreshData() {
  react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].event({
    category: 'Navigation',
    action: 'Refresh',
    label: 'Top navigation'
  });
  return function (dispatch) {
    dispatch(invalidateDocuments());
    dispatch(fetchDocumentsIfNeeded());
  };
};
var nextPageClick = function nextPageClick() {
  react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].event({
    category: 'Navigation',
    action: 'Next page',
    label: 'Top navigation'
  });
  return function (dispatch) {
    dispatch(nextPage());
    dispatch(invalidateDocuments());
    dispatch(fetchDocumentsIfNeeded());
  };
};
var prevPageClick = function prevPageClick() {
  react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].event({
    category: 'Navigation',
    action: 'Prev page',
    label: 'Top navigation'
  });
  return function (dispatch) {
    dispatch(prevPage());
    dispatch(invalidateDocuments());
    dispatch(fetchDocumentsIfNeeded());
  };
};
var nextPage = function nextPage() {
  return {
    type: NEXT_PAGE
  };
};
var prevPage = function prevPage() {
  return {
    type: PREV_PAGE
  };
};
var fetchError = function fetchError(status) {
  return {
    type: FETCH_ERROR,
    status: status
  };
};

var getUrl = function getUrl(state) {
  return "/documents/" + state.documents.order + "/" + state.documents.pageNmb + "/" + state.documents.pageSize + "/" + state.documents.dirOrder;
};

var fetchDocuments = function fetchDocuments() {
  return function (dispatch, getState) {
    dispatch(requestDocuments());
    return fetch(getUrl(getState())).then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch(receiveDocuments(json));
    })["catch"](function (error) {
      var status = error.response ? error.response.status : 500;
      dispatch(fetchError(status));
    });
  };
};

var shouldFetchDocuments = function shouldFetchDocuments(state) {
  var documents = state.documents;

  if (!documents.items) {
    return true;
  }

  if (documents.isFetching) {
    return false;
  }

  return documents.didInvalidate;
};

var fetchDocumentsIfNeeded = function fetchDocumentsIfNeeded() {
  return function (dispatch, getState) {
    if (shouldFetchDocuments(getState())) {
      return dispatch(fetchDocuments());
    }
  };
}; // Document detail actions

var receiveDocumentDetail = function receiveDocumentDetail(json, id) {
  return {
    type: RECEIVE_DOCUMENTDETAIL,
    document: json,
    id: id,
    receivedAt: Date.now()
  };
}; // This is called by fetch() in fetchDocumentDetail()
// We dispatch RECEIVE_DOCUMENTDETAIL, TOGGLE_SPINNER & OPEN_DOCUMENT

var receiveDocumentDetailActions = function receiveDocumentDetailActions(json, id) {
  return function (dispatch) {
    dispatch(receiveDocumentDetail(json, id));
    dispatch(toggleSpinner(id));
    dispatch(openDocument(id));
  };
};

var getUrlDocumentDetail = function getUrlDocumentDetail(id) {
  return "/documentarticles/" + id;
};

var fetchDocumentDetail = function fetchDocumentDetail(id) {
  return function (dispatch, getState) {
    var alreadyOpened = false;
    getState().documents.items.forEach(function (doc) {
      if (doc.Id === id && doc.opening) {
        alreadyOpened = true;
        return;
      }
    });

    if (!alreadyOpened) {
      dispatch(toggleSpinner(id));
      return fetch(getUrlDocumentDetail(id)).then(function (response) {
        return response.json();
      }).then(function (json) {
        return dispatch(receiveDocumentDetailActions(json, id));
      })["catch"](function (error) {
        var status = error.response ? error.response.status : 500;
        dispatch(fetchError(status));
      });
    }
  };
};

/***/ }),

/***/ "./src/components/DocumentItem.js":
/*!****************************************!*\
  !*** ./src/components/DocumentItem.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solidity_numbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../solidity/numbers */ "./src/solidity/numbers.js");
/* harmony import */ var _components_DocumentItemDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DocumentItemDetail */ "./src/components/DocumentItemDetail.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/index */ "./src/actions/index.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var CORR_DOC_TYPE = -2; // correction document type
// DocumentItem  ------------------------------------------------------------------

var DocumentItem =
/*#__PURE__*/
function (_Component) {
  _inherits(DocumentItem, _Component);

  function DocumentItem(props) {
    var _this;

    _classCallCheck(this, DocumentItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DocumentItem).call(this, props));
    _this.state = {
      hover: false
    };
    _this.onMouseEnterHandler = _this.onMouseEnterHandler.bind(_assertThisInitialized(_this));
    _this.onMouseLeaveHandler = _this.onMouseLeaveHandler.bind(_assertThisInitialized(_this));
    _this.onCheckClick = _this.onCheckClick.bind(_assertThisInitialized(_this));
    _this.onOpenDetail = _this.onOpenDetail.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DocumentItem, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.document.lastUpdated !== this.props.document.lastUpdated || this.state.hover !== nextState.hover;
    }
  }, {
    key: "onMouseEnterHandler",
    value: function onMouseEnterHandler() {
      this.setState({
        hover: true
      });
    }
  }, {
    key: "onMouseLeaveHandler",
    value: function onMouseLeaveHandler() {
      this.setState({
        hover: false
      });
    }
  }, {
    key: "onCheckClick",
    value: function onCheckClick(event) {
      react_ga__WEBPACK_IMPORTED_MODULE_4__["default"].event({
        category: 'Documents',
        action: 'Toggle document',
        label: ''
      });
      this.props.dispatch(Object(_actions_index__WEBPACK_IMPORTED_MODULE_5__["toggleDocument"])(event.target.value));
    }
  }, {
    key: "onOpenDetail",
    value: function onOpenDetail(id) {
      react_ga__WEBPACK_IMPORTED_MODULE_4__["default"].event({
        category: 'Document',
        action: 'Open detail',
        label: 'Document detail'
      });
      this.props.dispatch(Object(_actions_index__WEBPACK_IMPORTED_MODULE_5__["fetchDocumentDetail"])(id));
    }
  }, {
    key: "getHighlightedColClass",
    value: function getHighlightedColClass(col) {
      return this.props.documents.order === col && !(this.props.document && this.props.document.checked) && !this.state.hover ? 'w3-theme-l4' : '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log("DocumentItem.render()");
      var doc = this.props.document;
      var docType = doc.Type === CORR_DOC_TYPE ? 'Corr' : 'Inv VAT';
      var openDocumentDetailAnim = 'w3-cell w3-left doc-id' + (this.props.document.spinner || false ? ' request-documentdetail-spinner' : '');
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-row " + (doc.even ? 'div-row-grey' : '') + " " + (this.state.hover ? 'w3-theme-l3' : '') + " " + (doc.checked ? 'row-checked' : ''),
        onMouseEnter: this.onMouseEnterHandler,
        onMouseLeave: this.onMouseLeaveHandler
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-cell w3-left doc-check"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input-checkbox",
        type: "checkbox",
        name: "",
        value: doc.Id,
        onChange: this.onCheckClick,
        checked: doc.checked ? 'checked' : ''
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          _this2.onOpenDetail(doc.Id);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: openDocumentDetailAnim
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-ar p-cell whitespace"
      }, this.props.document.spinner || false ? '' : doc.Id)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-cell w3-left doc-number " + this.getHighlightedColClass('number')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-al p-cell whitespace"
      }, doc.Number)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-cell w3-left doc-type " + (doc.Type === -1 ? 'div-doc-norm' : 'div-doc-corr')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-ac p-cell whitespace"
      }, docType)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-cell w3-left doc-number " + this.getHighlightedColClass('date')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-al p-cell whitespace"
      }, doc.Date1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-cell w3-right doc-val " + this.getHighlightedColClass('excise')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-ar p-cell whitespace"
      }, Object(_solidity_numbers__WEBPACK_IMPORTED_MODULE_1__["formatDecimal"])(doc.Excise))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-cell w3-right doc-val " + this.getHighlightedColClass('brutto')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-ar p-cell whitespace"
      }, Object(_solidity_numbers__WEBPACK_IMPORTED_MODULE_1__["formatDecimal"])(doc.Brutto))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-cell w3-right doc-val " + this.getHighlightedColClass('netto')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-ar p-cell whitespace"
      }, Object(_solidity_numbers__WEBPACK_IMPORTED_MODULE_1__["formatDecimal"])(doc.Netto))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-cell w3-right doc-nip " + this.getHighlightedColClass('custnip')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-al p-cell whitespace"
      }, doc.Custnip)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-rest doc-customername1 text-al " + this.getHighlightedColClass('custname1')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "p-cell whitespace",
        style: {
          minWidth: "200px"
        }
      }, doc.Custname1)))), doc.opening || doc.closing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DocumentItemDetail__WEBPACK_IMPORTED_MODULE_2__["default"], {
        document: this.props.document //onCloseDetail={(id)=>{this.props.onCloseDetail(id)}}
        ,
        articles: this.props.articles
      }) : '');
    }
  }]);

  return DocumentItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); //export default DocumentItem


var mapStateToProps = function mapStateToProps(state) {
  return {
    articles: state.articles,
    documents: state.documents
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, null)(DocumentItem));

/***/ }),

/***/ "./src/components/DocumentItemDetail.js":
/*!**********************************************!*\
  !*** ./src/components/DocumentItemDetail.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _components_DocumentItemDetailNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DocumentItemDetailNumber */ "./src/components/DocumentItemDetailNumber.js");
/* harmony import */ var _components_DocumentItemDetailHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DocumentItemDetailHeader */ "./src/components/DocumentItemDetailHeader.js");
/* harmony import */ var _components_DocumentItemDetailArticles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DocumentItemDetailArticles */ "./src/components/DocumentItemDetailArticles.js");
/* harmony import */ var _components_DocumentItemDetailFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DocumentItemDetailFooter */ "./src/components/DocumentItemDetailFooter.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 //import {formatDecimal, roundFloat} from '../solidity/numbers'





 // DocumentItemDetail  ------------------------------------------------------------------

var DocumentItemDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(DocumentItemDetail, _Component);

  function DocumentItemDetail(props) {
    var _this;

    _classCallCheck(this, DocumentItemDetail);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DocumentItemDetail).call(this, props));
    _this.state = {
      classNameAnim: props.document.opening ? "doc-opening" : "doc-closing"
    };
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DocumentItemDetail, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.document.opening !== nextProps.document.opening) this.setState({
        classNameAnim: nextProps.document.opening ? "doc-opening" : "doc-closing"
      });
    }
  }, {
    key: "onClose",
    value: function onClose() {
      react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].event({
        category: 'Document',
        action: 'Close detail',
        label: 'Document detail'
      });
      this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["closeDocument"])(this.props.document.Id));
    }
  }, {
    key: "render",
    value: function render() {
      console.log("DocumentItemDetail.render()"); //const d = this.props.document

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-card w3-leftbar w3-border-grey div-detail " + this.state.classNameAnim
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: this.onClose,
        className: "w3-button w3-display-topright"
      }, "x"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DocumentItemDetailNumber__WEBPACK_IMPORTED_MODULE_3__["default"], {
        document: this.props.document
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-container w3-padding-small"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DocumentItemDetailHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
        document: this.props.document
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DocumentItemDetailArticles__WEBPACK_IMPORTED_MODULE_5__["default"], {
        document: this.props.document,
        articles: this.props.articles
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DocumentItemDetailFooter__WEBPACK_IMPORTED_MODULE_6__["default"], {
        document: this.props.document,
        articles: this.props.articles
      })));
    }
  }]);

  return DocumentItemDetail;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); //export default DocumentItemDetail


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, null)(DocumentItemDetail));

/***/ }),

/***/ "./src/components/DocumentItemDetailArticles.js":
/*!******************************************************!*\
  !*** ./src/components/DocumentItemDetailArticles.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solidity_numbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../solidity/numbers */ "./src/solidity/numbers.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var DocumentItemDetailArticles =
/*#__PURE__*/
function (_Component) {
  _inherits(DocumentItemDetailArticles, _Component);

  function DocumentItemDetailArticles() {
    _classCallCheck(this, DocumentItemDetailArticles);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentItemDetailArticles).apply(this, arguments));
  }

  _createClass(DocumentItemDetailArticles, [{
    key: "renderArticles",
    value: function renderArticles() {
      var id = 1;
      return this.props.articles.items[this.props.document.Id].articles.map(function (art, k) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: k
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, id++), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, art.Artname1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "text-ar art-cell"
        }, Object(_solidity_numbers__WEBPACK_IMPORTED_MODULE_1__["formatDecimal"])(art.Artprice))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, art.Arttaxlabel), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, art.Artunit), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "text-ar art-cell"
        }, Object(_solidity_numbers__WEBPACK_IMPORTED_MODULE_1__["formatDecimal"])(art.Quantity))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "text-ar art-cell"
        }, Object(_solidity_numbers__WEBPACK_IMPORTED_MODULE_1__["formatDecimal"])(art.Nettovalue))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "text-ar art-cell"
        }, Object(_solidity_numbers__WEBPACK_IMPORTED_MODULE_1__["formatDecimal"])(art.Bruttovalue))));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-cell-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "w3-table-all"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: "w3-yellow"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Nmb"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Article's name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Tax Rate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Unit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Qty"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Netto"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Brutto")), this.props.articles.items ? this.renderArticles() : '')));
    }
  }]);

  return DocumentItemDetailArticles;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DocumentItemDetailArticles);

/***/ }),

/***/ "./src/components/DocumentItemDetailFooter.js":
/*!****************************************************!*\
  !*** ./src/components/DocumentItemDetailFooter.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solidity_numbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../solidity/numbers */ "./src/solidity/numbers.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var DocumentItemDetailFooter =
/*#__PURE__*/
function (_Component) {
  _inherits(DocumentItemDetailFooter, _Component);

  function DocumentItemDetailFooter() {
    _classCallCheck(this, DocumentItemDetailFooter);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentItemDetailFooter).apply(this, arguments));
  }

  _createClass(DocumentItemDetailFooter, [{
    key: "renderInvFooter",
    value: function renderInvFooter() {
      var tBrutto = 0;
      var tNetto = 0;
      var articles = this.props.articles.items[this.props.document.Id].articles;

      for (var i = 0; i < articles.length; i++) {
        tBrutto += parseFloat(articles[i].Bruttovalue);
        tNetto += parseFloat(articles[i].Nettovalue);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "w3-table w3-striped"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "w3-right-align w3-padding-small"
      }, "Total Netto"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "w3-right-align w3-padding-small"
      }, "Total Brutto")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "w3-right-align w3-padding-small"
      }, Object(_solidity_numbers__WEBPACK_IMPORTED_MODULE_1__["formatDecimal"])(Object(_solidity_numbers__WEBPACK_IMPORTED_MODULE_1__["roundFloat"])(tNetto, 2))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "w3-right-align w3-padding-small"
      }, Object(_solidity_numbers__WEBPACK_IMPORTED_MODULE_1__["formatDecimal"])(Object(_solidity_numbers__WEBPACK_IMPORTED_MODULE_1__["roundFloat"])(tBrutto, 2))))));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-cell-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-third w3-right"
      }, this.renderInvFooter()));
    }
  }]);

  return DocumentItemDetailFooter;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DocumentItemDetailFooter);

/***/ }),

/***/ "./src/components/DocumentItemDetailHeader.js":
/*!****************************************************!*\
  !*** ./src/components/DocumentItemDetailHeader.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var HeaderItem = function HeaderItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w3-cell",
    style: {
      width: "50%"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "w3-text-gray"
  }, props.label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "w3-input w3-padding-small",
    type: "text",
    defaultValue: props.value
  }));
};

var HeaderItemCust = function HeaderItemCust(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "w3-text-gray"
  }, props.label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "w3-input w3-padding-small",
    type: "text",
    defaultValue: props.value
  }));
};

var DocumentItemDetailHeader = function DocumentItemDetailHeader(props) {
  console.log(props.document.Date1);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w3-cell-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w3-container w3-cell w3-mobile w3-padding-small",
    style: {
      width: "50%"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "w3-container w3-padding-small"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w3-cell-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem, {
    label: "Document nmb",
    value: props.document.Number
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem, {
    label: "Place of Invoice",
    value: props.document.Location
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w3-cell-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem, {
    label: "Date",
    value: props.document.Date1
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem, {
    label: "Payment",
    value: props.document.Paymethod
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w3-cell-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem, {
    label: "Period from:",
    value: props.document.Period.Startdate1
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem, {
    label: "Period to:",
    value: props.document.Period.Enddate1
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w3-cell w3-mobile w3-padding-small",
    style: {
      width: "50%"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "w3-padding-small"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItemCust, {
    label: "Customer Name 1",
    value: props.document.Custname1
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItemCust, {
    label: "Customer Name 2",
    value: props.document.Custname2
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItemCust, {
    label: "VAT ID",
    value: props.document.Custnip
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItemCust, {
    label: "Internal Account Nmb",
    value: props.document.Custaccnmb
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DocumentItemDetailHeader);

/***/ }),

/***/ "./src/components/DocumentItemDetailNumber.js":
/*!****************************************************!*\
  !*** ./src/components/DocumentItemDetailNumber.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var DocumentItemDetailNumber = function DocumentItemDetailNumber(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "w3-container w3-amber"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Invoice Nmb: ", props.document.number));
};

/* harmony default export */ __webpack_exports__["default"] = (DocumentItemDetailNumber);

/***/ }),

/***/ "./src/components/DocumentList.js":
/*!****************************************!*\
  !*** ./src/components/DocumentList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_DocumentItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DocumentItem */ "./src/components/DocumentItem.js");
/* harmony import */ var _components_TableNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TableNavigation */ "./src/components/TableNavigation.js");
/* harmony import */ var _components_TableHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TableHeader */ "./src/components/TableHeader.js");
/* harmony import */ var _app_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-context */ "./src/components/app-context.js");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // Application components





 // DocumentList main container component  ------------------------------------------------------------------

var DocumentList =
/*#__PURE__*/
function (_Component) {
  _inherits(DocumentList, _Component);

  function DocumentList(props) {
    var _this;

    _classCallCheck(this, DocumentList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DocumentList).call(this, props));
    _this.state = {
      context: {
        theme: _app_context__WEBPACK_IMPORTED_MODULE_5__["themes"].light
      }
    };
    document.body.style.backgroundColor = _this.state.context.theme.background;

    _this.toggleTheme = function () {
      _this.setState(function (state) {
        return {
          context: {
            theme: state.context.theme === _app_context__WEBPACK_IMPORTED_MODULE_5__["themes"].dark ? _app_context__WEBPACK_IMPORTED_MODULE_5__["themes"].light : _app_context__WEBPACK_IMPORTED_MODULE_5__["themes"].dark
          }
        };
      });
    };

    return _this;
  }

  _createClass(DocumentList, [{
    key: "render",
    value: function render() {
      console.log("DocumentList.render()");
      document.body.style.backgroundColor = this.state.context.theme.background; //w3-medium

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        style: {
          backgroundColor: this.state.context.theme.background
        },
        onClick: this.toggleTheme
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-moon",
        "aria-hidden": "true"
      }, " dark mode")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_context__WEBPACK_IMPORTED_MODULE_5__["AppContext"].Provider, {
        value: this.state.context
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-border w3-round"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null), this.props.documents.items.map(function (document) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DocumentItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: document.Id,
          document: document
        });
      })))));
    }
  }]);

  return DocumentList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    documents: state.documents
  };
})(DocumentList));

/***/ }),

/***/ "./src/components/TableHeader.js":
/*!***************************************!*\
  !*** ./src/components/TableHeader.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _app_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-context */ "./src/components/app-context.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





 // TableHeader component  ------------------------------------------------------------------

var TableHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(TableHeader, _Component);

  function TableHeader(props) {
    var _this;

    _classCallCheck(this, TableHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableHeader).call(this, props));
    _this.onChangeOrder = _this.onChangeOrder.bind(_assertThisInitialized(_this));
    _this.onToogleAllDocuments = _this.onToogleAllDocuments.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TableHeader, [{
    key: "onChangeOrder",
    value: function onChangeOrder(col) {
      react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].event({
        category: 'Documents',
        action: 'Change order: ' + col,
        label: 'Sorting'
      });
      this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["changeOrder"])(col));
      this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["invalidateDocuments"])());
      this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchDocumentsIfNeeded"])());
    }
  }, {
    key: "getOrderElement",
    value: function getOrderElement(order) {
      var el = this.props.documents.order === order ? this.props.documents.dirOrder === 'asc' ? 1 : 2 : 0;
      if (!el) return '';
      return el === 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-sort-amount-asc w3-padding-small",
        style: {
          "float": "right"
        },
        "aria-hidden": "true"
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-sort-amount-desc w3-padding-small",
        style: {
          "float": "right"
        },
        "aria-hidden": "true"
      });
    }
  }, {
    key: "onToogleAllDocuments",
    value: function onToogleAllDocuments(event) {
      react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].event({
        category: 'Documents',
        action: 'Toggle all documents',
        label: ''
      });
      this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["toggleAllDocuments"])(event.target.checked));
    }
  }, {
    key: "getHighlightedColClass",
    value: function getHighlightedColClass(col) {
      return this.props.documents.order === col ? 'w3-theme-d2' : '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log("DocumentList.render()");
      var reloadAnimClass = 'w3-padding-small fa fa-refresh' + (this.props.documents && this.props.documents.isFetching ? ' w3-spin' : '');
      var theme = this.context.theme;
      var mainClass = theme.thead + ' w3-row  w3-text-white';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: mainClass
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-col w3-left doc-check"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        className: "input-checkbox",
        name: "",
        value: "",
        checked: this.props.documents.allSelectedItems,
        onChange: function onChange(e) {
          return _this2.onToogleAllDocuments(e);
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-col w3-left doc-id"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-ar p-cell"
      }, "id")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-div"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-col w3-left doc-number " + this.getHighlightedColClass('number'),
        onClick: function onClick() {
          return _this2.onChangeOrder('number');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-al p-cell"
      }, "Inv Nmb ", this.getOrderElement('number'), " "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-col w3-left doc-type"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-ac p-cell"
      }, "Inv Type")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-div"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-col w3-left doc-number " + this.getHighlightedColClass('date'),
        onClick: function onClick() {
          return _this2.onChangeOrder('date');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-al p-cell"
      }, "Date ", this.getOrderElement('date')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-div"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-col w3-right doc-val " + this.getHighlightedColClass('excise'),
        onClick: function onClick() {
          return _this2.onChangeOrder('excise');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-al p-cell"
      }, "Excise ", this.getOrderElement('excise')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-div"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-col w3-right doc-val " + this.getHighlightedColClass('brutto'),
        onClick: function onClick() {
          return _this2.onChangeOrder('brutto');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-al p-cell"
      }, "Brutto ", this.getOrderElement('brutto')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-div"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-col w3-right doc-val " + this.getHighlightedColClass('netto'),
        onClick: function onClick() {
          return _this2.onChangeOrder('netto');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-al p-cell"
      }, "Netto ", this.getOrderElement('netto')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-div"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-col w3-right doc-nip " + this.getHighlightedColClass('custnip'),
        onClick: function onClick() {
          return _this2.onChangeOrder('custnip');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-al p-cell"
      }, "VAT ID ", this.getOrderElement('custnip')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-div"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-rest text-al " + this.getHighlightedColClass('custname1'),
        onClick: function onClick() {
          return _this2.onChangeOrder('custname1');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "p-cell"
      }, "Customer ", this.getOrderElement('custname1')))));
    }
  }]);

  return TableHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

TableHeader.contextType = _app_context__WEBPACK_IMPORTED_MODULE_3__["AppContext"];
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    documents: state.documents
  };
})(TableHeader));

/***/ }),

/***/ "./src/components/TableNavigation.js":
/*!*******************************************!*\
  !*** ./src/components/TableNavigation.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _app_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-context */ "./src/components/app-context.js");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






 // TableNavigation component  ------------------------------------------------------------------

var TableNavigation =
/*#__PURE__*/
function (_Component) {
  _inherits(TableNavigation, _Component);

  function TableNavigation(props) {
    var _this;

    _classCallCheck(this, TableNavigation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableNavigation).call(this, props));

    _this.onPrevPageClick = function () {
      react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].event({
        category: 'Navigation',
        action: 'Prev page',
        label: 'Top navigation'
      });

      _this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["prevPage"])());

      _this.refreshData();
    };

    _this.onNextPageClick = function () {
      react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].event({
        category: 'Navigation',
        action: 'Next page',
        label: 'Top navigation'
      });

      _this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["nextPage"])());

      _this.refreshData();
    };

    _this.onCloseAllDocuments = function () {
      react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].event({
        category: 'Document',
        action: 'Close all documents',
        label: 'Document detail'
      });

      _this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["closeAllDocuments"])());
    };

    _this.onRefreshClick = function () {
      react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].event({
        category: 'Navigation',
        action: 'Refresh',
        label: 'Top navigation'
      });

      _this.refreshData();
    };

    _this.refreshData = function () {
      _this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["invalidateDocuments"])());

      _this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["fetchDocumentsIfNeeded"])());
    };

    return _this;
  }

  _createClass(TableNavigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["fetchDocumentsIfNeeded"])());
    }
  }, {
    key: "render",
    value: function render() {
      console.log("TableNavigation.render()");
      var reloadAnimClass = 'w3-padding-small fas fa-sync' + (this.props.documents && this.props.documents.isFetching ? ' w3-spin' : '');
      var btnStyle = 'w3-button w3-border w3-round w3-padding-small button-margin button-style';
      var theme = this.context;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-bar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: btnStyle,
        style: {
          backgroundColor: theme.tnav_back,
          color: theme.tnav_fore
        },
        href: "#",
        onClick: this.onPrevPageClick
      }, "Backward", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "w3-padding-small fas fa-arrow-left",
        "aria-hidden": "true"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: btnStyle,
        style: {
          backgroundColor: theme.tnav_back,
          color: theme.tnav_fore
        },
        href: "#",
        onClick: this.onNextPageClick
      }, "Forward", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "w3-padding-small fas fa-arrow-right"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: btnStyle,
        style: {
          backgroundColor: theme.tnav_back,
          color: theme.tnav_fore
        },
        href: "#",
        onClick: this.onRefreshClick
      }, "Reload", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: reloadAnimClass
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: btnStyle,
        style: {
          backgroundColor: theme.tnav_back,
          color: theme.tnav_fore
        },
        href: "#",
        onClick: this.onCloseAllDocuments
      }, "Close all", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "w3-padding-small fas fa-window-close"
      })), this.props.documents.isFetchError ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundColor: theme.err_msg_back,
          color: theme.err_msg_fore
        },
        className: "button-margin w3-left w3-padding-small error_msg"
      }, "Oops, no response from the server or an unexpected format received") : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button-margin w3-right w3-padding-small"
      }, "Page: ", this.props.documents && this.props.documents.isFetching ? '..' : this.props.documents.pageNmb + 1)));
    }
  }]);

  return TableNavigation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

TableNavigation.contextType = _app_context__WEBPACK_IMPORTED_MODULE_3__["AppContext"];
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    documents: state.documents
  };
})(TableNavigation));

/***/ }),

/***/ "./src/components/app-context.js":
/*!***************************************!*\
  !*** ./src/components/app-context.js ***!
  \***************************************/
/*! exports provided: themes, AppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return themes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    tnav_fore: '#616161',
    tnav_back: '#eeeeee',
    err_msg_fore: '#fff',
    err_msg_back: '#ff5722',
    thead: 'w3-theme-d1'
  },
  dark: {
    foreground: '#dddddd',
    background: '#222222',
    tnav_fore: '#bbbbbb',
    tnav_back: '#222222',
    err_msg_fore: '#fff',
    err_msg_back: '#822e14',
    thead: 'w3-theme-d5'
  }
};
var AppContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(themes.light // default value
);

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/images/reload.svg":
/*!*******************************!*\
  !*** ./src/images/reload.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e7f37025d0421cdc4e0e70989dfb01ef.svg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var _components_DocumentList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/DocumentList */ "./src/components/DocumentList.js");
/* harmony import */ var _components_app_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/app-context */ "./src/components/app-context.js");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_9__);
// React, redux and thunk









 // Enable logger 

var middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]];

if (true) {
  middleware.push(Object(redux_logger__WEBPACK_IMPORTED_MODULE_4__["createLogger"])());
} // Redux store


var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_6__["default"], redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"].apply(void 0, middleware));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_app_context__WEBPACK_IMPORTED_MODULE_8__["AppContext"].Provider, {
  value: "dark"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DocumentList__WEBPACK_IMPORTED_MODULE_7__["default"], null))), document.getElementById('root'));

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = {
  isFetching: false,
  items: [],
  selectedItems: [],
  allSelectedItems: false,
  lastUpdated: '',
  didInvalidate: true,
  pageNmb: 0,
  pageSize: 20,
  order: 'number',
  dirOrder: 'asc',
  isFetchError: false,
  fetchErrorStatus: 200
}; // Document list reducer

var updateOpen = function updateOpen(id, items, receivedAt) {
  return items.map(function (doc) {
    if (doc.Id === id) {
      return _objectSpread({}, doc, {
        opening: true,
        closing: false,
        lastUpdated: receivedAt
      });
    } else return doc;
  });
};

var updateClose = function updateClose(id, items, receivedAt) {
  return items.map(function (doc) {
    if (doc.Id === id) {
      return _objectSpread({}, doc, {
        opening: false,
        closing: true,
        lastUpdated: receivedAt
      });
    } else return doc;
  });
};

var toggle = function toggle(selectedItems, items, toggleDocumentId, receivedAt) {
  // To avoid mutability
  var newSelectedItems = selectedItems.slice(); // Row is selected and will be deselected

  if (newSelectedItems[toggleDocumentId]) delete newSelectedItems[toggleDocumentId]; // Row is not selected and will be selected
  else newSelectedItems[toggleDocumentId] = true;
  return {
    items: items.map(function (doc) {
      if (doc.Id === parseInt(toggleDocumentId, 10)) {
        return _objectSpread({}, doc, {
          checked: newSelectedItems[toggleDocumentId] ? true : false,
          lastUpdated: receivedAt
        });
      } else return doc;
    }),
    selectedItems: newSelectedItems
  };
};

var toggleAllDocuments = function toggleAllDocuments(items, action) {
  var selectedItems = [];
  return {
    _items: items.map(function (doc) {
      if (action.selectAll) selectedItems[doc.Id] = true;
      return _objectSpread({}, doc, {
        checked: action.selectAll,
        lastUpdated: action.receivedAt
      });
    }),
    _selectedItems: selectedItems
  };
}; // Set selected documents after page change, set opened


var updateDocumentsState = function updateDocumentsState(selectedItems, items, receivedAt) {
  if (!items) return null;
  var newItems = items.map(function (doc) {
    if (selectedItems[doc.Id]) {
      return _objectSpread({}, doc, {
        checked: true,
        opening: false,
        closing: false,
        spinner: false,
        lastUpdated: receivedAt
      });
    } else return _objectSpread({}, doc, {
      checked: false,
      opening: false,
      closing: false,
      spinner: false,
      lastUpdated: receivedAt
    });
  });
  return newItems;
};

var documents = function documents() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["REQUEST_DOCUMENTS"]:
      return _objectSpread({}, state, {
        isFetching: true,
        didInvalidate: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["RECEIVE_DOCUMENTS"]:
      return _objectSpread({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: updateDocumentsState(state.selectedItems, action.items, action.receivedAt),
        lastUpdated: action.receivedAt,
        isFetchError: false,
        fetchErrorStatus: 200
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["INVALIDATE_DOCUMENTS"]:
      return _objectSpread({}, state, {
        didInvalidate: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["NEXT_PAGE"]:
      return _objectSpread({}, state, {
        pageNmb: state.pageNmb + 1,
        didInvalidate: true,
        allSelectedItems: false,
        selectedItems: state.allSelectedItems ? [] : state.selectedItems
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["PREV_PAGE"]:
      return _objectSpread({}, state, {
        pageNmb: state.pageNmb > 0 ? state.pageNmb - 1 : state.pageNmb,
        didInvalidate: true,
        allSelectedItems: false,
        selectedItems: state.allSelectedItems ? [] : state.selectedItems
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_ORDER"]:
      if (state.order === action.order) {
        return _objectSpread({}, state, {
          order: action.order,
          dirOrder: state.dirOrder === 'asc' ? 'desc' : 'asc',
          didInvalidate: true
        });
      }

      return _objectSpread({}, state, {
        order: action.order,
        dirOrder: 'asc',
        didInvalidate: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_DOCUMENT"]:
      var _toggle = toggle(state.selectedItems, state.items, action.id, action.receivedAt),
          items = _toggle.items,
          selectedItems = _toggle.selectedItems;

      return _objectSpread({}, state, {
        items: items,
        lastUpdated: action.receivedAt,
        selectedItems: selectedItems,
        allSelectedItems: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_ALL_DOCUMENTS"]:
      var _toggleAllDocuments = toggleAllDocuments(state.items, action),
          _items = _toggleAllDocuments._items,
          _selectedItems = _toggleAllDocuments._selectedItems;

      return _objectSpread({}, state, {
        items: _items,
        selectedItems: _selectedItems,
        allSelectedItems: action.selectAll
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["OPEN_DOCUMENT"]:
      return _objectSpread({}, state, {
        items: updateOpen(action.id, state.items, action.receivedAt)
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["CLOSE_DOCUMENT"]:
      return _objectSpread({}, state, {
        items: updateClose(action.id, state.items, action.receivedAt)
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_SPINNER"]:
      return _objectSpread({}, state, {
        items: state.items.map(function (doc) {
          if (doc.Id === action.id) {
            return _objectSpread({}, doc, {
              spinner: !doc.spinner,
              lastUpdated: action.receivedAt
            });
          } else return doc;
        })
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["CLOSE_ALLDOCUMENTS"]:
      return _objectSpread({}, state, {
        items: state.items.map(function (doc) {
          if (doc.opening) {
            return _objectSpread({}, doc, {
              opening: false,
              closing: true,
              lastUpdated: action.receivedAt
            });
          } else return doc;
        }),
        lastUpdated: action.receivedAt
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["FETCH_ERROR"]:
      return _objectSpread({}, state, {
        isFetchError: true,
        fetchErrorStatus: action.status,
        isFetching: false
      });

    default:
      return state;
  }
}; // Document detail reducer


var initialStateDocDetail = {
  items: []
};

var articles = function articles() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateDocDetail;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["RECEIVE_DOCUMENTDETAIL"]:
      var newItems = state.items.slice();
      newItems[action.id] = {
        articles: action.document
      };
      return _objectSpread({}, state, {
        items: newItems
      });

    default:
      return state;
  }
};

var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  documents: documents,
  articles: articles
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/solidity/numbers.js":
/*!*********************************!*\
  !*** ./src/solidity/numbers.js ***!
  \*********************************/
/*! exports provided: formatDecimal, roundFloat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDecimal", function() { return formatDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundFloat", function() { return roundFloat; });
// Format decimal string "nnnnn.nn to "nn nnn.nn $
function formatDecimal(strdec, currency, left) {
  var out = "";
  var fleft = left || false;
  var fmtdec = roundToTwo(parseFloat(strdec)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');
  if (currency) out = fleft ? currency + " " + fmtdec : fmtdec + " " + currency;else out = fmtdec;
  return out;
}

function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

function roundFloat(number, precision) {
  var factor = Math.pow(10, precision);
  var tempNumber = number * factor;
  var roundedTempNumber = Math.round(tempNumber);
  return roundedTempNumber / factor;
}
;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RvY3VtZW50SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Eb2N1bWVudEl0ZW1EZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRJdGVtRGV0YWlsQXJ0aWNsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRJdGVtRGV0YWlsRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RvY3VtZW50SXRlbURldGFpbEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Eb2N1bWVudEl0ZW1EZXRhaWxOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RhYmxlSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RhYmxlTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlcy5jc3M/NzhlNCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3JlbG9hZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc29saWRpdHkvbnVtYmVycy5qcyJdLCJuYW1lcyI6WyJSRVFVRVNUX0RPQ1VNRU5UUyIsIlJFQ0VJVkVfRE9DVU1FTlRTIiwiSU5WQUxJREFURV9ET0NVTUVOVFMiLCJORVhUX1BBR0UiLCJQUkVWX1BBR0UiLCJDSEFOR0VfT1JERVIiLCJUT0dHTEVfRE9DVU1FTlQiLCJUT0dHTEVfQUxMX0RPQ1VNRU5UUyIsIlRPR0dMRV9TUElOTkVSIiwiT1BFTl9ET0NVTUVOVCIsIkNMT1NFX0RPQ1VNRU5UIiwiQ0xPU0VfQUxMRE9DVU1FTlRTIiwiRkVUQ0hfRVJST1IiLCJSRUNFSVZFX0RPQ1VNRU5UREVUQUlMIiwiaW52YWxpZGF0ZURvY3VtZW50cyIsInR5cGUiLCJyZXF1ZXN0RG9jdW1lbnRzIiwicHJlcGFyZURvY3VtZW50cyIsImRvY3VtZW50cyIsImV2ZW4iLCJpIiwibGVuZ3RoIiwidG9nZ2xlRG9jdW1lbnQiLCJpZCIsInJlY2VpdmVkQXQiLCJEYXRlIiwibm93IiwidG9nZ2xlQWxsRG9jdW1lbnRzIiwic2VsZWN0QWxsIiwidG9nZ2xlU3Bpbm5lciIsIm9wZW5Eb2N1bWVudCIsImNsb3NlRG9jdW1lbnQiLCJjbG9zZUFsbERvY3VtZW50cyIsInJlY2VpdmVEb2N1bWVudHMiLCJqc29uIiwiaXRlbXMiLCJjaGFuZ2VPcmRlciIsImNvbCIsIm9yZGVyIiwib25SZWZyZXNoRGF0YSIsIlJlYWN0R0EiLCJldmVudCIsImNhdGVnb3J5IiwiYWN0aW9uIiwibGFiZWwiLCJkaXNwYXRjaCIsImZldGNoRG9jdW1lbnRzSWZOZWVkZWQiLCJuZXh0UGFnZUNsaWNrIiwibmV4dFBhZ2UiLCJwcmV2UGFnZUNsaWNrIiwicHJldlBhZ2UiLCJmZXRjaEVycm9yIiwic3RhdHVzIiwiZ2V0VXJsIiwic3RhdGUiLCJwYWdlTm1iIiwicGFnZVNpemUiLCJkaXJPcmRlciIsImZldGNoRG9jdW1lbnRzIiwiZ2V0U3RhdGUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwic2hvdWxkRmV0Y2hEb2N1bWVudHMiLCJpc0ZldGNoaW5nIiwiZGlkSW52YWxpZGF0ZSIsInJlY2VpdmVEb2N1bWVudERldGFpbCIsImRvY3VtZW50IiwicmVjZWl2ZURvY3VtZW50RGV0YWlsQWN0aW9ucyIsImdldFVybERvY3VtZW50RGV0YWlsIiwiZmV0Y2hEb2N1bWVudERldGFpbCIsImFscmVhZHlPcGVuZWQiLCJmb3JFYWNoIiwiZG9jIiwiSWQiLCJvcGVuaW5nIiwiQ09SUl9ET0NfVFlQRSIsIkRvY3VtZW50SXRlbSIsInByb3BzIiwiaG92ZXIiLCJvbk1vdXNlRW50ZXJIYW5kbGVyIiwiYmluZCIsIm9uTW91c2VMZWF2ZUhhbmRsZXIiLCJvbkNoZWNrQ2xpY2siLCJvbk9wZW5EZXRhaWwiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJsYXN0VXBkYXRlZCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJjaGVja2VkIiwiY29uc29sZSIsImxvZyIsImRvY1R5cGUiLCJUeXBlIiwib3BlbkRvY3VtZW50RGV0YWlsQW5pbSIsInNwaW5uZXIiLCJnZXRIaWdobGlnaHRlZENvbENsYXNzIiwiTnVtYmVyIiwiRGF0ZTEiLCJmb3JtYXREZWNpbWFsIiwiRXhjaXNlIiwiQnJ1dHRvIiwiTmV0dG8iLCJDdXN0bmlwIiwibWluV2lkdGgiLCJDdXN0bmFtZTEiLCJjbG9zaW5nIiwiYXJ0aWNsZXMiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb25uZWN0IiwiRG9jdW1lbnRJdGVtRGV0YWlsIiwiY2xhc3NOYW1lQW5pbSIsIm9uQ2xvc2UiLCJEb2N1bWVudEl0ZW1EZXRhaWxBcnRpY2xlcyIsIm1hcCIsImFydCIsImsiLCJBcnRuYW1lMSIsIkFydHByaWNlIiwiQXJ0dGF4bGFiZWwiLCJBcnR1bml0IiwiUXVhbnRpdHkiLCJOZXR0b3ZhbHVlIiwiQnJ1dHRvdmFsdWUiLCJyZW5kZXJBcnRpY2xlcyIsIkRvY3VtZW50SXRlbURldGFpbEZvb3RlciIsInRCcnV0dG8iLCJ0TmV0dG8iLCJwYXJzZUZsb2F0Iiwicm91bmRGbG9hdCIsInJlbmRlckludkZvb3RlciIsIkhlYWRlckl0ZW0iLCJ3aWR0aCIsIkhlYWRlckl0ZW1DdXN0IiwiRG9jdW1lbnRJdGVtRGV0YWlsSGVhZGVyIiwiTG9jYXRpb24iLCJQYXltZXRob2QiLCJQZXJpb2QiLCJTdGFydGRhdGUxIiwiRW5kZGF0ZTEiLCJDdXN0bmFtZTIiLCJDdXN0YWNjbm1iIiwiRG9jdW1lbnRJdGVtRGV0YWlsTnVtYmVyIiwibnVtYmVyIiwiRG9jdW1lbnRMaXN0IiwiY29udGV4dCIsInRoZW1lIiwidGhlbWVzIiwibGlnaHQiLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kIiwidG9nZ2xlVGhlbWUiLCJkYXJrIiwiVGFibGVIZWFkZXIiLCJvbkNoYW5nZU9yZGVyIiwib25Ub29nbGVBbGxEb2N1bWVudHMiLCJlbCIsInJlbG9hZEFuaW1DbGFzcyIsIm1haW5DbGFzcyIsInRoZWFkIiwiYWxsU2VsZWN0ZWRJdGVtcyIsImUiLCJnZXRPcmRlckVsZW1lbnQiLCJjb250ZXh0VHlwZSIsIkFwcENvbnRleHQiLCJUYWJsZU5hdmlnYXRpb24iLCJvblByZXZQYWdlQ2xpY2siLCJyZWZyZXNoRGF0YSIsIm9uTmV4dFBhZ2VDbGljayIsIm9uQ2xvc2VBbGxEb2N1bWVudHMiLCJvblJlZnJlc2hDbGljayIsImJ0blN0eWxlIiwidG5hdl9iYWNrIiwiY29sb3IiLCJ0bmF2X2ZvcmUiLCJpc0ZldGNoRXJyb3IiLCJlcnJfbXNnX2JhY2siLCJlcnJfbXNnX2ZvcmUiLCJmb3JlZ3JvdW5kIiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwibWlkZGxld2FyZSIsInRodW5rIiwicHJvY2VzcyIsInB1c2giLCJjcmVhdGVMb2dnZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbml0aWFsU3RhdGUiLCJzZWxlY3RlZEl0ZW1zIiwiZmV0Y2hFcnJvclN0YXR1cyIsInVwZGF0ZU9wZW4iLCJ1cGRhdGVDbG9zZSIsInRvZ2dsZSIsInRvZ2dsZURvY3VtZW50SWQiLCJuZXdTZWxlY3RlZEl0ZW1zIiwic2xpY2UiLCJwYXJzZUludCIsIl9pdGVtcyIsIl9zZWxlY3RlZEl0ZW1zIiwidXBkYXRlRG9jdW1lbnRzU3RhdGUiLCJuZXdJdGVtcyIsImluaXRpYWxTdGF0ZURvY0RldGFpbCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwic3RyZGVjIiwiY3VycmVuY3kiLCJsZWZ0Iiwib3V0IiwiZmxlZnQiLCJmbXRkZWMiLCJyb3VuZFRvVHdvIiwidG9GaXhlZCIsInJlcGxhY2UiLCJudW0iLCJNYXRoIiwicm91bmQiLCJwcmVjaXNpb24iLCJmYWN0b3IiLCJwb3ciLCJ0ZW1wTnVtYmVyIiwicm91bmRlZFRlbXBOdW1iZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QWI7QUFDQSxNQUFJUCxRQUFKLEVBQWNFLEdBQUcsR0FBR0MsS0FBSyxHQUFHSCxRQUFRLEdBQUcsR0FBWCxHQUFpQkksTUFBcEIsR0FBNkJBLE1BQU0sR0FBRyxHQUFULEdBQWVKLFFBQXZELENBQWQsS0FDS0UsR0FBRyxHQUFHRSxNQUFOO0FBRUwsU0FBT0YsR0FBUDtBQUNIOztBQUVELFNBQVNHLFVBQVQsQ0FBb0JHLEdBQXBCLEVBQXlCO0FBQ3JCLFNBQU8sRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdGLEdBQUcsR0FBRyxLQUFqQixJQUEyQixLQUE3QixDQUFQO0FBQ0g7O0FBRU0sU0FBUzVGLFVBQVQsQ0FBb0JjLE1BQXBCLEVBQTRCaUYsU0FBNUIsRUFBdUM7QUFDMUMsTUFBSUMsTUFBTSxHQUFHSCxJQUFJLENBQUNJLEdBQUwsQ0FBUyxFQUFULEVBQWFGLFNBQWIsQ0FBYjtBQUNBLE1BQUlHLFVBQVUsR0FBR3BGLE1BQU0sR0FBR2tGLE1BQTFCO0FBQ0EsTUFBSUcsaUJBQWlCLEdBQUdOLElBQUksQ0FBQ0MsS0FBTCxDQUFXSSxVQUFYLENBQXhCO0FBQ0EsU0FBT0MsaUJBQWlCLEdBQUdILE1BQTNCO0FBQ0g7QUFBQSxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS93M2Nzcy80L3czLmNzcyk7XCIsIFwiXCJdKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vbGliL3czLXRoZW1lLWxpZ2h0LWdyZWVuLmNzcyk7XCIsIFwiXCJdKTtcbnZhciBnZXRVcmwgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL2ltYWdlcy9yZWxvYWQuc3ZnXCIpKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRleHQtYXIge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4udGV4dC1hbCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLnRleHQtYWMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmRpdi1yb3ctZ3JleSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5OyB9XFxuXFxuLnJvdy1jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTsgfVxcblxcbi5wLWNlbGwge1xcbiAgcGFkZGluZzogMC4yZW0gMC4yZW07XFxuICBtYXJnaW46IDAuMmVtIDAuNGVtO1xcbiAgaGVpZ2h0OiAxLjhlbTsgfVxcblxcbi53aGl0ZXNwYWNlIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG5cXG4uaG92ZXItZGl2IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI4ZTJmICFpbXBvcnRhbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uZG9jLWNoZWNrIHtcXG4gIHdpZHRoOiAxLjVlbTtcXG4gIHBhZGRpbmc6IDAgLjVlbTtcXG4gIGhlaWdodDogMS45ZW07XFxuICBjdXJzb3I6IGF1dG87IH1cXG5cXG4uaW5wdXQtY2hlY2tib3gge1xcbiAgbWFyZ2luLXRvcDogMC41ZW07IH1cXG5cXG4uZG9jLWlkIHtcXG4gIHdpZHRoOiA1ZW07XFxuICBjdXJzb3I6IGF1dG87IH1cXG5cXG4uZG9jLW51bWJlciB7XFxuICB3aWR0aDogOWVtOyB9XFxuXFxuLmRvYy10eXBlIHtcXG4gIHdpZHRoOiA1LjhlbTtcXG4gIGN1cnNvcjogYXV0bzsgfVxcblxcbi5kaXYtZG9jLW5vcm0ge1xcbiAgY29sb3I6IGRvZGdlcmJsdWU7IH1cXG5cXG4uZGl2LWRvYy1jb3JyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5kb2MtdmFsIHtcXG4gIHdpZHRoOiA4ZW07IH1cXG5cXG4uZG9jLW5pcCB7XFxuICB3aWR0aDogMTFlbTsgfVxcblxcbi5kaXYtZGV0YWlsIHtcXG4gIGhlaWdodDogMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuXFxuLmFydC1jZWxsIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcblxcbi5kb2Mtb3BlbmluZyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBvcGVuaW5nO1xcbiAgLyogU2FmYXJpIDQuMCAtIDguMCAqL1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuN3M7XFxuICAvKiBTYWZhcmkgNC4wIC0gOC4wICovXFxuICBhbmltYXRpb24tbmFtZTogb3BlbmluZztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43cztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAvKiBTYWZhcmkgNC4wIC0gOC4wICovXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgfVxcblxcbi5kb2MtY2xvc2luZyB7XFxuICBoZWlnaHQ6IDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGNsb3Npbmc7XFxuICAvKiBTYWZhcmkgNC4wIC0gOC4wICovXFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC43cztcXG4gIC8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cXG4gIGFuaW1hdGlvbi1uYW1lOiBjbG9zaW5nO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIC8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyB9XFxuXFxuLyogU2FmYXJpIDQuMCAtIDguMCAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBvcGVuaW5nIHtcXG4gIDAlIHtcXG4gICAgaGVpZ2h0OiAwcHg7IH1cXG4gIDEwMCUge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9IH1cXG5cXG4vKiBTdGFuZGFyZCBzeW50YXggKi9cXG5Aa2V5ZnJhbWVzIG9wZW5pbmcge1xcbiAgMCUge1xcbiAgICBoZWlnaHQ6IDBweDsgfVxcbiAgMTAwJSB7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH0gfVxcblxcbi8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgY2xvc2luZyB7XFxuICAwJSB7XFxuICAgIGhlaWdodDogNDAwcHg7IH1cXG4gIDEwMCUge1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9IH1cXG5cXG4vKiBTdGFuZGFyZCBzeW50YXggKi9cXG5Aa2V5ZnJhbWVzIGNsb3Npbmcge1xcbiAgMCUge1xcbiAgICBoZWlnaHQ6IDQwMHB4OyB9XFxuICAxMDAlIHtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfSB9XFxuXFxuLmJ1dHRvbi1tYXJnaW4ge1xcbiAgbWFyZ2luOiA4cHggOHB4IDhweCAwcHg7IH1cXG5cXG4uYnV0dG9uLXN0eWxlIHtcXG4gIGNvbG9yOiAjNjE2MTYxO1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4uZXJyb3JfbXNnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5yZXF1ZXN0LWRvY3VtZW50ZGV0YWlsLXNwaW5uZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDE4cHggMThweDsgfVxcblwiLCBcIlwiXSk7XG4iLCJpbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSc7XG5cbi8vIERvY3VtZW50J3MgbGlzdCBhY3Rpb25zXG5leHBvcnQgY29uc3QgUkVRVUVTVF9ET0NVTUVOVFMgPSAnUkVRVUVTVF9ET0NVTUVOVFMnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9ET0NVTUVOVFMgPSAnUkVDRUlWRV9ET0NVTUVOVFMnXG5leHBvcnQgY29uc3QgSU5WQUxJREFURV9ET0NVTUVOVFMgPSAnSU5WQUxJREFURV9ET0NVTUVOVFMnXG5leHBvcnQgY29uc3QgTkVYVF9QQUdFID0gJ05FWFRfUEFHRSdcbmV4cG9ydCBjb25zdCBQUkVWX1BBR0UgPSAnUFJFVl9QQUdFJ1xuZXhwb3J0IGNvbnN0IENIQU5HRV9PUkRFUiA9ICdDSEFOR0VfT1JERVInXG5leHBvcnQgY29uc3QgVE9HR0xFX0RPQ1VNRU5UID0gJ1RPT0dMRV9ET0NVTUVOVCdcbmV4cG9ydCBjb25zdCBUT0dHTEVfQUxMX0RPQ1VNRU5UUyA9ICdUT09HTEVfQUxMX0RPQ1VNRU5UUydcbmV4cG9ydCBjb25zdCBUT0dHTEVfU1BJTk5FUiA9ICdUT09HTEVfU1BJTk5FUidcbmV4cG9ydCBjb25zdCBPUEVOX0RPQ1VNRU5UID0gJ09QRU5fRE9DVU1FTlQnXG5leHBvcnQgY29uc3QgQ0xPU0VfRE9DVU1FTlQgPSAnQ0xPU0VfRE9DVU1FTlQnXG5leHBvcnQgY29uc3QgQ0xPU0VfQUxMRE9DVU1FTlRTID0gJ0NMT1NFX0FMTERPQ1VNRU5UUydcbmV4cG9ydCBjb25zdCBGRVRDSF9FUlJPUiA9ICdGRVRDSF9FUlJPUidcblxuLy8gRG9jdW1lbnQgZGV0YWlsIGFjdGlvbnNcbmV4cG9ydCBjb25zdCBSRUNFSVZFX0RPQ1VNRU5UREVUQUlMID0gJ1JFQ0VJVkVfRE9DVU1FTlRERVRBSUwnXG5cbmV4cG9ydCBjb25zdCBpbnZhbGlkYXRlRG9jdW1lbnRzID0gKCkgPT4gKHtcbiAgdHlwZTogSU5WQUxJREFURV9ET0NVTUVOVFNcbn0pXG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0RG9jdW1lbnRzID0gKCkgPT4gKHtcbiAgdHlwZTogUkVRVUVTVF9ET0NVTUVOVFNcbn0pXG5cbmNvbnN0IHByZXBhcmVEb2N1bWVudHMgPSAoZG9jdW1lbnRzKSA9PiB7XG4gIGlmICghZG9jdW1lbnRzKSByZXR1cm5cbiAgdmFyIGV2ZW4gPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBkb2N1bWVudHNbaV0uZXZlbiA9ICFldmVuO1xuICAgIGV2ZW4gPSAhZXZlbjtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnRzO1xufVxuXG5leHBvcnQgY29uc3QgdG9nZ2xlRG9jdW1lbnQgPSAoaWQpID0+ICh7XG4gIHR5cGU6IFRPR0dMRV9ET0NVTUVOVCxcbiAgaWQ6IGlkLFxuICByZWNlaXZlZEF0OiBEYXRlLm5vdygpXG59KSBcbmV4cG9ydCBjb25zdCB0b2dnbGVBbGxEb2N1bWVudHMgPSAoc2VsZWN0QWxsKSA9PiAoe1xuICB0eXBlOiBUT0dHTEVfQUxMX0RPQ1VNRU5UUyxcbiAgc2VsZWN0QWxsOiBzZWxlY3RBbGwsXG4gIHJlY2VpdmVkQXQ6IERhdGUubm93KClcbn0pIFxuXG5leHBvcnQgY29uc3QgdG9nZ2xlU3Bpbm5lciA9IChpZCkgPT4gKHtcbiAgdHlwZTogVE9HR0xFX1NQSU5ORVIsXG4gIGlkOiBpZCxcbiAgcmVjZWl2ZWRBdDogRGF0ZS5ub3coKSAgXG59KVxuXG5leHBvcnQgY29uc3Qgb3BlbkRvY3VtZW50ID0gKGlkKSA9PiAoe1xuICB0eXBlOiBPUEVOX0RPQ1VNRU5ULFxuICBpZDogaWQsXG4gIHJlY2VpdmVkQXQ6IERhdGUubm93KClcbn0pXG5leHBvcnQgY29uc3QgY2xvc2VEb2N1bWVudCA9IChpZCkgPT4gKHtcbiAgdHlwZTogQ0xPU0VfRE9DVU1FTlQsXG4gIGlkOiBpZCxcbiAgcmVjZWl2ZWRBdDogRGF0ZS5ub3coKVxufSlcbmV4cG9ydCBjb25zdCBjbG9zZUFsbERvY3VtZW50cyA9ICgpID0+ICh7XG4gIHR5cGU6IENMT1NFX0FMTERPQ1VNRU5UUyxcbiAgcmVjZWl2ZWRBdDogRGF0ZS5ub3coKVxufSlcblxuZXhwb3J0IGNvbnN0IHJlY2VpdmVEb2N1bWVudHMgPSAoanNvbikgPT4gKHtcbiAgdHlwZTogUkVDRUlWRV9ET0NVTUVOVFMsXG4gIGl0ZW1zOiBwcmVwYXJlRG9jdW1lbnRzKCBqc29uICksXG4gIHJlY2VpdmVkQXQ6IERhdGUubm93KClcbn0pXG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VPcmRlciA9ICggY29sID0gJ251bWJlcicgKSA9PiAoe1xuICB0eXBlOiBDSEFOR0VfT1JERVIsXG4gIG9yZGVyOiBjb2xcbn0pXG5cbmV4cG9ydCBjb25zdCBvblJlZnJlc2hEYXRhID0gKCkgPT4ge1xuXG4gIFJlYWN0R0EuZXZlbnQoe1xuICAgIGNhdGVnb3J5OiAnTmF2aWdhdGlvbicsXG4gICAgYWN0aW9uOiAnUmVmcmVzaCcsXG4gICAgbGFiZWw6ICdUb3AgbmF2aWdhdGlvbidcbiAgfSk7XG5cbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGludmFsaWRhdGVEb2N1bWVudHMoKSlcbiAgICBkaXNwYXRjaChmZXRjaERvY3VtZW50c0lmTmVlZGVkKCkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG5leHRQYWdlQ2xpY2sgPSAoKSA9PiB7XG5cbiAgUmVhY3RHQS5ldmVudCh7XG4gICAgY2F0ZWdvcnk6ICdOYXZpZ2F0aW9uJyxcbiAgICBhY3Rpb246ICdOZXh0IHBhZ2UnLFxuICAgIGxhYmVsOiAnVG9wIG5hdmlnYXRpb24nXG4gIH0pO1xuXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChuZXh0UGFnZSgpKVxuICAgIGRpc3BhdGNoKGludmFsaWRhdGVEb2N1bWVudHMoKSlcbiAgICBkaXNwYXRjaChmZXRjaERvY3VtZW50c0lmTmVlZGVkKCkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHByZXZQYWdlQ2xpY2sgPSAoKSA9PiB7XG5cbiAgUmVhY3RHQS5ldmVudCh7XG4gICAgY2F0ZWdvcnk6ICdOYXZpZ2F0aW9uJyxcbiAgICBhY3Rpb246ICdQcmV2IHBhZ2UnLFxuICAgIGxhYmVsOiAnVG9wIG5hdmlnYXRpb24nXG4gIH0pO1xuXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChwcmV2UGFnZSgpKVxuICAgIGRpc3BhdGNoKGludmFsaWRhdGVEb2N1bWVudHMoKSlcbiAgICBkaXNwYXRjaChmZXRjaERvY3VtZW50c0lmTmVlZGVkKCkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG5leHRQYWdlID0gKCkgPT4gKHtcbiAgdHlwZTogTkVYVF9QQUdFXG59KVxuZXhwb3J0IGNvbnN0IHByZXZQYWdlID0gKCkgPT4gKHtcbiAgdHlwZTogUFJFVl9QQUdFXG59KVxuXG5leHBvcnQgY29uc3QgZmV0Y2hFcnJvciA9IChzdGF0dXMpID0+ICh7XG4gIHR5cGU6IEZFVENIX0VSUk9SLFxuICBzdGF0dXM6IHN0YXR1c1xufSlcblxuY29uc3QgZ2V0VXJsID0gKHN0YXRlKSA9PiAoXCIvZG9jdW1lbnRzL1wiICsgc3RhdGUuZG9jdW1lbnRzLm9yZGVyICsgXCIvXCIgKyBzdGF0ZS5kb2N1bWVudHMucGFnZU5tYiArIFwiL1wiICsgc3RhdGUuZG9jdW1lbnRzLnBhZ2VTaXplICsgXCIvXCIgKyBzdGF0ZS5kb2N1bWVudHMuZGlyT3JkZXIpXG5cbmNvbnN0IGZldGNoRG9jdW1lbnRzID0gKCkgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICBkaXNwYXRjaChyZXF1ZXN0RG9jdW1lbnRzKCkpXG4gIHJldHVybiBmZXRjaCggZ2V0VXJsKGdldFN0YXRlKCkpIClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBkaXNwYXRjaChyZWNlaXZlRG9jdW1lbnRzKGpzb24pKSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc3Qgc3RhdHVzID0gZXJyb3IucmVzcG9uc2UgPyBlcnJvci5yZXNwb25zZS5zdGF0dXMgOiA1MDBcbiAgICAgIGRpc3BhdGNoKGZldGNoRXJyb3Ioc3RhdHVzKSlcbiAgICB9KTtcbn1cblxuY29uc3Qgc2hvdWxkRmV0Y2hEb2N1bWVudHMgPSAoc3RhdGUpID0+IHtcbiAgXG4gIGNvbnN0IGRvY3VtZW50cyA9IHN0YXRlLmRvY3VtZW50c1xuICBpZiAoIWRvY3VtZW50cy5pdGVtcykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgaWYgKGRvY3VtZW50cy5pc0ZldGNoaW5nKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50cy5kaWRJbnZhbGlkYXRlXG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaERvY3VtZW50c0lmTmVlZGVkID0gKCkgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICBpZiAoc2hvdWxkRmV0Y2hEb2N1bWVudHMoZ2V0U3RhdGUoKSkpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goZmV0Y2hEb2N1bWVudHMoKSlcbiAgfVxufVxuXG4vLyBEb2N1bWVudCBkZXRhaWwgYWN0aW9uc1xuZXhwb3J0IGNvbnN0IHJlY2VpdmVEb2N1bWVudERldGFpbCA9IChqc29uLCBpZCkgPT4gKHtcbiAgdHlwZTogUkVDRUlWRV9ET0NVTUVOVERFVEFJTCxcbiAgZG9jdW1lbnQ6IGpzb24sXG4gIGlkOiBpZCxcbiAgcmVjZWl2ZWRBdDogRGF0ZS5ub3coKVxufSlcblxuLy8gVGhpcyBpcyBjYWxsZWQgYnkgZmV0Y2goKSBpbiBmZXRjaERvY3VtZW50RGV0YWlsKClcbi8vIFdlIGRpc3BhdGNoIFJFQ0VJVkVfRE9DVU1FTlRERVRBSUwsIFRPR0dMRV9TUElOTkVSICYgT1BFTl9ET0NVTUVOVFxuZXhwb3J0IGNvbnN0IHJlY2VpdmVEb2N1bWVudERldGFpbEFjdGlvbnMgPSAoanNvbiwgaWQpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChyZWNlaXZlRG9jdW1lbnREZXRhaWwoanNvbixpZCkpXG4gIGRpc3BhdGNoKHRvZ2dsZVNwaW5uZXIoaWQpKVxuICBkaXNwYXRjaChvcGVuRG9jdW1lbnQoaWQpKVxufVxuXG5jb25zdCBnZXRVcmxEb2N1bWVudERldGFpbCA9IChpZCkgPT4gKFwiL2RvY3VtZW50YXJ0aWNsZXMvXCIgKyBpZClcblxuZXhwb3J0IGNvbnN0IGZldGNoRG9jdW1lbnREZXRhaWwgPSAoaWQpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgdmFyIGFscmVhZHlPcGVuZWQgPSBmYWxzZTtcbiAgZ2V0U3RhdGUoKS5kb2N1bWVudHMuaXRlbXMuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgaWYgKGRvYy5JZCA9PT0gaWQgJiYgZG9jLm9wZW5pbmcpIHtcbiAgICAgIGFscmVhZHlPcGVuZWQgPSB0cnVlXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0pXG4gIGlmICghYWxyZWFkeU9wZW5lZCkge1xuICAgIGRpc3BhdGNoKHRvZ2dsZVNwaW5uZXIoaWQpKVxuICAgIHJldHVybiBmZXRjaCggZ2V0VXJsRG9jdW1lbnREZXRhaWwoaWQpIClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4gZGlzcGF0Y2gocmVjZWl2ZURvY3VtZW50RGV0YWlsQWN0aW9ucyhqc29uLCBpZCkpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gZXJyb3IucmVzcG9uc2UgPyBlcnJvci5yZXNwb25zZS5zdGF0dXMgOiA1MDBcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hFcnJvcihzdGF0dXMpKVxuICAgICAgfSk7ICBcbiAgfVxufVxuXG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Zm9ybWF0RGVjaW1hbH0gZnJvbSAnLi4vc29saWRpdHkvbnVtYmVycydcblxuaW1wb3J0IERvY3VtZW50SXRlbURldGFpbCBmcm9tICcuLi9jb21wb25lbnRzL0RvY3VtZW50SXRlbURldGFpbCdcblxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSc7XG5cbmltcG9ydCB7IHRvZ2dsZURvY3VtZW50LFxuICBmZXRjaERvY3VtZW50RGV0YWlsIFxufSBmcm9tICcuLi9hY3Rpb25zL2luZGV4J1xuaW1wb3J0IHsgdGhyb3dzIH0gZnJvbSAnYXNzZXJ0JztcblxuY29uc3QgQ09SUl9ET0NfVFlQRSA9IC0yIC8vIGNvcnJlY3Rpb24gZG9jdW1lbnQgdHlwZVxuXG4vLyBEb2N1bWVudEl0ZW0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY2xhc3MgRG9jdW1lbnRJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyBob3ZlcjogZmFsc2UgfVxuICAgIHRoaXMub25Nb3VzZUVudGVySGFuZGxlciA9IHRoaXMub25Nb3VzZUVudGVySGFuZGxlci5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbk1vdXNlTGVhdmVIYW5kbGVyID0gdGhpcy5vbk1vdXNlTGVhdmVIYW5kbGVyLmJpbmQodGhpcylcbiAgICB0aGlzLm9uQ2hlY2tDbGljayA9IHRoaXMub25DaGVja0NsaWNrLmJpbmQodGhpcylcbiAgICB0aGlzLm9uT3BlbkRldGFpbCA9IHRoaXMub25PcGVuRGV0YWlsLmJpbmQodGhpcylcbiAgfVxuICBzaG91bGRDb21wb25lbnRVcGRhdGUoIG5leHRQcm9wcywgbmV4dFN0YXRlICkge1xuICAgIHJldHVybiBuZXh0UHJvcHMuZG9jdW1lbnQubGFzdFVwZGF0ZWQgIT09IHRoaXMucHJvcHMuZG9jdW1lbnQubGFzdFVwZGF0ZWQgfHwgdGhpcy5zdGF0ZS5ob3ZlciAhPT0gbmV4dFN0YXRlLmhvdmVyXG4gIH1cbiAgb25Nb3VzZUVudGVySGFuZGxlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaG92ZXI6IHRydWUgfSlcbiAgfVxuICBvbk1vdXNlTGVhdmVIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBob3ZlcjogZmFsc2UgfSlcbiAgfVxuICBvbkNoZWNrQ2xpY2soZXZlbnQpIHtcbiAgICBSZWFjdEdBLmV2ZW50KHtcbiAgICAgIGNhdGVnb3J5OiAnRG9jdW1lbnRzJyxcbiAgICAgIGFjdGlvbjogJ1RvZ2dsZSBkb2N1bWVudCcsXG4gICAgICBsYWJlbDogJydcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHRvZ2dsZURvY3VtZW50KGV2ZW50LnRhcmdldC52YWx1ZSkpXG4gIH1cblxuICBvbk9wZW5EZXRhaWwoaWQpIHtcbiAgICBSZWFjdEdBLmV2ZW50KHtcbiAgICAgIGNhdGVnb3J5OiAnRG9jdW1lbnQnLFxuICAgICAgYWN0aW9uOiAnT3BlbiBkZXRhaWwnLFxuICAgICAgbGFiZWw6ICdEb2N1bWVudCBkZXRhaWwnXG4gICAgfSk7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGZldGNoRG9jdW1lbnREZXRhaWwoaWQpKVxuICB9XG5cbiAgZ2V0SGlnaGxpZ2h0ZWRDb2xDbGFzcyhjb2wpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kb2N1bWVudHMub3JkZXIgPT09IGNvbCAmJiBcbiAgICAgICEodGhpcy5wcm9wcy5kb2N1bWVudCAmJiB0aGlzLnByb3BzLmRvY3VtZW50LmNoZWNrZWQpICYmIFxuICAgICAgIXRoaXMuc3RhdGUuaG92ZXIgPyBcbiAgICAgICd3My10aGVtZS1sNCcgOiAnJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnRJdGVtLnJlbmRlcigpXCIpXG4gICAgY29uc3QgZG9jID0gdGhpcy5wcm9wcy5kb2N1bWVudFxuICAgIGNvbnN0IGRvY1R5cGUgPSAoZG9jLlR5cGUgPT09IENPUlJfRE9DX1RZUEUpID8gJ0NvcnInIDogJ0ludiBWQVQnXG4gICAgY29uc3Qgb3BlbkRvY3VtZW50RGV0YWlsQW5pbSA9ICd3My1jZWxsIHczLWxlZnQgZG9jLWlkJyArICh0aGlzLnByb3BzLmRvY3VtZW50LnNwaW5uZXIgfHwgZmFsc2UgPyAnIHJlcXVlc3QtZG9jdW1lbnRkZXRhaWwtc3Bpbm5lcicgOiAnJylcbiAgICBcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widzMtcm93IFwiICsgKGRvYy5ldmVuID8gJ2Rpdi1yb3ctZ3JleScgOiAnJykgKyBcIiBcIiArICh0aGlzLnN0YXRlLmhvdmVyID8gJ3czLXRoZW1lLWwzJyA6ICcnKSArIFwiIFwiICsgKGRvYy5jaGVja2VkID8gJ3Jvdy1jaGVja2VkJyA6ICcnKX0gXG4gICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLm9uTW91c2VFbnRlckhhbmRsZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5vbk1vdXNlTGVhdmVIYW5kbGVyfT5cbiAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jZWxsIHczLWxlZnQgZG9jLWNoZWNrXCI+PGlucHV0IGNsYXNzTmFtZT1cImlucHV0LWNoZWNrYm94XCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlwiIHZhbHVlPXtkb2MuSWR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hlY2tDbGlja30gY2hlY2tlZD17ZG9jLmNoZWNrZWQgPyAnY2hlY2tlZCcgOiAnJ30vPjwvZGl2PlxuICAgICAgICAgIDxkaXYgb25DbGljaz17ICgpPT57dGhpcy5vbk9wZW5EZXRhaWwoZG9jLklkKX0gfT4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3BlbkRvY3VtZW50RGV0YWlsQW5pbX0+PHAgY2xhc3NOYW1lPSd0ZXh0LWFyIHAtY2VsbCB3aGl0ZXNwYWNlJz57dGhpcy5wcm9wcy5kb2N1bWVudC5zcGlubmVyIHx8IGZhbHNlID8gKCcnKSA6IChkb2MuSWQpIH08L3A+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3My1jZWxsIHczLWxlZnQgZG9jLW51bWJlciBcIiArIHRoaXMuZ2V0SGlnaGxpZ2h0ZWRDb2xDbGFzcygnbnVtYmVyJyl9PjxwIGNsYXNzTmFtZT1cInRleHQtYWwgcC1jZWxsIHdoaXRlc3BhY2VcIj57ZG9jLk51bWJlcn08L3A+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3My1jZWxsIHczLWxlZnQgZG9jLXR5cGUgXCIgKyAoZG9jLlR5cGUgPT09IC0xID8gJ2Rpdi1kb2Mtbm9ybScgOiAnZGl2LWRvYy1jb3JyJyl9PjxwIGNsYXNzTmFtZT1cInRleHQtYWMgcC1jZWxsIHdoaXRlc3BhY2VcIj57ZG9jVHlwZX08L3A+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3My1jZWxsIHczLWxlZnQgZG9jLW51bWJlciBcIiArIHRoaXMuZ2V0SGlnaGxpZ2h0ZWRDb2xDbGFzcygnZGF0ZScpfT48cCBjbGFzc05hbWU9XCJ0ZXh0LWFsIHAtY2VsbCB3aGl0ZXNwYWNlXCI+e2RvYy5EYXRlMX08L3A+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3My1jZWxsIHczLXJpZ2h0IGRvYy12YWwgXCIgKyB0aGlzLmdldEhpZ2hsaWdodGVkQ29sQ2xhc3MoJ2V4Y2lzZScpfT48cCBjbGFzc05hbWU9XCJ0ZXh0LWFyIHAtY2VsbCB3aGl0ZXNwYWNlXCI+e2Zvcm1hdERlY2ltYWwoZG9jLkV4Y2lzZSl9PC9wPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widzMtY2VsbCB3My1yaWdodCBkb2MtdmFsIFwiICsgdGhpcy5nZXRIaWdobGlnaHRlZENvbENsYXNzKCdicnV0dG8nKX0+PHAgY2xhc3NOYW1lPVwidGV4dC1hciBwLWNlbGwgd2hpdGVzcGFjZVwiPntmb3JtYXREZWNpbWFsKGRvYy5CcnV0dG8pfTwvcD48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInczLWNlbGwgdzMtcmlnaHQgZG9jLXZhbCBcIiArIHRoaXMuZ2V0SGlnaGxpZ2h0ZWRDb2xDbGFzcygnbmV0dG8nKX0+PHAgY2xhc3NOYW1lPVwidGV4dC1hciBwLWNlbGwgd2hpdGVzcGFjZVwiPntmb3JtYXREZWNpbWFsKGRvYy5OZXR0byl9PC9wPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widzMtY2VsbCB3My1yaWdodCBkb2MtbmlwIFwiICsgdGhpcy5nZXRIaWdobGlnaHRlZENvbENsYXNzKCdjdXN0bmlwJyl9PjxwIGNsYXNzTmFtZT1cInRleHQtYWwgcC1jZWxsIHdoaXRlc3BhY2VcIj57ZG9jLkN1c3RuaXB9PC9wPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widzMtcmVzdCBkb2MtY3VzdG9tZXJuYW1lMSB0ZXh0LWFsIFwiICsgdGhpcy5nZXRIaWdobGlnaHRlZENvbENsYXNzKCdjdXN0bmFtZTEnKX0+PHAgY2xhc3NOYW1lPVwicC1jZWxsIHdoaXRlc3BhY2VcIiBzdHlsZT17e21pbldpZHRoOiBcIjIwMHB4XCJ9fT57ZG9jLkN1c3RuYW1lMX08L3A+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7KGRvYy5vcGVuaW5nIHx8IGRvYy5jbG9zaW5nKSA/ICg8RG9jdW1lbnRJdGVtRGV0YWlsIFxuICAgICAgICAgICAgZG9jdW1lbnQ9e3RoaXMucHJvcHMuZG9jdW1lbnR9IFxuICAgICAgICAgICAgLy9vbkNsb3NlRGV0YWlsPXsoaWQpPT57dGhpcy5wcm9wcy5vbkNsb3NlRGV0YWlsKGlkKX19XG4gICAgICAgICAgICBhcnRpY2xlcz17dGhpcy5wcm9wcy5hcnRpY2xlc30vPikgOiAoJycpfVxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICB9XG59XG5cbi8vZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRJdGVtXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhcnRpY2xlczogc3RhdGUuYXJ0aWNsZXMsXG4gICAgZG9jdW1lbnRzOiBzdGF0ZS5kb2N1bWVudHNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG51bGxcbikoRG9jdW1lbnRJdGVtKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnXG4vL2ltcG9ydCB7Zm9ybWF0RGVjaW1hbCwgcm91bmRGbG9hdH0gZnJvbSAnLi4vc29saWRpdHkvbnVtYmVycydcblxuaW1wb3J0IERvY3VtZW50SXRlbURldGFpbE51bWJlciBmcm9tICcuLi9jb21wb25lbnRzL0RvY3VtZW50SXRlbURldGFpbE51bWJlcidcbmltcG9ydCBEb2N1bWVudEl0ZW1EZXRhaWxIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Eb2N1bWVudEl0ZW1EZXRhaWxIZWFkZXInXG5pbXBvcnQgRG9jdW1lbnRJdGVtRGV0YWlsQXJ0aWNsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9Eb2N1bWVudEl0ZW1EZXRhaWxBcnRpY2xlcydcbmltcG9ydCBEb2N1bWVudEl0ZW1EZXRhaWxGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Eb2N1bWVudEl0ZW1EZXRhaWxGb290ZXInXG5pbXBvcnQgeyBjbG9zZURvY3VtZW50IH0gZnJvbSAnLi4vYWN0aW9ucydcblxuLy8gRG9jdW1lbnRJdGVtRGV0YWlsICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNsYXNzIERvY3VtZW50SXRlbURldGFpbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHsgICAgICBcbiAgICAgIGNsYXNzTmFtZUFuaW06IHByb3BzLmRvY3VtZW50Lm9wZW5pbmcgPyBcImRvYy1vcGVuaW5nXCIgOiBcImRvYy1jbG9zaW5nXCJcbiAgICB9XG4gICAgdGhpcy5vbkNsb3NlID0gdGhpcy5vbkNsb3NlLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZG9jdW1lbnQub3BlbmluZyAhPT0gbmV4dFByb3BzLmRvY3VtZW50Lm9wZW5pbmcpXG4gICAgICB0aGlzLnNldFN0YXRlKCB7XG4gICAgICAgIGNsYXNzTmFtZUFuaW06IG5leHRQcm9wcy5kb2N1bWVudC5vcGVuaW5nID8gXCJkb2Mtb3BlbmluZ1wiIDogXCJkb2MtY2xvc2luZ1wiLFxuICAgICAgfSlcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgUmVhY3RHQS5ldmVudCh7XG4gICAgICBjYXRlZ29yeTogJ0RvY3VtZW50JyxcbiAgICAgIGFjdGlvbjogJ0Nsb3NlIGRldGFpbCcsXG4gICAgICBsYWJlbDogJ0RvY3VtZW50IGRldGFpbCdcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGNsb3NlRG9jdW1lbnQodGhpcy5wcm9wcy5kb2N1bWVudC5JZCkpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coXCJEb2N1bWVudEl0ZW1EZXRhaWwucmVuZGVyKClcIilcbiAgICBcbiAgICAvL2NvbnN0IGQgPSB0aGlzLnByb3BzLmRvY3VtZW50XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1widzMtY2FyZCB3My1sZWZ0YmFyIHczLWJvcmRlci1ncmV5IGRpdi1kZXRhaWwgXCIgKyB0aGlzLnN0YXRlLmNsYXNzTmFtZUFuaW19PlxuXG4gICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMub25DbG9zZX0gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLWRpc3BsYXktdG9wcmlnaHRcIj54PC9zcGFuPlxuXG4gICAgICAgIDxEb2N1bWVudEl0ZW1EZXRhaWxOdW1iZXIgZG9jdW1lbnQ9e3RoaXMucHJvcHMuZG9jdW1lbnR9Lz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1wYWRkaW5nLXNtYWxsXCI+XG4gICAgICAgICAgPERvY3VtZW50SXRlbURldGFpbEhlYWRlciBkb2N1bWVudD17dGhpcy5wcm9wcy5kb2N1bWVudH0vPlxuICAgICAgICAgIDxEb2N1bWVudEl0ZW1EZXRhaWxBcnRpY2xlcyBkb2N1bWVudD17dGhpcy5wcm9wcy5kb2N1bWVudH0gYXJ0aWNsZXM9e3RoaXMucHJvcHMuYXJ0aWNsZXN9Lz5cbiAgICAgICAgICA8RG9jdW1lbnRJdGVtRGV0YWlsRm9vdGVyIGRvY3VtZW50PXt0aGlzLnByb3BzLmRvY3VtZW50fSBhcnRpY2xlcz17dGhpcy5wcm9wcy5hcnRpY2xlc30vPiBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICB9ICBcbn1cblxuLy9leHBvcnQgZGVmYXVsdCBEb2N1bWVudEl0ZW1EZXRhaWxcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG51bGwsXG4gIG51bGxcbikoRG9jdW1lbnRJdGVtRGV0YWlsKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Zm9ybWF0RGVjaW1hbH0gZnJvbSAnLi4vc29saWRpdHkvbnVtYmVycydcblxuY2xhc3MgRG9jdW1lbnRJdGVtRGV0YWlsQXJ0aWNsZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlckFydGljbGVzKCkge1xuICAgICAgdmFyIGlkID0gMVxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYXJ0aWNsZXMuaXRlbXNbdGhpcy5wcm9wcy5kb2N1bWVudC5JZF0uYXJ0aWNsZXMubWFwKChhcnQsaykgPT4gKCAgICAgIFxuICAgICAgICA8dHIga2V5PXtrfT5cbiAgICAgICAgICA8dGQ+e2lkKyt9PC90ZD4gICAgICBcbiAgICAgICAgICA8dGQ+e2FydC5BcnRuYW1lMX08L3RkPlxuICAgICAgICAgIDx0ZD48cCBjbGFzc05hbWU9XCJ0ZXh0LWFyIGFydC1jZWxsXCI+e2Zvcm1hdERlY2ltYWwoYXJ0LkFydHByaWNlKX08L3A+PC90ZD5cbiAgICAgICAgICA8dGQ+e2FydC5BcnR0YXhsYWJlbH08L3RkPlxuICAgICAgICAgIDx0ZD57YXJ0LkFydHVuaXR9PC90ZD5cbiAgICAgICAgICA8dGQ+PHAgY2xhc3NOYW1lPVwidGV4dC1hciBhcnQtY2VsbFwiPntmb3JtYXREZWNpbWFsKGFydC5RdWFudGl0eSl9PC9wPjwvdGQ+XG4gICAgICAgICAgPHRkPjxwIGNsYXNzTmFtZT1cInRleHQtYXIgYXJ0LWNlbGxcIj57Zm9ybWF0RGVjaW1hbChhcnQuTmV0dG92YWx1ZSl9PC9wPjwvdGQ+XG4gICAgICAgICAgPHRkPjxwIGNsYXNzTmFtZT1cInRleHQtYXIgYXJ0LWNlbGxcIj57Zm9ybWF0RGVjaW1hbChhcnQuQnJ1dHRvdmFsdWUpfTwvcD48L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgKSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNlbGwtcm93XCI+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInczLXRhYmxlLWFsbFwiPjx0Ym9keT5cbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ3My15ZWxsb3dcIj5cbiAgICAgICAgICAgICAgPHRoPk5tYjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5BcnRpY2xlJ3MgbmFtZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5UYXggUmF0ZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Vbml0PC90aD5cbiAgICAgICAgICAgICAgPHRoPlF0eTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5OZXR0bzwvdGg+XG4gICAgICAgICAgICAgIDx0aD5CcnV0dG88L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmFydGljbGVzLml0ZW1zID8gdGhpcy5yZW5kZXJBcnRpY2xlcygpIDogJyd9XG4gICAgICAgICAgPC90Ym9keT48L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50SXRlbURldGFpbEFydGljbGVzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtmb3JtYXREZWNpbWFsLCByb3VuZEZsb2F0fSBmcm9tICcuLi9zb2xpZGl0eS9udW1iZXJzJ1xuXG5jbGFzcyBEb2N1bWVudEl0ZW1EZXRhaWxGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlckludkZvb3RlcigpIHtcbiAgICB2YXIgdEJydXR0byA9IDA7XG4gICAgdmFyIHROZXR0byA9IDA7XG5cbiAgICBjb25zdCBhcnRpY2xlcyA9IHRoaXMucHJvcHMuYXJ0aWNsZXMuaXRlbXNbdGhpcy5wcm9wcy5kb2N1bWVudC5JZF0uYXJ0aWNsZXNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0QnJ1dHRvICs9IHBhcnNlRmxvYXQoYXJ0aWNsZXNbaV0uQnJ1dHRvdmFsdWUpXG4gICAgICB0TmV0dG8gKz0gcGFyc2VGbG9hdChhcnRpY2xlc1tpXS5OZXR0b3ZhbHVlKVxuICAgIH1cblxuICAgIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPVwidzMtdGFibGUgdzMtc3RyaXBlZFwiPjx0Ym9keT5cbiAgICAgICAgPHRyPjx0aCBjbGFzc05hbWU9XCJ3My1yaWdodC1hbGlnbiB3My1wYWRkaW5nLXNtYWxsXCI+VG90YWwgTmV0dG88L3RoPjx0aCBjbGFzc05hbWU9XCJ3My1yaWdodC1hbGlnbiB3My1wYWRkaW5nLXNtYWxsXCI+VG90YWwgQnJ1dHRvPC90aD48L3RyPlxuICAgICAgICA8dHI+PHRkIGNsYXNzTmFtZT1cInczLXJpZ2h0LWFsaWduIHczLXBhZGRpbmctc21hbGxcIj57Zm9ybWF0RGVjaW1hbChyb3VuZEZsb2F0KHROZXR0bywyKSl9PC90ZD48dGQgY2xhc3NOYW1lPVwidzMtcmlnaHQtYWxpZ24gdzMtcGFkZGluZy1zbWFsbFwiPntmb3JtYXREZWNpbWFsKHJvdW5kRmxvYXQodEJydXR0bywgMikpfTwvdGQ+PC90cj5cbiAgICAgIDwvdGJvZHk+PC90YWJsZT47ICAgIFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNlbGwtcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtdGhpcmQgdzMtcmlnaHRcIj5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJJbnZGb290ZXIoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50SXRlbURldGFpbEZvb3RlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgSGVhZGVySXRlbSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY2VsbFwiIHN0eWxlPXt7d2lkdGg6IFwiNTAlXCJ9fT4gICAgXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidzMtdGV4dC1ncmF5XCI+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidzMtaW5wdXQgdzMtcGFkZGluZy1zbWFsbFwiIHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXtwcm9wcy52YWx1ZX0vPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEhlYWRlckl0ZW1DdXN0ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoPGRpdj5cbiAgICA8bGFiZWwgY2xhc3NOYW1lPVwidzMtdGV4dC1ncmF5XCI+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XG4gICAgPGlucHV0IGNsYXNzTmFtZT1cInczLWlucHV0IHczLXBhZGRpbmctc21hbGxcIiB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT17cHJvcHMudmFsdWV9Lz5cbiAgPC9kaXY+KVxufVxuXG5jb25zdCBEb2N1bWVudEl0ZW1EZXRhaWxIZWFkZXIgPSAocHJvcHMpID0+IHtcblxuICBjb25zb2xlLmxvZyhwcm9wcy5kb2N1bWVudC5EYXRlMSlcblxuICByZXR1cm4gKCAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNlbGwtcm93XCI+XG4gIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtY2VsbCB3My1tb2JpbGUgdzMtcGFkZGluZy1zbWFsbFwiIHN0eWxlPXt7d2lkdGg6IFwiNTAlXCJ9fT5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLXBhZGRpbmctc21hbGxcIj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY2VsbC1yb3dcIj5cbiAgICAgICAgICAgIDxIZWFkZXJJdGVtIGxhYmVsPVwiRG9jdW1lbnQgbm1iXCIgdmFsdWU9e3Byb3BzLmRvY3VtZW50Lk51bWJlcn0vPlxuICAgICAgICAgICAgPEhlYWRlckl0ZW0gbGFiZWw9XCJQbGFjZSBvZiBJbnZvaWNlXCIgdmFsdWU9e3Byb3BzLmRvY3VtZW50LkxvY2F0aW9ufS8+ICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNlbGwtcm93XCI+XG4gICAgICAgICAgICA8SGVhZGVySXRlbSBsYWJlbD1cIkRhdGVcIiB2YWx1ZT17cHJvcHMuZG9jdW1lbnQuRGF0ZTF9Lz5cbiAgICAgICAgICAgIDxIZWFkZXJJdGVtIGxhYmVsPVwiUGF5bWVudFwiIHZhbHVlPXtwcm9wcy5kb2N1bWVudC5QYXltZXRob2R9Lz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY2VsbC1yb3dcIj5cbiAgICAgICAgICAgIDxIZWFkZXJJdGVtIGxhYmVsPVwiUGVyaW9kIGZyb206XCIgdmFsdWU9e3Byb3BzLmRvY3VtZW50LlBlcmlvZC5TdGFydGRhdGUxfS8+XG4gICAgICAgICAgICA8SGVhZGVySXRlbSBsYWJlbD1cIlBlcmlvZCB0bzpcIiB2YWx1ZT17cHJvcHMuZG9jdW1lbnQuUGVyaW9kLkVuZGRhdGUxfS8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY2VsbCB3My1tb2JpbGUgdzMtcGFkZGluZy1zbWFsbFwiIHN0eWxlPXt7d2lkdGg6IFwiNTAlXCJ9fT5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidzMtcGFkZGluZy1zbWFsbFwiPlxuICAgICAgICAgIDxIZWFkZXJJdGVtQ3VzdCBsYWJlbD1cIkN1c3RvbWVyIE5hbWUgMVwiIHZhbHVlPXtwcm9wcy5kb2N1bWVudC5DdXN0bmFtZTF9Lz5cbiAgICAgICAgICA8SGVhZGVySXRlbUN1c3QgbGFiZWw9XCJDdXN0b21lciBOYW1lIDJcIiB2YWx1ZT17cHJvcHMuZG9jdW1lbnQuQ3VzdG5hbWUyfS8+XG4gICAgICAgICAgPEhlYWRlckl0ZW1DdXN0IGxhYmVsPVwiVkFUIElEXCIgdmFsdWU9e3Byb3BzLmRvY3VtZW50LkN1c3RuaXB9Lz5cbiAgICAgICAgICA8SGVhZGVySXRlbUN1c3QgbGFiZWw9XCJJbnRlcm5hbCBBY2NvdW50IE5tYlwiIHZhbHVlPXtwcm9wcy5kb2N1bWVudC5DdXN0YWNjbm1ifS8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50SXRlbURldGFpbEhlYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgRG9jdW1lbnRJdGVtRGV0YWlsTnVtYmVyID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtYW1iZXJcIj5cbiAgICAgIDxoNT5JbnZvaWNlIE5tYjoge3Byb3BzLmRvY3VtZW50Lm51bWJlcn08L2g1PlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50SXRlbURldGFpbE51bWJlclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuLy8gQXBwbGljYXRpb24gY29tcG9uZW50c1xuaW1wb3J0IERvY3VtZW50SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL0RvY3VtZW50SXRlbSdcbmltcG9ydCBUYWJsZU5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9UYWJsZU5hdmlnYXRpb24nXG5pbXBvcnQgVGFibGVIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJsZUhlYWRlcidcblxuaW1wb3J0IHtBcHBDb250ZXh0LCB0aGVtZXN9IGZyb20gJy4vYXBwLWNvbnRleHQnO1xuXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwuY3NzJ1xuXG4vLyBEb2N1bWVudExpc3QgbWFpbiBjb250YWluZXIgY29tcG9uZW50ICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNsYXNzIERvY3VtZW50TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBcbiAgICB0aGlzLnN0YXRlID0ge2NvbnRleHQ6IHtcbiAgICAgIHRoZW1lOiB0aGVtZXMubGlnaHQsXG4gICAgfX1cbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuc3RhdGUuY29udGV4dC50aGVtZS5iYWNrZ3JvdW5kOyBcblxuICAgIHRoaXMudG9nZ2xlVGhlbWUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICAgIGNvbnRleHQ6IHt0aGVtZTpcbiAgICAgICAgICBzdGF0ZS5jb250ZXh0LnRoZW1lID09PSB0aGVtZXMuZGFya1xuICAgICAgICAgICAgPyB0aGVtZXMubGlnaHRcbiAgICAgICAgICAgIDogdGhlbWVzLmRhcmssXG4gICAgICB9fSkpO1xuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coXCJEb2N1bWVudExpc3QucmVuZGVyKClcIilcblxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5zdGF0ZS5jb250ZXh0LnRoZW1lLmJhY2tncm91bmQ7XG4gICAgLy93My1tZWRpdW1cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyXCI+XG5cbiAgICAgICAgPGJ1dHRvbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5jb250ZXh0LnRoZW1lLmJhY2tncm91bmR9fSBvbkNsaWNrPXt0aGlzLnRvZ2dsZVRoZW1lfT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbW9vblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiBkYXJrIG1vZGU8L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRleHR9PlxuICAgICAgICAgIDxUYWJsZU5hdmlnYXRpb24vPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYm9yZGVyIHczLXJvdW5kXCI+XG4gICAgICAgICAgICAgIDxUYWJsZUhlYWRlci8+XG4gICAgICAgICAgICAgIHsvKiBMaXN0IG9mIGRvY3VtZW50cyAqL31cbiAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmRvY3VtZW50cy5pdGVtcy5tYXAoIChkb2N1bWVudCk9PihcbiAgICAgICAgICAgICAgICA8RG9jdW1lbnRJdGVtIFxuICAgICAgICAgICAgICAgICAga2V5PXtkb2N1bWVudC5JZH0gXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudD17ZG9jdW1lbnR9Lz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvY3VtZW50czogc3RhdGUuZG9jdW1lbnRzXG4gICAgfX1cbikoRG9jdW1lbnRMaXN0KVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnO1xuXG5pbXBvcnQge0FwcENvbnRleHR9IGZyb20gJy4vYXBwLWNvbnRleHQnO1xuXG5pbXBvcnQgeyBcbiAgY2hhbmdlT3JkZXIsIFxuICB0b2dnbGVBbGxEb2N1bWVudHMsXG4gIGludmFsaWRhdGVEb2N1bWVudHMsXG4gIGZldGNoRG9jdW1lbnRzSWZOZWVkZWRcbiB9IGZyb20gJy4uL2FjdGlvbnMnXG5cblxuLy8gVGFibGVIZWFkZXIgY29tcG9uZW50ICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNsYXNzIFRhYmxlSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMub25DaGFuZ2VPcmRlciA9IHRoaXMub25DaGFuZ2VPcmRlci5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblRvb2dsZUFsbERvY3VtZW50cyA9IHRoaXMub25Ub29nbGVBbGxEb2N1bWVudHMuYmluZCh0aGlzKVxuICB9XG5cbiAgb25DaGFuZ2VPcmRlcihjb2wpIHtcbiAgICBSZWFjdEdBLmV2ZW50KHtcbiAgICAgIGNhdGVnb3J5OiAnRG9jdW1lbnRzJyxcbiAgICAgIGFjdGlvbjogJ0NoYW5nZSBvcmRlcjogJyArIGNvbCxcbiAgICAgIGxhYmVsOiAnU29ydGluZydcbiAgICB9KTtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goY2hhbmdlT3JkZXIoY29sKSlcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGludmFsaWRhdGVEb2N1bWVudHMoKSlcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGZldGNoRG9jdW1lbnRzSWZOZWVkZWQoKSlcbiAgfVxuXG4gIGdldE9yZGVyRWxlbWVudChvcmRlcikge1xuICAgIGNvbnN0IGVsID0gICh0aGlzLnByb3BzLmRvY3VtZW50cy5vcmRlciA9PT0gb3JkZXIgPyAodGhpcy5wcm9wcy5kb2N1bWVudHMuZGlyT3JkZXIgPT09ICdhc2MnID8gMSA6IDIpIDogMClcbiAgICBpZiAoIWVsKSByZXR1cm4gJydcbiAgICByZXR1cm4gZWwgPT09IDEgPyA8aSBjbGFzc05hbWU9XCJmYSBmYS1zb3J0LWFtb3VudC1hc2MgdzMtcGFkZGluZy1zbWFsbFwiIHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCJ9fWFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gOiA8aSBjbGFzc05hbWU9XCJmYSBmYS1zb3J0LWFtb3VudC1kZXNjIHczLXBhZGRpbmctc21hbGxcIiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwifX1hcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gIH1cblxuICBvblRvb2dsZUFsbERvY3VtZW50cyhldmVudCkge1xuICAgIFJlYWN0R0EuZXZlbnQoe1xuICAgICAgY2F0ZWdvcnk6ICdEb2N1bWVudHMnLFxuICAgICAgYWN0aW9uOiAnVG9nZ2xlIGFsbCBkb2N1bWVudHMnLFxuICAgICAgbGFiZWw6ICcnXG4gICAgfSk7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHRvZ2dsZUFsbERvY3VtZW50cyhldmVudC50YXJnZXQuY2hlY2tlZCkpXG4gIH1cblxuICBnZXRIaWdobGlnaHRlZENvbENsYXNzKGNvbCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmRvY3VtZW50cy5vcmRlciA9PT0gY29sID8gJ3czLXRoZW1lLWQyJyA6ICcnXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnRMaXN0LnJlbmRlcigpXCIpXG4gICAgY29uc3QgcmVsb2FkQW5pbUNsYXNzID0gJ3czLXBhZGRpbmctc21hbGwgZmEgZmEtcmVmcmVzaCcgKyAodGhpcy5wcm9wcy5kb2N1bWVudHMgJiYgdGhpcy5wcm9wcy5kb2N1bWVudHMuaXNGZXRjaGluZyA/ICcgdzMtc3BpbicgOiAnJylcbiAgICBcbiAgICBsZXQgdGhlbWUgPSB0aGlzLmNvbnRleHQudGhlbWU7XG4gICAgY29uc3QgbWFpbkNsYXNzID0gdGhlbWUudGhlYWQgKyAnIHczLXJvdyAgdzMtdGV4dC13aGl0ZSdcblxuICAgIHJldHVybiAgPGRpdiBjbGFzc05hbWU9e21haW5DbGFzc30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29sIHczLWxlZnQgZG9jLWNoZWNrXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImlucHV0LWNoZWNrYm94XCIgbmFtZT1cIlwiIHZhbHVlPVwiXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5kb2N1bWVudHMuYWxsU2VsZWN0ZWRJdGVtc30gb25DaGFuZ2U9eyhlKT0+KHRoaXMub25Ub29nbGVBbGxEb2N1bWVudHMoZSkpfS8+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29sIHczLWxlZnQgZG9jLWlkXCI+PHAgY2xhc3NOYW1lPVwidGV4dC1hciBwLWNlbGxcIj5pZDwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3Zlci1kaXZcIj48ZGl2IGNsYXNzTmFtZT17XCJ3My1jb2wgdzMtbGVmdCBkb2MtbnVtYmVyIFwiICsgdGhpcy5nZXRIaWdobGlnaHRlZENvbENsYXNzKCdudW1iZXInKX0gb25DbGljaz17KCk9PnRoaXMub25DaGFuZ2VPcmRlcignbnVtYmVyJyl9PjxwIGNsYXNzTmFtZT1cInRleHQtYWwgcC1jZWxsXCI+SW52IE5tYiB7dGhpcy5nZXRPcmRlckVsZW1lbnQoJ251bWJlcicpfSA8L3A+PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29sIHczLWxlZnQgZG9jLXR5cGVcIj48cCBjbGFzc05hbWU9XCJ0ZXh0LWFjIHAtY2VsbFwiPkludiBUeXBlPC9wPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyLWRpdlwiPjxkaXYgY2xhc3NOYW1lPXtcInczLWNvbCB3My1sZWZ0IGRvYy1udW1iZXIgXCIgKyB0aGlzLmdldEhpZ2hsaWdodGVkQ29sQ2xhc3MoJ2RhdGUnKX0gb25DbGljaz17KCk9PnRoaXMub25DaGFuZ2VPcmRlcignZGF0ZScpfT48cCBjbGFzc05hbWU9XCJ0ZXh0LWFsIHAtY2VsbFwiPkRhdGUge3RoaXMuZ2V0T3JkZXJFbGVtZW50KCdkYXRlJyl9PC9wPjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyLWRpdlwiPjxkaXYgY2xhc3NOYW1lPXtcInczLWNvbCB3My1yaWdodCBkb2MtdmFsIFwiICsgdGhpcy5nZXRIaWdobGlnaHRlZENvbENsYXNzKCdleGNpc2UnKX0gb25DbGljaz17KCk9PnRoaXMub25DaGFuZ2VPcmRlcignZXhjaXNlJyl9PjxwIGNsYXNzTmFtZT1cInRleHQtYWwgcC1jZWxsXCI+RXhjaXNlIHt0aGlzLmdldE9yZGVyRWxlbWVudCgnZXhjaXNlJyl9PC9wPjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyLWRpdlwiPjxkaXYgY2xhc3NOYW1lPXtcInczLWNvbCB3My1yaWdodCBkb2MtdmFsIFwiICsgdGhpcy5nZXRIaWdobGlnaHRlZENvbENsYXNzKCdicnV0dG8nKX0gb25DbGljaz17KCk9PnRoaXMub25DaGFuZ2VPcmRlcignYnJ1dHRvJyl9PjxwIGNsYXNzTmFtZT1cInRleHQtYWwgcC1jZWxsXCI+QnJ1dHRvIHt0aGlzLmdldE9yZGVyRWxlbWVudCgnYnJ1dHRvJyl9PC9wPjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyLWRpdlwiPjxkaXYgY2xhc3NOYW1lPXtcInczLWNvbCB3My1yaWdodCBkb2MtdmFsIFwiICsgdGhpcy5nZXRIaWdobGlnaHRlZENvbENsYXNzKCduZXR0bycpfSBvbkNsaWNrPXsoKT0+dGhpcy5vbkNoYW5nZU9yZGVyKCduZXR0bycpfT48cCBjbGFzc05hbWU9XCJ0ZXh0LWFsIHAtY2VsbFwiPk5ldHRvIHt0aGlzLmdldE9yZGVyRWxlbWVudCgnbmV0dG8nKX08L3A+PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXItZGl2XCI+PGRpdiBjbGFzc05hbWU9e1widzMtY29sIHczLXJpZ2h0IGRvYy1uaXAgXCIgKyB0aGlzLmdldEhpZ2hsaWdodGVkQ29sQ2xhc3MoJ2N1c3RuaXAnKX0gb25DbGljaz17KCk9PnRoaXMub25DaGFuZ2VPcmRlcignY3VzdG5pcCcpfT48cCBjbGFzc05hbWU9XCJ0ZXh0LWFsIHAtY2VsbFwiPlZBVCBJRCB7dGhpcy5nZXRPcmRlckVsZW1lbnQoJ2N1c3RuaXAnKX08L3A+PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXItZGl2XCI+PGRpdiBjbGFzc05hbWU9e1widzMtcmVzdCB0ZXh0LWFsIFwiICsgdGhpcy5nZXRIaWdobGlnaHRlZENvbENsYXNzKCdjdXN0bmFtZTEnKX0gb25DbGljaz17KCk9PnRoaXMub25DaGFuZ2VPcmRlcignY3VzdG5hbWUxJyl9PjxwIGNsYXNzTmFtZT1cInAtY2VsbFwiPkN1c3RvbWVyIHt0aGlzLmdldE9yZGVyRWxlbWVudCgnY3VzdG5hbWUxJyl9PC9wPjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cblRhYmxlSGVhZGVyLmNvbnRleHRUeXBlID0gQXBwQ29udGV4dDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvY3VtZW50czogc3RhdGUuZG9jdW1lbnRzXG4gICAgfX1cbikoVGFibGVIZWFkZXIpXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSc7XG5cbmltcG9ydCB7QXBwQ29udGV4dH0gZnJvbSAnLi9hcHAtY29udGV4dCc7XG5cbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5jc3MnXG5cbmltcG9ydCB7IFxuICBmZXRjaERvY3VtZW50c0lmTmVlZGVkLCBcbiAgaW52YWxpZGF0ZURvY3VtZW50cywgXG4gIHByZXZQYWdlLCBcbiAgbmV4dFBhZ2UsIFxuICBjbG9zZUFsbERvY3VtZW50cyxcbiB9IGZyb20gJy4uL2FjdGlvbnMnXG5cbi8vIFRhYmxlTmF2aWdhdGlvbiBjb21wb25lbnQgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY2xhc3MgVGFibGVOYXZpZ2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5vblByZXZQYWdlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBSZWFjdEdBLmV2ZW50KHtcbiAgICAgICAgY2F0ZWdvcnk6ICdOYXZpZ2F0aW9uJyxcbiAgICAgICAgYWN0aW9uOiAnUHJldiBwYWdlJyxcbiAgICAgICAgbGFiZWw6ICdUb3AgbmF2aWdhdGlvbidcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChwcmV2UGFnZSgpKVxuICAgICAgdGhpcy5yZWZyZXNoRGF0YSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbk5leHRQYWdlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBSZWFjdEdBLmV2ZW50KHtcbiAgICAgICAgY2F0ZWdvcnk6ICdOYXZpZ2F0aW9uJyxcbiAgICAgICAgYWN0aW9uOiAnTmV4dCBwYWdlJyxcbiAgICAgICAgbGFiZWw6ICdUb3AgbmF2aWdhdGlvbidcbiAgICAgIH0pO1xuICBcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gobmV4dFBhZ2UoKSlcbiAgICAgIHRoaXMucmVmcmVzaERhdGEoKVxuICAgIH1cbiAgICBcbiAgICB0aGlzLm9uQ2xvc2VBbGxEb2N1bWVudHMgPSAoKSA9PiB7XG4gICAgICBSZWFjdEdBLmV2ZW50KHtcbiAgICAgICAgY2F0ZWdvcnk6ICdEb2N1bWVudCcsXG4gICAgICAgIGFjdGlvbjogJ0Nsb3NlIGFsbCBkb2N1bWVudHMnLFxuICAgICAgICBsYWJlbDogJ0RvY3VtZW50IGRldGFpbCdcbiAgICAgIH0pO1xuICBcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goY2xvc2VBbGxEb2N1bWVudHMoKSlcbiAgICB9XG4gIFxuICAgIHRoaXMub25SZWZyZXNoQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBSZWFjdEdBLmV2ZW50KHtcbiAgICAgICAgY2F0ZWdvcnk6ICdOYXZpZ2F0aW9uJyxcbiAgICAgICAgYWN0aW9uOiAnUmVmcmVzaCcsXG4gICAgICAgIGxhYmVsOiAnVG9wIG5hdmlnYXRpb24nXG4gICAgICB9KTtcbiAgXG4gICAgICB0aGlzLnJlZnJlc2hEYXRhKClcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hEYXRhID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChpbnZhbGlkYXRlRG9jdW1lbnRzKCkpXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGZldGNoRG9jdW1lbnRzSWZOZWVkZWQoKSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGZldGNoRG9jdW1lbnRzSWZOZWVkZWQoKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIlRhYmxlTmF2aWdhdGlvbi5yZW5kZXIoKVwiKVxuXG4gICAgY29uc3QgcmVsb2FkQW5pbUNsYXNzID0gJ3czLXBhZGRpbmctc21hbGwgZmFzIGZhLXN5bmMnICsgKHRoaXMucHJvcHMuZG9jdW1lbnRzICYmIHRoaXMucHJvcHMuZG9jdW1lbnRzLmlzRmV0Y2hpbmcgPyAnIHczLXNwaW4nIDogJycpXG4gICAgY29uc3QgYnRuU3R5bGUgPSAndzMtYnV0dG9uIHczLWJvcmRlciB3My1yb3VuZCB3My1wYWRkaW5nLXNtYWxsIGJ1dHRvbi1tYXJnaW4gYnV0dG9uLXN0eWxlJ1xuXG4gICAgbGV0IHRoZW1lID0gdGhpcy5jb250ZXh0O1xuXG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXJcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YnRuU3R5bGV9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiB0aGVtZS50bmF2X2JhY2ssIGNvbG9yOiB0aGVtZS50bmF2X2ZvcmV9fSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMub25QcmV2UGFnZUNsaWNrfT5cbiAgICAgICAgICAgICAgQmFja3dhcmQ8aSBjbGFzc05hbWU9XCJ3My1wYWRkaW5nLXNtYWxsIGZhcyBmYS1hcnJvdy1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYT5cblxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtidG5TdHlsZX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnRuYXZfYmFjaywgY29sb3I6IHRoZW1lLnRuYXZfZm9yZX19IGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5vbk5leHRQYWdlQ2xpY2t9PlxuICAgICAgICAgICAgICBGb3J3YXJkPGkgY2xhc3NOYW1lPVwidzMtcGFkZGluZy1zbWFsbCBmYXMgZmEtYXJyb3ctcmlnaHRcIj48L2k+PC9hPlxuXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2J0blN0eWxlfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogdGhlbWUudG5hdl9iYWNrLCBjb2xvcjogdGhlbWUudG5hdl9mb3JlfX0gaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLm9uUmVmcmVzaENsaWNrfT5cbiAgICAgICAgICAgICAgUmVsb2FkPGkgY2xhc3NOYW1lPXtyZWxvYWRBbmltQ2xhc3N9PjwvaT48L2E+XG5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YnRuU3R5bGV9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiB0aGVtZS50bmF2X2JhY2ssIGNvbG9yOiB0aGVtZS50bmF2X2ZvcmV9fSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMub25DbG9zZUFsbERvY3VtZW50c30+XG4gICAgICAgICAgICAgIENsb3NlIGFsbDxpIGNsYXNzTmFtZT1cInczLXBhZGRpbmctc21hbGwgZmFzIGZhLXdpbmRvdy1jbG9zZVwiPjwvaT48L2E+XG5cbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5kb2N1bWVudHMuaXNGZXRjaEVycm9yID8gPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogdGhlbWUuZXJyX21zZ19iYWNrLCBjb2xvcjogdGhlbWUuZXJyX21zZ19mb3JlfX0gY2xhc3NOYW1lPVwiYnV0dG9uLW1hcmdpbiB3My1sZWZ0IHczLXBhZGRpbmctc21hbGwgZXJyb3JfbXNnXCI+T29wcywgbm8gcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyIG9yIGFuIHVuZXhwZWN0ZWQgZm9ybWF0IHJlY2VpdmVkPC9kaXY+IDogJycgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1tYXJnaW4gdzMtcmlnaHQgdzMtcGFkZGluZy1zbWFsbFwiPlBhZ2U6IHt0aGlzLnByb3BzLmRvY3VtZW50cyAmJiB0aGlzLnByb3BzLmRvY3VtZW50cy5pc0ZldGNoaW5nID8gJy4uJyA6IHRoaXMucHJvcHMuZG9jdW1lbnRzLnBhZ2VObWIgKyAxfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIH1cbn1cblxuVGFibGVOYXZpZ2F0aW9uLmNvbnRleHRUeXBlID0gQXBwQ29udGV4dDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvY3VtZW50czogc3RhdGUuZG9jdW1lbnRzXG4gICAgfX1cbikoVGFibGVOYXZpZ2F0aW9uKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IHRoZW1lcyA9IHtcbiAgbGlnaHQ6IHtcbiAgICBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsXG4gICAgYmFja2dyb3VuZDogJyNlZWVlZWUnLFxuICAgIHRuYXZfZm9yZTogICcjNjE2MTYxJyxcbiAgICB0bmF2X2JhY2s6ICAnI2VlZWVlZScsXG4gICAgZXJyX21zZ19mb3JlOiAnI2ZmZicsXG4gICAgZXJyX21zZ19iYWNrOiAnI2ZmNTcyMicsXG4gICAgdGhlYWQ6ICd3My10aGVtZS1kMScsXG4gIH0sXG4gIGRhcms6IHtcbiAgICBmb3JlZ3JvdW5kOiAnI2RkZGRkZCcsXG4gICAgYmFja2dyb3VuZDogJyMyMjIyMjInLFxuICAgIHRuYXZfZm9yZTogICcjYmJiYmJiJyxcbiAgICB0bmF2X2JhY2s6ICAnIzIyMjIyMicsXG4gICAgZXJyX21zZ19mb3JlOiAnI2ZmZicsXG4gICAgZXJyX21zZ19iYWNrOiAnIzgyMmUxNCcsXG4gICAgdGhlYWQ6ICd3My10aGVtZS1kNScsXG4gICAgXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoXG4gIHRoZW1lcy5saWdodCAvLyBkZWZhdWx0IHZhbHVlXG4pOyIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU3ZjM3MDI1ZDA0MjFjZGM0ZTBlNzA5ODlkZmIwMWVmLnN2Z1wiOyIsIi8vIFJlYWN0LCByZWR1eCBhbmQgdGh1bmtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcidcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnXG5pbXBvcnQgRG9jdW1lbnRMaXN0IGZyb20gJy4vY29tcG9uZW50cy9Eb2N1bWVudExpc3QnO1xuaW1wb3J0IHtBcHBDb250ZXh0fSBmcm9tICcuL2NvbXBvbmVudHMvYXBwLWNvbnRleHQnO1xuaW1wb3J0ICcuL2Nzcy9zdHlsZXMuY3NzJztcblxuLy8gRW5hYmxlIGxvZ2dlciBcbmNvbnN0IG1pZGRsZXdhcmUgPSBbIHRodW5rIF1cbmlmICggcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBtaWRkbGV3YXJlLnB1c2goY3JlYXRlTG9nZ2VyKCkpXG59XG5cbi8vIFJlZHV4IHN0b3JlXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICByZWR1Y2VyLFxuICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSlcbilcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT1cImRhcmtcIj5cbiAgICAgIDxEb2N1bWVudExpc3QgLz5cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gIDwvUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IFxuICAgIFJFUVVFU1RfRE9DVU1FTlRTLCBcbiAgICBSRUNFSVZFX0RPQ1VNRU5UUywgXG4gICAgSU5WQUxJREFURV9ET0NVTUVOVFMsIFxuICAgIE5FWFRfUEFHRSwgXG4gICAgUFJFVl9QQUdFLCBcbiAgICBDSEFOR0VfT1JERVIsXG4gICAgVE9HR0xFX0RPQ1VNRU5ULFxuICAgIFRPR0dMRV9BTExfRE9DVU1FTlRTLFxuICAgIFRPR0dMRV9TUElOTkVSLFxuICAgIE9QRU5fRE9DVU1FTlQsXG4gICAgQ0xPU0VfRE9DVU1FTlQsXG4gICAgQ0xPU0VfQUxMRE9DVU1FTlRTLFxuICAgIFJFQ0VJVkVfRE9DVU1FTlRERVRBSUwsXG4gICAgRkVUQ0hfRVJST1Jcbn0gZnJvbSAnLi4vYWN0aW9ucydcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgIGl0ZW1zOiBbXSxcbiAgICBzZWxlY3RlZEl0ZW1zOiBbXSxcbiAgICBhbGxTZWxlY3RlZEl0ZW1zOiBmYWxzZSxcbiAgICBsYXN0VXBkYXRlZDogJycsXG4gICAgZGlkSW52YWxpZGF0ZTogdHJ1ZSxcbiAgICBwYWdlTm1iOiAwLFxuICAgIHBhZ2VTaXplOiAyMCxcbiAgICBvcmRlcjogJ251bWJlcicsXG4gICAgZGlyT3JkZXI6ICdhc2MnLFxuICAgIGlzRmV0Y2hFcnJvcjogZmFsc2UsXG4gICAgZmV0Y2hFcnJvclN0YXR1czogMjAwXG59XG5cbi8vIERvY3VtZW50IGxpc3QgcmVkdWNlclxuY29uc3QgdXBkYXRlT3BlbiA9IChpZCwgaXRlbXMsIHJlY2VpdmVkQXQpID0+IHtcbiAgcmV0dXJuIGl0ZW1zLm1hcCggKGRvYykgPT4ge1xuICAgIGlmIChkb2MuSWQgPT09IGlkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5kb2MsXG4gICAgICAgIG9wZW5pbmc6IHRydWUsXG4gICAgICAgIGNsb3Npbmc6IGZhbHNlLFxuICAgICAgICBsYXN0VXBkYXRlZDogcmVjZWl2ZWRBdFxuICAgICAgfVxuICAgIH0gZWxzZSByZXR1cm4gZG9jXG4gIH0pXG59XG5cbmNvbnN0IHVwZGF0ZUNsb3NlID0gKGlkLCBpdGVtcywgcmVjZWl2ZWRBdCkgPT4ge1xuICByZXR1cm4gaXRlbXMubWFwKCAoZG9jKSA9PiB7XG4gICAgaWYgKGRvYy5JZCA9PT0gaWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmRvYyxcbiAgICAgICAgb3BlbmluZzogZmFsc2UsXG4gICAgICAgIGNsb3Npbmc6IHRydWUsXG4gICAgICAgIGxhc3RVcGRhdGVkOiByZWNlaXZlZEF0XG4gICAgICB9XG4gICAgfSBlbHNlIHJldHVybiBkb2MgXG4gIH0pXG59XG5cbmNvbnN0IHRvZ2dsZSA9IChzZWxlY3RlZEl0ZW1zLCBpdGVtcywgdG9nZ2xlRG9jdW1lbnRJZCwgcmVjZWl2ZWRBdCApID0+IHtcbiAgICAvLyBUbyBhdm9pZCBtdXRhYmlsaXR5XG4gICAgbGV0IG5ld1NlbGVjdGVkSXRlbXMgPSBzZWxlY3RlZEl0ZW1zLnNsaWNlKClcbiAgICAvLyBSb3cgaXMgc2VsZWN0ZWQgYW5kIHdpbGwgYmUgZGVzZWxlY3RlZFxuICAgIGlmICggbmV3U2VsZWN0ZWRJdGVtc1t0b2dnbGVEb2N1bWVudElkXSApXG4gICAgICAgIGRlbGV0ZShuZXdTZWxlY3RlZEl0ZW1zW3RvZ2dsZURvY3VtZW50SWRdKVxuICAgIC8vIFJvdyBpcyBub3Qgc2VsZWN0ZWQgYW5kIHdpbGwgYmUgc2VsZWN0ZWRcbiAgICBlbHNlIFxuICAgICAgICBuZXdTZWxlY3RlZEl0ZW1zW3RvZ2dsZURvY3VtZW50SWRdID0gdHJ1ZVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zLm1hcCggKGRvYykgPT4ge1xuICAgICAgICAgICAgaWYgKGRvYy5JZCA9PT0gcGFyc2VJbnQodG9nZ2xlRG9jdW1lbnRJZCwgMTApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZG9jLFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBuZXdTZWxlY3RlZEl0ZW1zW3RvZ2dsZURvY3VtZW50SWRdID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsYXN0VXBkYXRlZDogcmVjZWl2ZWRBdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gZG9jXG4gICAgICAgIH0pLFxuICAgICAgICBzZWxlY3RlZEl0ZW1zOiBuZXdTZWxlY3RlZEl0ZW1zXG4gICAgfVxufVxuY29uc3QgdG9nZ2xlQWxsRG9jdW1lbnRzID0gKGl0ZW1zLCBhY3Rpb24pID0+IHtcbiAgICB2YXIgc2VsZWN0ZWRJdGVtcyA9IFtdXG4gICAgcmV0dXJuIHtcbiAgICAgICAgX2l0ZW1zOiBpdGVtcy5tYXAoIChkb2MpID0+IHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24uc2VsZWN0QWxsKSBzZWxlY3RlZEl0ZW1zW2RvYy5JZF0gPSB0cnVlXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmRvYyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBhY3Rpb24uc2VsZWN0QWxsLFxuICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBhY3Rpb24ucmVjZWl2ZWRBdFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3NlbGVjdGVkSXRlbXM6IHNlbGVjdGVkSXRlbXNcbiAgICB9XG59XG5cbi8vIFNldCBzZWxlY3RlZCBkb2N1bWVudHMgYWZ0ZXIgcGFnZSBjaGFuZ2UsIHNldCBvcGVuZWRcbmNvbnN0IHVwZGF0ZURvY3VtZW50c1N0YXRlID0gKCBzZWxlY3RlZEl0ZW1zLCBpdGVtcywgcmVjZWl2ZWRBdCApID0+IHtcbiAgICBpZiAoIWl0ZW1zKSByZXR1cm4gbnVsbFxuICAgIGxldCBuZXdJdGVtcyA9IGl0ZW1zLm1hcCggKGRvYykgPT4ge1xuICAgICAgICBpZiAoIHNlbGVjdGVkSXRlbXNbIGRvYy5JZCBdICkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5kb2MsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvcGVuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjbG9zaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzcGlubmVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsYXN0VXBkYXRlZDogcmVjZWl2ZWRBdFxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHJldHVybiB7IFxuICAgICAgICAgICAgLi4uZG9jLFxuICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICBvcGVuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3Npbmc6IGZhbHNlLFxuICAgICAgICAgICAgc3Bpbm5lcjogZmFsc2UsXG4gICAgICAgICAgICBsYXN0VXBkYXRlZDogcmVjZWl2ZWRBdFxuICAgICAgICB9ICAgIFxuICAgIH0pXG4gICAgcmV0dXJuIG5ld0l0ZW1zXG59XG5cbmNvbnN0IGRvY3VtZW50cyA9ICggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApID0+IHtcbiAgICBzd2l0Y2goIGFjdGlvbi50eXBlICkge1xuICAgICAgICBjYXNlIFJFUVVFU1RfRE9DVU1FTlRTOiAgICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgICAgICAgICAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBSRUNFSVZFX0RPQ1VNRU5UUzpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgIGRpZEludmFsaWRhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICBpdGVtczogdXBkYXRlRG9jdW1lbnRzU3RhdGUoIHN0YXRlLnNlbGVjdGVkSXRlbXMsIGFjdGlvbi5pdGVtcywgYWN0aW9uLnJlY2VpdmVkQXQgKSxcbiAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IGFjdGlvbi5yZWNlaXZlZEF0LFxuICAgICAgICAgICAgICBpc0ZldGNoRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgICBmZXRjaEVycm9yU3RhdHVzOiAyMDBcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgSU5WQUxJREFURV9ET0NVTUVOVFM6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgIGRpZEludmFsaWRhdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgTkVYVF9QQUdFOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICBwYWdlTm1iOiBzdGF0ZS5wYWdlTm1iICsgMSxcbiAgICAgICAgICAgICAgZGlkSW52YWxpZGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgYWxsU2VsZWN0ZWRJdGVtczogZmFsc2UsXG4gICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM6IHN0YXRlLmFsbFNlbGVjdGVkSXRlbXMgPyBbXSA6IHN0YXRlLnNlbGVjdGVkSXRlbXNcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgUFJFVl9QQUdFOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICBwYWdlTm1iOiBzdGF0ZS5wYWdlTm1iID4gMCA/IHN0YXRlLnBhZ2VObWIgLSAxIDogc3RhdGUucGFnZU5tYixcbiAgICAgICAgICAgICAgZGlkSW52YWxpZGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgYWxsU2VsZWN0ZWRJdGVtczogZmFsc2UsXG4gICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM6IHN0YXRlLmFsbFNlbGVjdGVkSXRlbXMgPyBbXSA6IHN0YXRlLnNlbGVjdGVkSXRlbXNcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQ0hBTkdFX09SREVSOlxuICAgICAgICAgIGlmICggc3RhdGUub3JkZXIgPT09IGFjdGlvbi5vcmRlcikge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgICBvcmRlcjogYWN0aW9uLm9yZGVyLFxuICAgICAgICAgICAgICAgICAgZGlyT3JkZXI6IHN0YXRlLmRpck9yZGVyID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnLFxuICAgICAgICAgICAgICAgICAgZGlkSW52YWxpZGF0ZTogdHJ1ZSAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgIG9yZGVyOiBhY3Rpb24ub3JkZXIsXG4gICAgICAgICAgICAgIGRpck9yZGVyOiAnYXNjJyxcbiAgICAgICAgICAgICAgZGlkSW52YWxpZGF0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBUT0dHTEVfRE9DVU1FTlQ6XG4gICAgICAgICAgdmFyIHtpdGVtcywgc2VsZWN0ZWRJdGVtc30gPSB0b2dnbGUoIHN0YXRlLnNlbGVjdGVkSXRlbXMsIHN0YXRlLml0ZW1zLCBhY3Rpb24uaWQsIGFjdGlvbi5yZWNlaXZlZEF0IClcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpdGVtczogaXRlbXMsXG4gICAgICAgICAgICBsYXN0VXBkYXRlZDogYWN0aW9uLnJlY2VpdmVkQXQsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiBzZWxlY3RlZEl0ZW1zLFxuICAgICAgICAgICAgYWxsU2VsZWN0ZWRJdGVtczogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgVE9HR0xFX0FMTF9ET0NVTUVOVFM6XG4gICAgICAgICAgdmFyIHtfaXRlbXMsIF9zZWxlY3RlZEl0ZW1zfSA9IHRvZ2dsZUFsbERvY3VtZW50cyggc3RhdGUuaXRlbXMsIGFjdGlvbiApXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgaXRlbXM6IF9pdGVtcyxcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM6IF9zZWxlY3RlZEl0ZW1zLFxuICAgICAgICAgICAgYWxsU2VsZWN0ZWRJdGVtczogYWN0aW9uLnNlbGVjdEFsbFxuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBPUEVOX0RPQ1VNRU5UOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGl0ZW1zOiB1cGRhdGVPcGVuKGFjdGlvbi5pZCwgc3RhdGUuaXRlbXMsIGFjdGlvbi5yZWNlaXZlZEF0KVxuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBDTE9TRV9ET0NVTUVOVDpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpdGVtczogdXBkYXRlQ2xvc2UoYWN0aW9uLmlkLCBzdGF0ZS5pdGVtcywgYWN0aW9uLnJlY2VpdmVkQXQpXG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIFRPR0dMRV9TUElOTkVSOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoIChkb2MpID0+IHsgXG4gICAgICAgICAgICAgICAgaWYgKCBkb2MuSWQgPT09IGFjdGlvbi5pZCApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRvYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uZXI6ICFkb2Muc3Bpbm5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBhY3Rpb24ucmVjZWl2ZWRBdFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHJldHVybiBkb2NcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIGNhc2UgQ0xPU0VfQUxMRE9DVU1FTlRTOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoIChkb2MpID0+IHsgXG4gICAgICAgICAgICAgICAgaWYgKCBkb2Mub3BlbmluZyApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRvYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2luZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBhY3Rpb24ucmVjZWl2ZWRBdFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHJldHVybiBkb2NcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IGFjdGlvbi5yZWNlaXZlZEF0XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIEZFVENIX0VSUk9SOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0ZldGNoRXJyb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgZmV0Y2hFcnJvclN0YXR1czogYWN0aW9uLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuLy8gRG9jdW1lbnQgZGV0YWlsIHJlZHVjZXJcbmNvbnN0IGluaXRpYWxTdGF0ZURvY0RldGFpbCA9IHtcbiAgICBpdGVtczogW11cbn1cbmNvbnN0IGFydGljbGVzID0gKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZURvY0RldGFpbCwgYWN0aW9uICkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBSRUNFSVZFX0RPQ1VNRU5UREVUQUlMOlxuICAgICAgICAgIHZhciBuZXdJdGVtcyA9IHN0YXRlLml0ZW1zLnNsaWNlKCk7XG4gICAgICAgICAgbmV3SXRlbXNbYWN0aW9uLmlkXSA9IHtcbiAgICAgICAgICAgICAgYXJ0aWNsZXM6IGFjdGlvbi5kb2N1bWVudFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IG5ld0l0ZW1zXG4gICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgZG9jdW1lbnRzLFxuICAgIGFydGljbGVzXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCJcbi8vIEZvcm1hdCBkZWNpbWFsIHN0cmluZyBcIm5ubm5uLm5uIHRvIFwibm4gbm5uLm5uICRcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREZWNpbWFsKHN0cmRlYywgY3VycmVuY3ksIGxlZnQpIHtcbiAgICB2YXIgb3V0ID0gXCJcIlxuICAgIHZhciBmbGVmdCA9IGxlZnQgfHwgZmFsc2U7XG5cbiAgICB2YXIgZm10ZGVjID0gcm91bmRUb1R3byhwYXJzZUZsb2F0KHN0cmRlYykpLnRvRml4ZWQoMikucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KStcXC4pL2csICckMSAnKTtcbiAgICBpZiAoY3VycmVuY3kpIG91dCA9IGZsZWZ0ID8gY3VycmVuY3kgKyBcIiBcIiArIGZtdGRlYyA6IGZtdGRlYyArIFwiIFwiICsgY3VycmVuY3k7XG4gICAgZWxzZSBvdXQgPSBmbXRkZWM7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiByb3VuZFRvVHdvKG51bSkgeyAgICBcbiAgICByZXR1cm4gKyhNYXRoLnJvdW5kKG51bSArIFwiZSsyXCIpICArIFwiZS0yXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmRGbG9hdChudW1iZXIsIHByZWNpc2lvbikge1xuICAgIHZhciBmYWN0b3IgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgICB2YXIgdGVtcE51bWJlciA9IG51bWJlciAqIGZhY3RvcjtcbiAgICB2YXIgcm91bmRlZFRlbXBOdW1iZXIgPSBNYXRoLnJvdW5kKHRlbXBOdW1iZXIpO1xuICAgIHJldHVybiByb3VuZGVkVGVtcE51bWJlciAvIGZhY3Rvcjtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==