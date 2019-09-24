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
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css);", ""]);
var getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../images/reload.svg */ "./src/images/reload.svg"));
// Module
exports.push([module.i, ".text-ar {\n  text-align: right; }\n\n.text-al {\n  text-align: left; }\n\n.text-ac {\n  text-align: center; }\n\n.div-row-grey {\n  background-color: #f9f9f9; }\n\n.row-checked {\n  background-color: lightblue; }\n\n.p-cell {\n  padding: 0.2em 0.2em;\n  margin: 0.2em 0.4em;\n  height: 1.8em; }\n\n.whitespace {\n  white-space: nowrap; }\n\n.hover-div div:hover {\n  background-color: #628e2f !important;\n  cursor: pointer; }\n\n.doc-check {\n  width: 1.5em;\n  padding: 0 .5em;\n  height: 1.9em;\n  cursor: auto; }\n\n.input-checkbox {\n  margin-top: 0.5em; }\n\n.doc-id {\n  width: 5em;\n  cursor: auto; }\n\n.doc-number {\n  width: 9em; }\n\n.doc-type {\n  width: 5.8em;\n  cursor: auto; }\n\n.div-doc-norm {\n  color: dodgerblue; }\n\n.div-doc-corr {\n  background-color: #f44336;\n  color: #fff; }\n\n.doc-val {\n  width: 8em; }\n\n.doc-nip {\n  width: 11em; }\n\n.div-detail {\n  height: 0px;\n  overflow: hidden;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  overflow: auto; }\n\n.art-cell {\n  margin: 0px;\n  white-space: nowrap; }\n\n.doc-opening {\n  position: relative;\n  -webkit-animation-name: opening;\n  /* Safari 4.0 - 8.0 */\n  -webkit-animation-duration: 0.7s;\n  /* Safari 4.0 - 8.0 */\n  animation-name: opening;\n  animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n  /* Safari 4.0 - 8.0 */\n  animation-fill-mode: forwards; }\n\n.doc-closing {\n  height: 0px;\n  position: relative;\n  -webkit-animation-name: closing;\n  /* Safari 4.0 - 8.0 */\n  -webkit-animation-duration: 0.7s;\n  /* Safari 4.0 - 8.0 */\n  animation-name: closing;\n  animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n  /* Safari 4.0 - 8.0 */\n  animation-fill-mode: forwards; }\n\n/* Safari 4.0 - 8.0 */\n@-webkit-keyframes opening {\n  0% {\n    height: 0px; }\n  100% {\n    height: 400px;\n    visibility: visible; } }\n\n/* Standard syntax */\n@keyframes opening {\n  0% {\n    height: 0px; }\n  100% {\n    height: 400px;\n    visibility: visible; } }\n\n/* Safari 4.0 - 8.0 */\n@-webkit-keyframes closing {\n  0% {\n    height: 400px; }\n  100% {\n    height: 0px;\n    visibility: hidden; } }\n\n/* Standard syntax */\n@keyframes closing {\n  0% {\n    height: 400px; }\n  100% {\n    height: 0px;\n    visibility: hidden; } }\n\n.button-margin {\n  margin: 8px 8px 8px 0px; }\n\n.button-style {\n  color: #616161;\n  float: left; }\n\n.error_msg {\n  background-color: #ff5722;\n  color: #fff; }\n\n.request-documentdetail-spinner {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 18px 18px; }\n", ""]);


/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: REQUEST_DOCUMENTS, RECEIVE_DOCUMENTS, INVALIDATE_DOCUMENTS, NEXT_PAGE, INIT_NEXT_PAGE, PREV_PAGE, CHANGE_ORDER, TOGGLE_DOCUMENT, TOGGLE_ALL_DOCUMENTS, TOGGLE_SPINNER, OPEN_DOCUMENT, CLOSE_DOCUMENT, CLOSE_ALLDOCUMENTS, FETCH_ERROR, RECEIVE_DOCUMENTDETAIL, invalidateDocuments, requestDocuments, toggleDocument, toggleAllDocuments, toggleSpinner, openDocument, closeDocument, closeAllDocuments, receiveDocuments, changeOrder, initNextPage, nextPage, prevPage, fetchError, fetchDocumentsIfNeeded, receiveDocumentDetail, receiveDocumentDetailActions, fetchDocumentDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_DOCUMENTS", function() { return REQUEST_DOCUMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_DOCUMENTS", function() { return RECEIVE_DOCUMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALIDATE_DOCUMENTS", function() { return INVALIDATE_DOCUMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEXT_PAGE", function() { return NEXT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_NEXT_PAGE", function() { return INIT_NEXT_PAGE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initNextPage", function() { return initNextPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextPage", function() { return nextPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevPage", function() { return prevPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchError", function() { return fetchError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDocumentsIfNeeded", function() { return fetchDocumentsIfNeeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveDocumentDetail", function() { return receiveDocumentDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveDocumentDetailActions", function() { return receiveDocumentDetailActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDocumentDetail", function() { return fetchDocumentDetail; });
// Document's list actions
var REQUEST_DOCUMENTS = 'REQUEST_DOCUMENTS';
var RECEIVE_DOCUMENTS = 'RECEIVE_DOCUMENTS';
var INVALIDATE_DOCUMENTS = 'INVALIDATE_DOCUMENTS';
var NEXT_PAGE = 'NEXT_PAGE';
var INIT_NEXT_PAGE = 'INIT_NEXT_PAGE';
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
var initNextPage = function initNextPage(dispatch, getState) {
  dispatch(nextPage());
  dispatch(invalidateDocuments());
  dispatch(fetchDocumentsIfNeeded());
  return {
    type: INIT_NEXT_PAGE
  };
};
var nextPage = function nextPage(dispatch, getState) {
  //dispatch(invalidateDocuments())
  //dispatch(fetchDocumentsIfNeeded())
  return {
    type: NEXT_PAGE
  }; //type: NEXT_PAGE
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
      if (doc.id === id && doc.opening) {
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
      this.props.onCheckClick(event.target.value, event.target.checked);
    }
  }, {
    key: "getHighlightedColClass",
    value: function getHighlightedColClass(col) {
      return this.props.order === col && !(this.props.document && this.props.document.checked) && !this.state.hover ? 'w3-theme-l4' : '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log("DocumentItem.render()");
      var doc = this.props.document;
      var docType = doc.type === CORR_DOC_TYPE ? 'Corr' : 'Inv VAT';
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
        value: doc.id,
        onChange: this.onCheckClick,
        checked: doc.checked ? 'checked' : ''
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          _this2.props.onOpenDetail(doc.Id);
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
        className: "w3-cell w3-left doc-type " + (doc.type === -1 ? 'div-doc-norm' : 'div-doc-corr')
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
        document: this.props.document,
        onCloseDetail: function onCloseDetail(id) {
          _this2.props.onCloseDetail(id);
        },
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
/* harmony import */ var _components_DocumentItemDetailNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DocumentItemDetailNumber */ "./src/components/DocumentItemDetailNumber.js");
/* harmony import */ var _components_DocumentItemDetailHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DocumentItemDetailHeader */ "./src/components/DocumentItemDetailHeader.js");
/* harmony import */ var _components_DocumentItemDetailArticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DocumentItemDetailArticles */ "./src/components/DocumentItemDetailArticles.js");
/* harmony import */ var _components_DocumentItemDetailFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DocumentItemDetailFooter */ "./src/components/DocumentItemDetailFooter.js");
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
      this.props.onCloseDetail(this.props.document.id);
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
      }, "x"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DocumentItemDetailNumber__WEBPACK_IMPORTED_MODULE_1__["default"], {
        document: this.props.document
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-container w3-padding-small"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DocumentItemDetailHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        document: this.props.document
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DocumentItemDetailArticles__WEBPACK_IMPORTED_MODULE_3__["default"], {
        document: this.props.document,
        articles: this.props.articles
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DocumentItemDetailFooter__WEBPACK_IMPORTED_MODULE_4__["default"], {
        document: this.props.document,
        articles: this.props.articles
      })));
    }
  }]);

  return DocumentItemDetail;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DocumentItemDetail);

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
      return this.props.articles.items[this.props.document.id].articles.map(function (art, k) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: k
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, id++), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, art.artname1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "text-ar art-cell"
        }, Object(_solidity_numbers__WEBPACK_IMPORTED_MODULE_1__["formatDecimal"])(art.artprice))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, art.arttaxlabel), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, art.artunit), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "text-ar art-cell"
        }, Object(_solidity_numbers__WEBPACK_IMPORTED_MODULE_1__["formatDecimal"])(art.quantity))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "text-ar art-cell"
        }, Object(_solidity_numbers__WEBPACK_IMPORTED_MODULE_1__["formatDecimal"])(art.nettovalue))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "text-ar art-cell"
        }, Object(_solidity_numbers__WEBPACK_IMPORTED_MODULE_1__["formatDecimal"])(art.bruttovalue))));
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
      var articles = this.props.articles.items[this.props.document.id].articles;

      for (var i = 0; i < articles.length; i++) {
        tBrutto += parseFloat(articles[i].bruttovalue);
        tNetto += parseFloat(articles[i].nettovalue);
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
    value: props.document.number
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem, {
    label: "Place of Invoice",
    value: props.document.location
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w3-cell-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem, {
    label: "Date",
    value: props.document.date
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem, {
    label: "Payment",
    value: props.document.paymethod_name
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w3-cell-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem, {
    label: "Period from:",
    value: props.document.period_startdate
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem, {
    label: "Period to:",
    value: props.document.period_enddate
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w3-cell w3-mobile w3-padding-small",
    style: {
      width: "50%"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "w3-padding-small"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItemCust, {
    label: "Customer Name 1",
    value: props.document.custname1
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItemCust, {
    label: "Customer Name 2",
    value: props.document.custname2
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItemCust, {
    label: "VAT ID",
    value: props.document.custnip
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItemCust, {
    label: "Internal Account Nmb",
    value: props.document.custaccnmb
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
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





 // DocumentList component  ------------------------------------------------------------------

var DocumentList =
/*#__PURE__*/
function (_Component) {
  _inherits(DocumentList, _Component);

  function DocumentList() {
    _classCallCheck(this, DocumentList);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentList).apply(this, arguments));
  }

  _createClass(DocumentList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //this.props.fetchDocumentsIfNeeded();
      this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchDocumentsIfNeeded"])());
    }
  }, {
    key: "onChangeOrder",
    value: function onChangeOrder(col) {
      this.props.onChangeOrder(col);
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
      this.props.onToggleAllDocuments(event.target.checked);
    }
  }, {
    key: "getHighlightedColClass",
    value: function getHighlightedColClass(col) {
      return this.props.documents.order === col ? 'w3-theme-d2' : '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      console.log("DocumentList.render()");
      var reloadAnimClass = 'w3-padding-small fa fa-refresh' + (this.props.documents && this.props.documents.isFetching ? ' w3-spin' : '');
      console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-bar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "w3-button w3-border w3-round w3-padding-small button-margin button-style",
        href: "#",
        onClick: function onClick(e) {
          return _this.props.dispatch({
            type: 'PREV_PAGE'
          });
        }
      }, "Backward", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "w3-padding-small fa fa-arrow-left",
        "aria-hidden": "true"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "w3-button w3-border w3-round w3-padding-small button-margin button-style",
        href: "#",
        onClick: function onClick(e) {
          return _this.props.dispatch({
            type: 'NEXT_PAGE'
          });
        }
      }, "Forward", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "w3-padding-small fa fa-arrow-right"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "w3-button w3-border w3-round w3-padding-small button-margin button-style",
        href: "#",
        onClick: this.props.onRefreshData
      }, "Reload", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: reloadAnimClass
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "w3-button w3-border w3-round w3-padding-small button-margin button-style",
        href: "#",
        onClick: this.props.onCloseAllDocuments
      }, "Close all", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "w3-padding-small fa fa-compress"
      })), this.props.documents.isFetchError ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button-margin w3-left w3-padding-small error_msg"
      }, "Oops, no response from the server or an unexpected format received") : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button-margin w3-right w3-padding-small"
      }, "Page: ", this.props.documents && this.props.documents.isFetching ? '..' : this.props.documents.pageNmb + 1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-border w3-round w3-medium"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-row w3-theme-d1 w3-text-white"
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-col w3-left doc-check"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        className: "input-checkbox",
        name: "",
        value: "",
        checked: this.props.documents.allSelectedItems,
        onChange: function onChange(e) {
          return _this.onToogleAllDocuments(e);
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
          return _this.onChangeOrder('number');
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
          return _this.onChangeOrder('date');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-al p-cell"
      }, "Date ", this.getOrderElement('date')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-div"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-col w3-right doc-val " + this.getHighlightedColClass('excise'),
        onClick: function onClick() {
          return _this.onChangeOrder('excise');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-al p-cell"
      }, "Excise ", this.getOrderElement('excise')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-div"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-col w3-right doc-val " + this.getHighlightedColClass('brutto'),
        onClick: function onClick() {
          return _this.onChangeOrder('brutto');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-al p-cell"
      }, "Brutto ", this.getOrderElement('brutto')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-div"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-col w3-right doc-val " + this.getHighlightedColClass('netto'),
        onClick: function onClick() {
          return _this.onChangeOrder('netto');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-al p-cell"
      }, "Netto ", this.getOrderElement('netto')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-div"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-col w3-right doc-nip " + this.getHighlightedColClass('custnip'),
        onClick: function onClick() {
          return _this.onChangeOrder('custnip');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-al p-cell"
      }, "VAT ID ", this.getOrderElement('custnip')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-div"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w3-rest text-al " + this.getHighlightedColClass('custname1'),
        onClick: function onClick() {
          return _this.onChangeOrder('custname1');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "p-cell"
      }, "Customer ", this.getOrderElement('custname1'))))), this.props.documents.items.map(function (document) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DocumentItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: document.Id,
          document: document,
          articles: _this.props.articles,
          order: _this.props.documents.order,
          onCheckClick: _this.props.onToggle,
          onOpenDetail: _this.props.onOpenDetail,
          onCloseDetail: _this.props.onCloseDetail
        });
      }))));
    }
  }]);

  return DocumentList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); //export default DocumentList


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchDocumentsIfNeeded: function fetchDocumentsIfNeeded() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchDocumentsIfNeeded"])());
    },
    onPageClick: function onPageClick(e, incr) {
      var pageNmb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (incr === -1 && pageNmb > 0) {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["prevPage"])());
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["invalidateDocuments"])());
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchDocumentsIfNeeded"])());
        react_ga__WEBPACK_IMPORTED_MODULE_3__["default"].event({
          category: 'Navigation',
          action: 'Prev page',
          label: 'Top navigation'
        });
      }

      if (incr === 1) {
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["nextPage"])());
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["invalidateDocuments"])());
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchDocumentsIfNeeded"])());
        react_ga__WEBPACK_IMPORTED_MODULE_3__["default"].event({
          category: 'Navigation',
          action: 'Next page',
          label: 'Top navigation'
        });
      }
    },
    onChangeOrder: function onChangeOrder(order) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["changeOrder"])(order));
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["invalidateDocuments"])());
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchDocumentsIfNeeded"])());
      react_ga__WEBPACK_IMPORTED_MODULE_3__["default"].event({
        category: 'Documents',
        action: 'Change order: ' + order,
        label: 'Sorting'
      });
    },
    onRefreshData: function onRefreshData() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["invalidateDocuments"])());
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchDocumentsIfNeeded"])());
      react_ga__WEBPACK_IMPORTED_MODULE_3__["default"].event({
        category: 'Navigation',
        action: 'Refresh',
        label: 'Top navigation'
      });
    },
    onToggle: function onToggle(id) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["toggleDocument"])(id));
      react_ga__WEBPACK_IMPORTED_MODULE_3__["default"].event({
        category: 'Documents',
        action: 'Toggle document',
        label: ''
      });
    },
    onToggleAllDocuments: function onToggleAllDocuments(selectAll) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["toggleAllDocuments"])(selectAll));
      react_ga__WEBPACK_IMPORTED_MODULE_3__["default"].event({
        category: 'Documents',
        action: 'Toggle all documents',
        label: ''
      });
    },
    onCloseDetail: function onCloseDetail(id) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["closeDocument"])(id));
      react_ga__WEBPACK_IMPORTED_MODULE_3__["default"].event({
        category: 'Document',
        action: 'Close detail',
        label: 'Document detail'
      });
    },
    onCloseAllDocuments: function onCloseAllDocuments() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["closeAllDocuments"])());
      react_ga__WEBPACK_IMPORTED_MODULE_3__["default"].event({
        category: 'Document',
        action: 'Close all documents',
        label: 'Document detail'
      });
    },
    onOpenDetail: function onOpenDetail(id) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchDocumentDetail"])(id));
      react_ga__WEBPACK_IMPORTED_MODULE_3__["default"].event({
        category: 'Document',
        action: 'Open detail',
        label: 'Document detail'
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    //articles: state.articles,
    documents: state.documents
  };
} //mapDispatchToProps
)(DocumentList));

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
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_8__);
// React, redux and thunk






 //import DocumentListContainer from './components/DocumentListContainer';


 //import './css/w3.css';
// Enable logger 

var middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]];

if (true) {
  middleware.push(Object(redux_logger__WEBPACK_IMPORTED_MODULE_4__["createLogger"])());
} // Redux store


var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_6__["default"], redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"].apply(void 0, middleware));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DocumentList__WEBPACK_IMPORTED_MODULE_7__["default"], null)), document.getElementById('root'));

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
  fetchErrorStatus: 200 // Document list reducer

};

var updateOpen = function updateOpen(id, items, receivedAt) {
  return items.map(function (doc) {
    if (doc.id === id) {
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
    if (doc.id === id) {
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
      if (doc.id === parseInt(toggleDocumentId, 10)) {
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
      if (action.selectAll) selectedItems[doc.id] = true;
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
    if (selectedItems[doc.id]) {
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
        didInvalidate: true
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
          if (doc.id === action.id) {
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
        articles: action.document.articles
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RvY3VtZW50SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Eb2N1bWVudEl0ZW1EZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRJdGVtRGV0YWlsQXJ0aWNsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRJdGVtRGV0YWlsRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RvY3VtZW50SXRlbURldGFpbEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Eb2N1bWVudEl0ZW1EZXRhaWxOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGVzLmNzcz83OGU0Iiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcmVsb2FkLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zb2xpZGl0eS9udW1iZXJzLmpzIl0sIm5hbWVzIjpbIlJFUVVFU1RfRE9DVU1FTlRTIiwiUkVDRUlWRV9ET0NVTUVOVFMiLCJJTlZBTElEQVRFX0RPQ1VNRU5UUyIsIk5FWFRfUEFHRSIsIklOSVRfTkVYVF9QQUdFIiwiUFJFVl9QQUdFIiwiQ0hBTkdFX09SREVSIiwiVE9HR0xFX0RPQ1VNRU5UIiwiVE9HR0xFX0FMTF9ET0NVTUVOVFMiLCJUT0dHTEVfU1BJTk5FUiIsIk9QRU5fRE9DVU1FTlQiLCJDTE9TRV9ET0NVTUVOVCIsIkNMT1NFX0FMTERPQ1VNRU5UUyIsIkZFVENIX0VSUk9SIiwiUkVDRUlWRV9ET0NVTUVOVERFVEFJTCIsImludmFsaWRhdGVEb2N1bWVudHMiLCJ0eXBlIiwicmVxdWVzdERvY3VtZW50cyIsInByZXBhcmVEb2N1bWVudHMiLCJkb2N1bWVudHMiLCJldmVuIiwiaSIsImxlbmd0aCIsInRvZ2dsZURvY3VtZW50IiwiaWQiLCJyZWNlaXZlZEF0IiwiRGF0ZSIsIm5vdyIsInRvZ2dsZUFsbERvY3VtZW50cyIsInNlbGVjdEFsbCIsInRvZ2dsZVNwaW5uZXIiLCJvcGVuRG9jdW1lbnQiLCJjbG9zZURvY3VtZW50IiwiY2xvc2VBbGxEb2N1bWVudHMiLCJyZWNlaXZlRG9jdW1lbnRzIiwianNvbiIsIml0ZW1zIiwiY2hhbmdlT3JkZXIiLCJjb2wiLCJvcmRlciIsImluaXROZXh0UGFnZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0UGFnZSIsImZldGNoRG9jdW1lbnRzSWZOZWVkZWQiLCJwcmV2UGFnZSIsImZldGNoRXJyb3IiLCJzdGF0dXMiLCJnZXRVcmwiLCJzdGF0ZSIsInBhZ2VObWIiLCJwYWdlU2l6ZSIsImRpck9yZGVyIiwiZmV0Y2hEb2N1bWVudHMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwic2hvdWxkRmV0Y2hEb2N1bWVudHMiLCJpc0ZldGNoaW5nIiwiZGlkSW52YWxpZGF0ZSIsInJlY2VpdmVEb2N1bWVudERldGFpbCIsImRvY3VtZW50IiwicmVjZWl2ZURvY3VtZW50RGV0YWlsQWN0aW9ucyIsImdldFVybERvY3VtZW50RGV0YWlsIiwiZmV0Y2hEb2N1bWVudERldGFpbCIsImFscmVhZHlPcGVuZWQiLCJmb3JFYWNoIiwiZG9jIiwib3BlbmluZyIsIkNPUlJfRE9DX1RZUEUiLCJEb2N1bWVudEl0ZW0iLCJwcm9wcyIsImhvdmVyIiwib25Nb3VzZUVudGVySGFuZGxlciIsImJpbmQiLCJvbk1vdXNlTGVhdmVIYW5kbGVyIiwib25DaGVja0NsaWNrIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwibGFzdFVwZGF0ZWQiLCJzZXRTdGF0ZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjaGVja2VkIiwiY29uc29sZSIsImxvZyIsImRvY1R5cGUiLCJvcGVuRG9jdW1lbnREZXRhaWxBbmltIiwic3Bpbm5lciIsIm9uT3BlbkRldGFpbCIsIklkIiwiZ2V0SGlnaGxpZ2h0ZWRDb2xDbGFzcyIsIk51bWJlciIsIkRhdGUxIiwiZm9ybWF0RGVjaW1hbCIsIkV4Y2lzZSIsIkJydXR0byIsIk5ldHRvIiwiQ3VzdG5pcCIsIm1pbldpZHRoIiwiQ3VzdG5hbWUxIiwiY2xvc2luZyIsIm9uQ2xvc2VEZXRhaWwiLCJhcnRpY2xlcyIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiLCJEb2N1bWVudEl0ZW1EZXRhaWwiLCJjbGFzc05hbWVBbmltIiwib25DbG9zZSIsIkRvY3VtZW50SXRlbURldGFpbEFydGljbGVzIiwibWFwIiwiYXJ0IiwiayIsImFydG5hbWUxIiwiYXJ0cHJpY2UiLCJhcnR0YXhsYWJlbCIsImFydHVuaXQiLCJxdWFudGl0eSIsIm5ldHRvdmFsdWUiLCJicnV0dG92YWx1ZSIsInJlbmRlckFydGljbGVzIiwiRG9jdW1lbnRJdGVtRGV0YWlsRm9vdGVyIiwidEJydXR0byIsInROZXR0byIsInBhcnNlRmxvYXQiLCJyb3VuZEZsb2F0IiwicmVuZGVySW52Rm9vdGVyIiwiSGVhZGVySXRlbSIsIndpZHRoIiwibGFiZWwiLCJIZWFkZXJJdGVtQ3VzdCIsIkRvY3VtZW50SXRlbURldGFpbEhlYWRlciIsIm51bWJlciIsImxvY2F0aW9uIiwiZGF0ZSIsInBheW1ldGhvZF9uYW1lIiwicGVyaW9kX3N0YXJ0ZGF0ZSIsInBlcmlvZF9lbmRkYXRlIiwiY3VzdG5hbWUxIiwiY3VzdG5hbWUyIiwiY3VzdG5pcCIsImN1c3RhY2NubWIiLCJEb2N1bWVudEl0ZW1EZXRhaWxOdW1iZXIiLCJEb2N1bWVudExpc3QiLCJvbkNoYW5nZU9yZGVyIiwiZWwiLCJvblRvZ2dsZUFsbERvY3VtZW50cyIsInJlbG9hZEFuaW1DbGFzcyIsImUiLCJvblJlZnJlc2hEYXRhIiwib25DbG9zZUFsbERvY3VtZW50cyIsImlzRmV0Y2hFcnJvciIsImFsbFNlbGVjdGVkSXRlbXMiLCJvblRvb2dsZUFsbERvY3VtZW50cyIsImdldE9yZGVyRWxlbWVudCIsIm9uVG9nZ2xlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwib25QYWdlQ2xpY2siLCJpbmNyIiwiUmVhY3RHQSIsImNhdGVnb3J5IiwiYWN0aW9uIiwibWlkZGxld2FyZSIsInRodW5rIiwicHJvY2VzcyIsInB1c2giLCJjcmVhdGVMb2dnZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbml0aWFsU3RhdGUiLCJzZWxlY3RlZEl0ZW1zIiwiZmV0Y2hFcnJvclN0YXR1cyIsInVwZGF0ZU9wZW4iLCJ1cGRhdGVDbG9zZSIsInRvZ2dsZSIsInRvZ2dsZURvY3VtZW50SWQiLCJuZXdTZWxlY3RlZEl0ZW1zIiwic2xpY2UiLCJwYXJzZUludCIsIl9pdGVtcyIsIl9zZWxlY3RlZEl0ZW1zIiwidXBkYXRlRG9jdW1lbnRzU3RhdGUiLCJuZXdJdGVtcyIsImluaXRpYWxTdGF0ZURvY0RldGFpbCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwic3RyZGVjIiwiY3VycmVuY3kiLCJsZWZ0Iiwib3V0IiwiZmxlZnQiLCJmbXRkZWMiLCJyb3VuZFRvVHdvIiwidG9GaXhlZCIsInJlcGxhY2UiLCJudW0iLCJNYXRoIiwicm91bmQiLCJwcmVjaXNpb24iLCJmYWN0b3IiLCJwb3ciLCJ0ZW1wTnVtYmVyIiwicm91bmRlZFRlbXBOdW1iZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FB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RSxNQUFNLEdBQUd3RSxNQUExQjtBQUNBLE1BQUlHLGlCQUFpQixHQUFHTixJQUFJLENBQUNDLEtBQUwsQ0FBV0ksVUFBWCxDQUF4QjtBQUNBLFNBQU9DLGlCQUFpQixHQUFHSCxNQUEzQjtBQUNIO0FBQUEsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vdzNjc3MvNC93My5jc3MpO1wiLCBcIlwiXSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2xpYi93My10aGVtZS1saWdodC1ncmVlbi5jc3MpO1wiLCBcIlwiXSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5jc3MpO1wiLCBcIlwiXSk7XG52YXIgZ2V0VXJsID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9pbWFnZXMvcmVsb2FkLnN2Z1wiKSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50ZXh0LWFyIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLnRleHQtYWwge1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi50ZXh0LWFjIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5kaXYtcm93LWdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsgfVxcblxcbi5yb3ctY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7IH1cXG5cXG4ucC1jZWxsIHtcXG4gIHBhZGRpbmc6IDAuMmVtIDAuMmVtO1xcbiAgbWFyZ2luOiAwLjJlbSAwLjRlbTtcXG4gIGhlaWdodDogMS44ZW07IH1cXG5cXG4ud2hpdGVzcGFjZSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLmhvdmVyLWRpdiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyOGUyZiAhaW1wb3J0YW50O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmRvYy1jaGVjayB7XFxuICB3aWR0aDogMS41ZW07XFxuICBwYWRkaW5nOiAwIC41ZW07XFxuICBoZWlnaHQ6IDEuOWVtO1xcbiAgY3Vyc29yOiBhdXRvOyB9XFxuXFxuLmlucHV0LWNoZWNrYm94IHtcXG4gIG1hcmdpbi10b3A6IDAuNWVtOyB9XFxuXFxuLmRvYy1pZCB7XFxuICB3aWR0aDogNWVtO1xcbiAgY3Vyc29yOiBhdXRvOyB9XFxuXFxuLmRvYy1udW1iZXIge1xcbiAgd2lkdGg6IDllbTsgfVxcblxcbi5kb2MtdHlwZSB7XFxuICB3aWR0aDogNS44ZW07XFxuICBjdXJzb3I6IGF1dG87IH1cXG5cXG4uZGl2LWRvYy1ub3JtIHtcXG4gIGNvbG9yOiBkb2RnZXJibHVlOyB9XFxuXFxuLmRpdi1kb2MtY29yciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uZG9jLXZhbCB7XFxuICB3aWR0aDogOGVtOyB9XFxuXFxuLmRvYy1uaXAge1xcbiAgd2lkdGg6IDExZW07IH1cXG5cXG4uZGl2LWRldGFpbCB7XFxuICBoZWlnaHQ6IDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi5hcnQtY2VsbCB7XFxuICBtYXJnaW46IDBweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG5cXG4uZG9jLW9wZW5pbmcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogb3BlbmluZztcXG4gIC8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xcbiAgLyogU2FmYXJpIDQuMCAtIDguMCAqL1xcbiAgYW5pbWF0aW9uLW5hbWU6IG9wZW5pbmc7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuN3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgLyogU2FmYXJpIDQuMCAtIDguMCAqL1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IH1cXG5cXG4uZG9jLWNsb3Npbmcge1xcbiAgaGVpZ2h0OiAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBjbG9zaW5nO1xcbiAgLyogU2FmYXJpIDQuMCAtIDguMCAqL1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuN3M7XFxuICAvKiBTYWZhcmkgNC4wIC0gOC4wICovXFxuICBhbmltYXRpb24tbmFtZTogY2xvc2luZztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43cztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAvKiBTYWZhcmkgNC4wIC0gOC4wICovXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgfVxcblxcbi8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3BlbmluZyB7XFxuICAwJSB7XFxuICAgIGhlaWdodDogMHB4OyB9XFxuICAxMDAlIHtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfSB9XFxuXFxuLyogU3RhbmRhcmQgc3ludGF4ICovXFxuQGtleWZyYW1lcyBvcGVuaW5nIHtcXG4gIDAlIHtcXG4gICAgaGVpZ2h0OiAwcHg7IH1cXG4gIDEwMCUge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9IH1cXG5cXG4vKiBTYWZhcmkgNC4wIC0gOC4wICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIGNsb3Npbmcge1xcbiAgMCUge1xcbiAgICBoZWlnaHQ6IDQwMHB4OyB9XFxuICAxMDAlIHtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfSB9XFxuXFxuLyogU3RhbmRhcmQgc3ludGF4ICovXFxuQGtleWZyYW1lcyBjbG9zaW5nIHtcXG4gIDAlIHtcXG4gICAgaGVpZ2h0OiA0MDBweDsgfVxcbiAgMTAwJSB7XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH0gfVxcblxcbi5idXR0b24tbWFyZ2luIHtcXG4gIG1hcmdpbjogOHB4IDhweCA4cHggMHB4OyB9XFxuXFxuLmJ1dHRvbi1zdHlsZSB7XFxuICBjb2xvcjogIzYxNjE2MTtcXG4gIGZsb2F0OiBsZWZ0OyB9XFxuXFxuLmVycm9yX21zZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4ucmVxdWVzdC1kb2N1bWVudGRldGFpbC1zcGlubmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxOHB4IDE4cHg7IH1cXG5cIiwgXCJcIl0pO1xuIiwiLy8gRG9jdW1lbnQncyBsaXN0IGFjdGlvbnNcbmV4cG9ydCBjb25zdCBSRVFVRVNUX0RPQ1VNRU5UUyA9ICdSRVFVRVNUX0RPQ1VNRU5UUydcbmV4cG9ydCBjb25zdCBSRUNFSVZFX0RPQ1VNRU5UUyA9ICdSRUNFSVZFX0RPQ1VNRU5UUydcbmV4cG9ydCBjb25zdCBJTlZBTElEQVRFX0RPQ1VNRU5UUyA9ICdJTlZBTElEQVRFX0RPQ1VNRU5UUydcbmV4cG9ydCBjb25zdCBORVhUX1BBR0UgPSAnTkVYVF9QQUdFJ1xuZXhwb3J0IGNvbnN0IElOSVRfTkVYVF9QQUdFID0gJ0lOSVRfTkVYVF9QQUdFJ1xuZXhwb3J0IGNvbnN0IFBSRVZfUEFHRSA9ICdQUkVWX1BBR0UnXG5leHBvcnQgY29uc3QgQ0hBTkdFX09SREVSID0gJ0NIQU5HRV9PUkRFUidcbmV4cG9ydCBjb25zdCBUT0dHTEVfRE9DVU1FTlQgPSAnVE9PR0xFX0RPQ1VNRU5UJ1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9BTExfRE9DVU1FTlRTID0gJ1RPT0dMRV9BTExfRE9DVU1FTlRTJ1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9TUElOTkVSID0gJ1RPT0dMRV9TUElOTkVSJ1xuZXhwb3J0IGNvbnN0IE9QRU5fRE9DVU1FTlQgPSAnT1BFTl9ET0NVTUVOVCdcbmV4cG9ydCBjb25zdCBDTE9TRV9ET0NVTUVOVCA9ICdDTE9TRV9ET0NVTUVOVCdcbmV4cG9ydCBjb25zdCBDTE9TRV9BTExET0NVTUVOVFMgPSAnQ0xPU0VfQUxMRE9DVU1FTlRTJ1xuZXhwb3J0IGNvbnN0IEZFVENIX0VSUk9SID0gJ0ZFVENIX0VSUk9SJ1xuXG4vLyBEb2N1bWVudCBkZXRhaWwgYWN0aW9uc1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfRE9DVU1FTlRERVRBSUwgPSAnUkVDRUlWRV9ET0NVTUVOVERFVEFJTCdcblxuZXhwb3J0IGNvbnN0IGludmFsaWRhdGVEb2N1bWVudHMgPSAoKSA9PiAoe1xuICB0eXBlOiBJTlZBTElEQVRFX0RPQ1VNRU5UU1xufSlcblxuZXhwb3J0IGNvbnN0IHJlcXVlc3REb2N1bWVudHMgPSAoKSA9PiAoe1xuICB0eXBlOiBSRVFVRVNUX0RPQ1VNRU5UU1xufSlcblxuY29uc3QgcHJlcGFyZURvY3VtZW50cyA9IChkb2N1bWVudHMpID0+IHtcbiAgaWYgKCFkb2N1bWVudHMpIHJldHVyblxuICB2YXIgZXZlbiA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGRvY3VtZW50c1tpXS5ldmVuID0gIWV2ZW47XG4gICAgZXZlbiA9ICFldmVuO1xuICB9XG4gIHJldHVybiBkb2N1bWVudHM7XG59XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVEb2N1bWVudCA9IChpZCkgPT4gKHtcbiAgdHlwZTogVE9HR0xFX0RPQ1VNRU5ULFxuICBpZDogaWQsXG4gIHJlY2VpdmVkQXQ6IERhdGUubm93KClcbn0pIFxuZXhwb3J0IGNvbnN0IHRvZ2dsZUFsbERvY3VtZW50cyA9IChzZWxlY3RBbGwpID0+ICh7XG4gIHR5cGU6IFRPR0dMRV9BTExfRE9DVU1FTlRTLFxuICBzZWxlY3RBbGw6IHNlbGVjdEFsbCxcbiAgcmVjZWl2ZWRBdDogRGF0ZS5ub3coKVxufSkgXG5cbmV4cG9ydCBjb25zdCB0b2dnbGVTcGlubmVyID0gKGlkKSA9PiAoe1xuICB0eXBlOiBUT0dHTEVfU1BJTk5FUixcbiAgaWQ6IGlkLFxuICByZWNlaXZlZEF0OiBEYXRlLm5vdygpICBcbn0pXG5cbmV4cG9ydCBjb25zdCBvcGVuRG9jdW1lbnQgPSAoaWQpID0+ICh7XG4gIHR5cGU6IE9QRU5fRE9DVU1FTlQsXG4gIGlkOiBpZCxcbiAgcmVjZWl2ZWRBdDogRGF0ZS5ub3coKVxufSlcbmV4cG9ydCBjb25zdCBjbG9zZURvY3VtZW50ID0gKGlkKSA9PiAoe1xuICB0eXBlOiBDTE9TRV9ET0NVTUVOVCxcbiAgaWQ6IGlkLFxuICByZWNlaXZlZEF0OiBEYXRlLm5vdygpXG59KVxuZXhwb3J0IGNvbnN0IGNsb3NlQWxsRG9jdW1lbnRzID0gKCkgPT4gKHtcbiAgdHlwZTogQ0xPU0VfQUxMRE9DVU1FTlRTLFxuICByZWNlaXZlZEF0OiBEYXRlLm5vdygpXG59KVxuXG5leHBvcnQgY29uc3QgcmVjZWl2ZURvY3VtZW50cyA9IChqc29uKSA9PiAoe1xuICB0eXBlOiBSRUNFSVZFX0RPQ1VNRU5UUyxcbiAgaXRlbXM6IHByZXBhcmVEb2N1bWVudHMoIGpzb24gKSxcbiAgcmVjZWl2ZWRBdDogRGF0ZS5ub3coKVxufSlcblxuZXhwb3J0IGNvbnN0IGNoYW5nZU9yZGVyID0gKCBjb2wgPSAnbnVtYmVyJyApID0+ICh7XG4gIHR5cGU6IENIQU5HRV9PUkRFUixcbiAgb3JkZXI6IGNvbFxufSlcblxuZXhwb3J0IGNvbnN0IGluaXROZXh0UGFnZSA9IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgZGlzcGF0Y2gobmV4dFBhZ2UoKSlcbiAgZGlzcGF0Y2goaW52YWxpZGF0ZURvY3VtZW50cygpKVxuICBkaXNwYXRjaChmZXRjaERvY3VtZW50c0lmTmVlZGVkKCkpXG4gIHJldHVybiAoe1xuICAgIHR5cGU6IElOSVRfTkVYVF9QQUdFXG4gIH0pXG59XG5cblxuZXhwb3J0IGNvbnN0IG5leHRQYWdlID0gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuXG5cbiAgLy9kaXNwYXRjaChpbnZhbGlkYXRlRG9jdW1lbnRzKCkpXG4gIC8vZGlzcGF0Y2goZmV0Y2hEb2N1bWVudHNJZk5lZWRlZCgpKVxuICByZXR1cm4oe1xuICAgIHR5cGU6IE5FWFRfUEFHRVxuICB9KVxuICAgIC8vdHlwZTogTkVYVF9QQUdFXG59XG5leHBvcnQgY29uc3QgcHJldlBhZ2UgPSAoKSA9PiAoe1xuICB0eXBlOiBQUkVWX1BBR0Vcbn0pXG5cbmV4cG9ydCBjb25zdCBmZXRjaEVycm9yID0gKHN0YXR1cykgPT4gKHtcbiAgdHlwZTogRkVUQ0hfRVJST1IsXG4gIHN0YXR1czogc3RhdHVzXG59KVxuXG5jb25zdCBnZXRVcmwgPSAoc3RhdGUpID0+IChcIi9kb2N1bWVudHMvXCIgKyBzdGF0ZS5kb2N1bWVudHMub3JkZXIgKyBcIi9cIiArIHN0YXRlLmRvY3VtZW50cy5wYWdlTm1iICsgXCIvXCIgKyBzdGF0ZS5kb2N1bWVudHMucGFnZVNpemUgKyBcIi9cIiArIHN0YXRlLmRvY3VtZW50cy5kaXJPcmRlcilcblxuY29uc3QgZmV0Y2hEb2N1bWVudHMgPSAoKSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gIGRpc3BhdGNoKHJlcXVlc3REb2N1bWVudHMoKSlcbiAgcmV0dXJuIGZldGNoKCBnZXRVcmwoZ2V0U3RhdGUoKSkgKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IGRpc3BhdGNoKHJlY2VpdmVEb2N1bWVudHMoanNvbikpKVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zdCBzdGF0dXMgPSBlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLnN0YXR1cyA6IDUwMFxuICAgICAgZGlzcGF0Y2goZmV0Y2hFcnJvcihzdGF0dXMpKVxuICAgIH0pO1xufVxuXG5jb25zdCBzaG91bGRGZXRjaERvY3VtZW50cyA9IChzdGF0ZSkgPT4ge1xuICBcbiAgY29uc3QgZG9jdW1lbnRzID0gc3RhdGUuZG9jdW1lbnRzXG4gIGlmICghZG9jdW1lbnRzLml0ZW1zKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBpZiAoZG9jdW1lbnRzLmlzRmV0Y2hpbmcpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gZG9jdW1lbnRzLmRpZEludmFsaWRhdGVcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoRG9jdW1lbnRzSWZOZWVkZWQgPSAoKSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gIGlmIChzaG91bGRGZXRjaERvY3VtZW50cyhnZXRTdGF0ZSgpKSkge1xuICAgIHJldHVybiBkaXNwYXRjaChmZXRjaERvY3VtZW50cygpKVxuICB9XG59XG5cbi8vIERvY3VtZW50IGRldGFpbCBhY3Rpb25zXG5leHBvcnQgY29uc3QgcmVjZWl2ZURvY3VtZW50RGV0YWlsID0gKGpzb24sIGlkKSA9PiAoe1xuICB0eXBlOiBSRUNFSVZFX0RPQ1VNRU5UREVUQUlMLFxuICBkb2N1bWVudDoganNvbixcbiAgaWQ6IGlkLFxuICByZWNlaXZlZEF0OiBEYXRlLm5vdygpXG59KVxuXG4vLyBUaGlzIGlzIGNhbGxlZCBieSBmZXRjaCgpIGluIGZldGNoRG9jdW1lbnREZXRhaWwoKVxuLy8gV2UgZGlzcGF0Y2ggUkVDRUlWRV9ET0NVTUVOVERFVEFJTCwgVE9HR0xFX1NQSU5ORVIgJiBPUEVOX0RPQ1VNRU5UXG5leHBvcnQgY29uc3QgcmVjZWl2ZURvY3VtZW50RGV0YWlsQWN0aW9ucyA9IChqc29uLCBpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHJlY2VpdmVEb2N1bWVudERldGFpbChqc29uLGlkKSlcbiAgZGlzcGF0Y2godG9nZ2xlU3Bpbm5lcihpZCkpXG4gIGRpc3BhdGNoKG9wZW5Eb2N1bWVudChpZCkpXG59XG5cbmNvbnN0IGdldFVybERvY3VtZW50RGV0YWlsID0gKGlkKSA9PiAoXCIvZG9jdW1lbnRhcnRpY2xlcy9cIiArIGlkKVxuXG5leHBvcnQgY29uc3QgZmV0Y2hEb2N1bWVudERldGFpbCA9IChpZCkgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICB2YXIgYWxyZWFkeU9wZW5lZCA9IGZhbHNlO1xuICBnZXRTdGF0ZSgpLmRvY3VtZW50cy5pdGVtcy5mb3JFYWNoKChkb2MpID0+IHtcbiAgICBpZiAoZG9jLmlkID09PSBpZCAmJiBkb2Mub3BlbmluZykge1xuICAgICAgYWxyZWFkeU9wZW5lZCA9IHRydWVcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfSlcbiAgaWYgKCFhbHJlYWR5T3BlbmVkKSB7XG4gICAgZGlzcGF0Y2godG9nZ2xlU3Bpbm5lcihpZCkpXG4gICAgcmV0dXJuIGZldGNoKCBnZXRVcmxEb2N1bWVudERldGFpbChpZCkgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiBkaXNwYXRjaChyZWNlaXZlRG9jdW1lbnREZXRhaWxBY3Rpb25zKGpzb24sIGlkKSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLnN0YXR1cyA6IDUwMFxuICAgICAgICBkaXNwYXRjaChmZXRjaEVycm9yKHN0YXR1cykpXG4gICAgICB9KTsgIFxuICB9XG59XG5cblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtmb3JtYXREZWNpbWFsfSBmcm9tICcuLi9zb2xpZGl0eS9udW1iZXJzJ1xuXG5pbXBvcnQgRG9jdW1lbnRJdGVtRGV0YWlsIGZyb20gJy4uL2NvbXBvbmVudHMvRG9jdW1lbnRJdGVtRGV0YWlsJ1xuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmNvbnN0IENPUlJfRE9DX1RZUEUgPSAtMiAvLyBjb3JyZWN0aW9uIGRvY3VtZW50IHR5cGVcblxuLy8gRG9jdW1lbnRJdGVtICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNsYXNzIERvY3VtZW50SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHsgaG92ZXI6IGZhbHNlIH1cbiAgICB0aGlzLm9uTW91c2VFbnRlckhhbmRsZXIgPSB0aGlzLm9uTW91c2VFbnRlckhhbmRsZXIuYmluZCh0aGlzKVxuICAgIHRoaXMub25Nb3VzZUxlYXZlSGFuZGxlciA9IHRoaXMub25Nb3VzZUxlYXZlSGFuZGxlci5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkNoZWNrQ2xpY2sgPSB0aGlzLm9uQ2hlY2tDbGljay5iaW5kKHRoaXMpXG4gIH1cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCBuZXh0UHJvcHMsIG5leHRTdGF0ZSApIHtcbiAgICByZXR1cm4gbmV4dFByb3BzLmRvY3VtZW50Lmxhc3RVcGRhdGVkICE9PSB0aGlzLnByb3BzLmRvY3VtZW50Lmxhc3RVcGRhdGVkIHx8IHRoaXMuc3RhdGUuaG92ZXIgIT09IG5leHRTdGF0ZS5ob3ZlclxuICB9XG4gIG9uTW91c2VFbnRlckhhbmRsZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhvdmVyOiB0cnVlIH0pXG4gIH1cbiAgb25Nb3VzZUxlYXZlSGFuZGxlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaG92ZXI6IGZhbHNlIH0pXG4gIH1cbiAgb25DaGVja0NsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoZWNrQ2xpY2soZXZlbnQudGFyZ2V0LnZhbHVlLCBldmVudC50YXJnZXQuY2hlY2tlZClcbiAgfVxuICBnZXRIaWdobGlnaHRlZENvbENsYXNzKGNvbCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm9yZGVyID09PSBjb2wgJiYgXG4gICAgICAhKHRoaXMucHJvcHMuZG9jdW1lbnQgJiYgdGhpcy5wcm9wcy5kb2N1bWVudC5jaGVja2VkKSAmJiBcbiAgICAgICF0aGlzLnN0YXRlLmhvdmVyID8gXG4gICAgICAndzMtdGhlbWUtbDQnIDogJydcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkRvY3VtZW50SXRlbS5yZW5kZXIoKVwiKVxuICAgIGNvbnN0IGRvYyA9IHRoaXMucHJvcHMuZG9jdW1lbnRcbiAgICBjb25zdCBkb2NUeXBlID0gKGRvYy50eXBlID09PSBDT1JSX0RPQ19UWVBFKSA/ICdDb3JyJyA6ICdJbnYgVkFUJ1xuICAgIGNvbnN0IG9wZW5Eb2N1bWVudERldGFpbEFuaW0gPSAndzMtY2VsbCB3My1sZWZ0IGRvYy1pZCcgKyAodGhpcy5wcm9wcy5kb2N1bWVudC5zcGlubmVyIHx8IGZhbHNlID8gJyByZXF1ZXN0LWRvY3VtZW50ZGV0YWlsLXNwaW5uZXInIDogJycpXG4gICAgXG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInczLXJvdyBcIiArIChkb2MuZXZlbiA/ICdkaXYtcm93LWdyZXknIDogJycpICsgXCIgXCIgKyAodGhpcy5zdGF0ZS5ob3ZlciA/ICd3My10aGVtZS1sMycgOiAnJykgKyBcIiBcIiArIChkb2MuY2hlY2tlZCA/ICdyb3ctY2hlY2tlZCcgOiAnJyl9IFxuICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5vbk1vdXNlRW50ZXJIYW5kbGVyfSBvbk1vdXNlTGVhdmU9e3RoaXMub25Nb3VzZUxlYXZlSGFuZGxlcn0+XG4gICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY2VsbCB3My1sZWZ0IGRvYy1jaGVja1wiPjxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dC1jaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJcIiB2YWx1ZT17ZG9jLmlkfSBvbkNoYW5nZT17dGhpcy5vbkNoZWNrQ2xpY2t9IGNoZWNrZWQ9e2RvYy5jaGVja2VkID8gJ2NoZWNrZWQnIDogJyd9Lz48L2Rpdj5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyAoKT0+e3RoaXMucHJvcHMub25PcGVuRGV0YWlsKGRvYy5JZCl9IH0+ICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e29wZW5Eb2N1bWVudERldGFpbEFuaW19PjxwIGNsYXNzTmFtZT0ndGV4dC1hciBwLWNlbGwgd2hpdGVzcGFjZSc+e3RoaXMucHJvcHMuZG9jdW1lbnQuc3Bpbm5lciB8fCBmYWxzZSA/ICgnJykgOiAoZG9jLklkKSB9PC9wPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widzMtY2VsbCB3My1sZWZ0IGRvYy1udW1iZXIgXCIgKyB0aGlzLmdldEhpZ2hsaWdodGVkQ29sQ2xhc3MoJ251bWJlcicpfT48cCBjbGFzc05hbWU9XCJ0ZXh0LWFsIHAtY2VsbCB3aGl0ZXNwYWNlXCI+e2RvYy5OdW1iZXJ9PC9wPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widzMtY2VsbCB3My1sZWZ0IGRvYy10eXBlIFwiICsgKGRvYy50eXBlID09PSAtMSA/ICdkaXYtZG9jLW5vcm0nIDogJ2Rpdi1kb2MtY29ycicpfT48cCBjbGFzc05hbWU9XCJ0ZXh0LWFjIHAtY2VsbCB3aGl0ZXNwYWNlXCI+e2RvY1R5cGV9PC9wPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widzMtY2VsbCB3My1sZWZ0IGRvYy1udW1iZXIgXCIgKyB0aGlzLmdldEhpZ2hsaWdodGVkQ29sQ2xhc3MoJ2RhdGUnKX0+PHAgY2xhc3NOYW1lPVwidGV4dC1hbCBwLWNlbGwgd2hpdGVzcGFjZVwiPntkb2MuRGF0ZTF9PC9wPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widzMtY2VsbCB3My1yaWdodCBkb2MtdmFsIFwiICsgdGhpcy5nZXRIaWdobGlnaHRlZENvbENsYXNzKCdleGNpc2UnKX0+PHAgY2xhc3NOYW1lPVwidGV4dC1hciBwLWNlbGwgd2hpdGVzcGFjZVwiPntmb3JtYXREZWNpbWFsKGRvYy5FeGNpc2UpfTwvcD48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInczLWNlbGwgdzMtcmlnaHQgZG9jLXZhbCBcIiArIHRoaXMuZ2V0SGlnaGxpZ2h0ZWRDb2xDbGFzcygnYnJ1dHRvJyl9PjxwIGNsYXNzTmFtZT1cInRleHQtYXIgcC1jZWxsIHdoaXRlc3BhY2VcIj57Zm9ybWF0RGVjaW1hbChkb2MuQnJ1dHRvKX08L3A+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3My1jZWxsIHczLXJpZ2h0IGRvYy12YWwgXCIgKyB0aGlzLmdldEhpZ2hsaWdodGVkQ29sQ2xhc3MoJ25ldHRvJyl9PjxwIGNsYXNzTmFtZT1cInRleHQtYXIgcC1jZWxsIHdoaXRlc3BhY2VcIj57Zm9ybWF0RGVjaW1hbChkb2MuTmV0dG8pfTwvcD48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInczLWNlbGwgdzMtcmlnaHQgZG9jLW5pcCBcIiArIHRoaXMuZ2V0SGlnaGxpZ2h0ZWRDb2xDbGFzcygnY3VzdG5pcCcpfT48cCBjbGFzc05hbWU9XCJ0ZXh0LWFsIHAtY2VsbCB3aGl0ZXNwYWNlXCI+e2RvYy5DdXN0bmlwfTwvcD48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInczLXJlc3QgZG9jLWN1c3RvbWVybmFtZTEgdGV4dC1hbCBcIiArIHRoaXMuZ2V0SGlnaGxpZ2h0ZWRDb2xDbGFzcygnY3VzdG5hbWUxJyl9PjxwIGNsYXNzTmFtZT1cInAtY2VsbCB3aGl0ZXNwYWNlXCIgc3R5bGU9e3ttaW5XaWR0aDogXCIyMDBweFwifX0+e2RvYy5DdXN0bmFtZTF9PC9wPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyhkb2Mub3BlbmluZyB8fCBkb2MuY2xvc2luZykgPyAoPERvY3VtZW50SXRlbURldGFpbCBcbiAgICAgICAgICAgIGRvY3VtZW50PXt0aGlzLnByb3BzLmRvY3VtZW50fSBcbiAgICAgICAgICAgIG9uQ2xvc2VEZXRhaWw9eyhpZCk9Pnt0aGlzLnByb3BzLm9uQ2xvc2VEZXRhaWwoaWQpfX1cbiAgICAgICAgICAgIGFydGljbGVzPXt0aGlzLnByb3BzLmFydGljbGVzfS8+KSA6ICgnJyl9XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gIH1cbn1cblxuLy9leHBvcnQgZGVmYXVsdCBEb2N1bWVudEl0ZW1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIGFydGljbGVzOiBzdGF0ZS5hcnRpY2xlcyxcbiAgICBkb2N1bWVudHM6IHN0YXRlLmRvY3VtZW50c1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbnVsbFxuKShEb2N1bWVudEl0ZW0pIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuLy9pbXBvcnQge2Zvcm1hdERlY2ltYWwsIHJvdW5kRmxvYXR9IGZyb20gJy4uL3NvbGlkaXR5L251bWJlcnMnXG5cbmltcG9ydCBEb2N1bWVudEl0ZW1EZXRhaWxOdW1iZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Eb2N1bWVudEl0ZW1EZXRhaWxOdW1iZXInXG5pbXBvcnQgRG9jdW1lbnRJdGVtRGV0YWlsSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRG9jdW1lbnRJdGVtRGV0YWlsSGVhZGVyJ1xuaW1wb3J0IERvY3VtZW50SXRlbURldGFpbEFydGljbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvRG9jdW1lbnRJdGVtRGV0YWlsQXJ0aWNsZXMnXG5pbXBvcnQgRG9jdW1lbnRJdGVtRGV0YWlsRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRG9jdW1lbnRJdGVtRGV0YWlsRm9vdGVyJ1xuXG4vLyBEb2N1bWVudEl0ZW1EZXRhaWwgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY2xhc3MgRG9jdW1lbnRJdGVtRGV0YWlsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyAgICAgIFxuICAgICAgY2xhc3NOYW1lQW5pbTogcHJvcHMuZG9jdW1lbnQub3BlbmluZyA/IFwiZG9jLW9wZW5pbmdcIiA6IFwiZG9jLWNsb3NpbmdcIlxuICAgIH1cbiAgICB0aGlzLm9uQ2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kb2N1bWVudC5vcGVuaW5nICE9PSBuZXh0UHJvcHMuZG9jdW1lbnQub3BlbmluZylcbiAgICAgIHRoaXMuc2V0U3RhdGUoIHtcbiAgICAgICAgY2xhc3NOYW1lQW5pbTogbmV4dFByb3BzLmRvY3VtZW50Lm9wZW5pbmcgPyBcImRvYy1vcGVuaW5nXCIgOiBcImRvYy1jbG9zaW5nXCIsXG4gICAgICB9KVxuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2xvc2VEZXRhaWwodGhpcy5wcm9wcy5kb2N1bWVudC5pZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coXCJEb2N1bWVudEl0ZW1EZXRhaWwucmVuZGVyKClcIilcbiAgICBcbiAgICAvL2NvbnN0IGQgPSB0aGlzLnByb3BzLmRvY3VtZW50XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1widzMtY2FyZCB3My1sZWZ0YmFyIHczLWJvcmRlci1ncmV5IGRpdi1kZXRhaWwgXCIgKyB0aGlzLnN0YXRlLmNsYXNzTmFtZUFuaW19PlxuXG4gICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMub25DbG9zZX0gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLWRpc3BsYXktdG9wcmlnaHRcIj54PC9zcGFuPlxuXG4gICAgICAgIDxEb2N1bWVudEl0ZW1EZXRhaWxOdW1iZXIgZG9jdW1lbnQ9e3RoaXMucHJvcHMuZG9jdW1lbnR9Lz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1wYWRkaW5nLXNtYWxsXCI+XG4gICAgICAgICAgPERvY3VtZW50SXRlbURldGFpbEhlYWRlciBkb2N1bWVudD17dGhpcy5wcm9wcy5kb2N1bWVudH0vPlxuICAgICAgICAgIDxEb2N1bWVudEl0ZW1EZXRhaWxBcnRpY2xlcyBkb2N1bWVudD17dGhpcy5wcm9wcy5kb2N1bWVudH0gYXJ0aWNsZXM9e3RoaXMucHJvcHMuYXJ0aWNsZXN9Lz5cbiAgICAgICAgICA8RG9jdW1lbnRJdGVtRGV0YWlsRm9vdGVyIGRvY3VtZW50PXt0aGlzLnByb3BzLmRvY3VtZW50fSBhcnRpY2xlcz17dGhpcy5wcm9wcy5hcnRpY2xlc30vPiBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICB9ICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRJdGVtRGV0YWlsIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtmb3JtYXREZWNpbWFsfSBmcm9tICcuLi9zb2xpZGl0eS9udW1iZXJzJ1xuXG5jbGFzcyBEb2N1bWVudEl0ZW1EZXRhaWxBcnRpY2xlcyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyQXJ0aWNsZXMoKSB7XG4gICAgICB2YXIgaWQgPSAxXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5hcnRpY2xlcy5pdGVtc1t0aGlzLnByb3BzLmRvY3VtZW50LmlkXS5hcnRpY2xlcy5tYXAoKGFydCxrKSA9PiAoICAgICAgXG4gICAgICAgIDx0ciBrZXk9e2t9PlxuICAgICAgICAgIDx0ZD57aWQrK308L3RkPiAgICAgIFxuICAgICAgICAgIDx0ZD57YXJ0LmFydG5hbWUxfTwvdGQ+XG4gICAgICAgICAgPHRkPjxwIGNsYXNzTmFtZT1cInRleHQtYXIgYXJ0LWNlbGxcIj57Zm9ybWF0RGVjaW1hbChhcnQuYXJ0cHJpY2UpfTwvcD48L3RkPlxuICAgICAgICAgIDx0ZD57YXJ0LmFydHRheGxhYmVsfTwvdGQ+XG4gICAgICAgICAgPHRkPnthcnQuYXJ0dW5pdH08L3RkPlxuICAgICAgICAgIDx0ZD48cCBjbGFzc05hbWU9XCJ0ZXh0LWFyIGFydC1jZWxsXCI+e2Zvcm1hdERlY2ltYWwoYXJ0LnF1YW50aXR5KX08L3A+PC90ZD5cbiAgICAgICAgICA8dGQ+PHAgY2xhc3NOYW1lPVwidGV4dC1hciBhcnQtY2VsbFwiPntmb3JtYXREZWNpbWFsKGFydC5uZXR0b3ZhbHVlKX08L3A+PC90ZD5cbiAgICAgICAgICA8dGQ+PHAgY2xhc3NOYW1lPVwidGV4dC1hciBhcnQtY2VsbFwiPntmb3JtYXREZWNpbWFsKGFydC5icnV0dG92YWx1ZSl9PC9wPjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICApKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY2VsbC1yb3dcIj5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidzMtdGFibGUtYWxsXCI+PHRib2R5PlxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInczLXllbGxvd1wiPlxuICAgICAgICAgICAgICA8dGg+Tm1iPC90aD5cbiAgICAgICAgICAgICAgPHRoPkFydGljbGUncyBuYW1lPC90aD5cbiAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cbiAgICAgICAgICAgICAgPHRoPlRheCBSYXRlPC90aD5cbiAgICAgICAgICAgICAgPHRoPlVuaXQ8L3RoPlxuICAgICAgICAgICAgICA8dGg+UXR5PC90aD5cbiAgICAgICAgICAgICAgPHRoPk5ldHRvPC90aD5cbiAgICAgICAgICAgICAgPHRoPkJydXR0bzwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuYXJ0aWNsZXMuaXRlbXMgPyB0aGlzLnJlbmRlckFydGljbGVzKCkgOiAnJ31cbiAgICAgICAgICA8L3Rib2R5PjwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRJdGVtRGV0YWlsQXJ0aWNsZXMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2Zvcm1hdERlY2ltYWwsIHJvdW5kRmxvYXR9IGZyb20gJy4uL3NvbGlkaXR5L251bWJlcnMnXG5cbmNsYXNzIERvY3VtZW50SXRlbURldGFpbEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVySW52Rm9vdGVyKCkge1xuICAgIHZhciB0QnJ1dHRvID0gMDtcbiAgICB2YXIgdE5ldHRvID0gMDtcblxuICAgIGNvbnN0IGFydGljbGVzID0gdGhpcy5wcm9wcy5hcnRpY2xlcy5pdGVtc1t0aGlzLnByb3BzLmRvY3VtZW50LmlkXS5hcnRpY2xlc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJ0aWNsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRCcnV0dG8gKz0gcGFyc2VGbG9hdChhcnRpY2xlc1tpXS5icnV0dG92YWx1ZSlcbiAgICAgIHROZXR0byArPSBwYXJzZUZsb2F0KGFydGljbGVzW2ldLm5ldHRvdmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIDx0YWJsZSBjbGFzc05hbWU9XCJ3My10YWJsZSB3My1zdHJpcGVkXCI+PHRib2R5PlxuICAgICAgICA8dHI+PHRoIGNsYXNzTmFtZT1cInczLXJpZ2h0LWFsaWduIHczLXBhZGRpbmctc21hbGxcIj5Ub3RhbCBOZXR0bzwvdGg+PHRoIGNsYXNzTmFtZT1cInczLXJpZ2h0LWFsaWduIHczLXBhZGRpbmctc21hbGxcIj5Ub3RhbCBCcnV0dG88L3RoPjwvdHI+XG4gICAgICAgIDx0cj48dGQgY2xhc3NOYW1lPVwidzMtcmlnaHQtYWxpZ24gdzMtcGFkZGluZy1zbWFsbFwiPntmb3JtYXREZWNpbWFsKHJvdW5kRmxvYXQodE5ldHRvLDIpKX08L3RkPjx0ZCBjbGFzc05hbWU9XCJ3My1yaWdodC1hbGlnbiB3My1wYWRkaW5nLXNtYWxsXCI+e2Zvcm1hdERlY2ltYWwocm91bmRGbG9hdCh0QnJ1dHRvLCAyKSl9PC90ZD48L3RyPlxuICAgICAgPC90Ym9keT48L3RhYmxlPjsgICAgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY2VsbC1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My10aGlyZCB3My1yaWdodFwiPlxuICAgICAgICAgIHt0aGlzLnJlbmRlckludkZvb3RlcigpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRJdGVtRGV0YWlsRm9vdGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBIZWFkZXJJdGVtID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jZWxsXCIgc3R5bGU9e3t3aWR0aDogXCI1MCVcIn19PiAgICBcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3My10ZXh0LWdyYXlcIj57cHJvcHMubGFiZWx9PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3My1pbnB1dCB3My1wYWRkaW5nLXNtYWxsXCIgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e3Byb3BzLnZhbHVlfS8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgSGVhZGVySXRlbUN1c3QgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuICg8ZGl2PlxuICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3My10ZXh0LWdyYXlcIj57cHJvcHMubGFiZWx9PC9sYWJlbD5cbiAgICA8aW5wdXQgY2xhc3NOYW1lPVwidzMtaW5wdXQgdzMtcGFkZGluZy1zbWFsbFwiIHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXtwcm9wcy52YWx1ZX0vPlxuICA8L2Rpdj4pXG59XG5cbmNvbnN0IERvY3VtZW50SXRlbURldGFpbEhlYWRlciA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKCAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNlbGwtcm93XCI+XG4gIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtY2VsbCB3My1tb2JpbGUgdzMtcGFkZGluZy1zbWFsbFwiIHN0eWxlPXt7d2lkdGg6IFwiNTAlXCJ9fT5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLXBhZGRpbmctc21hbGxcIj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY2VsbC1yb3dcIj5cbiAgICAgICAgICAgIDxIZWFkZXJJdGVtIGxhYmVsPVwiRG9jdW1lbnQgbm1iXCIgdmFsdWU9e3Byb3BzLmRvY3VtZW50Lm51bWJlcn0vPlxuICAgICAgICAgICAgPEhlYWRlckl0ZW0gbGFiZWw9XCJQbGFjZSBvZiBJbnZvaWNlXCIgdmFsdWU9e3Byb3BzLmRvY3VtZW50LmxvY2F0aW9ufS8+ICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNlbGwtcm93XCI+XG4gICAgICAgICAgICA8SGVhZGVySXRlbSBsYWJlbD1cIkRhdGVcIiB2YWx1ZT17cHJvcHMuZG9jdW1lbnQuZGF0ZX0vPlxuICAgICAgICAgICAgPEhlYWRlckl0ZW0gbGFiZWw9XCJQYXltZW50XCIgdmFsdWU9e3Byb3BzLmRvY3VtZW50LnBheW1ldGhvZF9uYW1lfS8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNlbGwtcm93XCI+XG4gICAgICAgICAgICA8SGVhZGVySXRlbSBsYWJlbD1cIlBlcmlvZCBmcm9tOlwiIHZhbHVlPXtwcm9wcy5kb2N1bWVudC5wZXJpb2Rfc3RhcnRkYXRlfS8+XG4gICAgICAgICAgICA8SGVhZGVySXRlbSBsYWJlbD1cIlBlcmlvZCB0bzpcIiB2YWx1ZT17cHJvcHMuZG9jdW1lbnQucGVyaW9kX2VuZGRhdGV9Lz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jZWxsIHczLW1vYmlsZSB3My1wYWRkaW5nLXNtYWxsXCIgc3R5bGU9e3t3aWR0aDogXCI1MCVcIn19PlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ3My1wYWRkaW5nLXNtYWxsXCI+XG4gICAgICAgICAgPEhlYWRlckl0ZW1DdXN0IGxhYmVsPVwiQ3VzdG9tZXIgTmFtZSAxXCIgdmFsdWU9e3Byb3BzLmRvY3VtZW50LmN1c3RuYW1lMX0vPlxuICAgICAgICAgIDxIZWFkZXJJdGVtQ3VzdCBsYWJlbD1cIkN1c3RvbWVyIE5hbWUgMlwiIHZhbHVlPXtwcm9wcy5kb2N1bWVudC5jdXN0bmFtZTJ9Lz5cbiAgICAgICAgICA8SGVhZGVySXRlbUN1c3QgbGFiZWw9XCJWQVQgSURcIiB2YWx1ZT17cHJvcHMuZG9jdW1lbnQuY3VzdG5pcH0vPlxuICAgICAgICAgIDxIZWFkZXJJdGVtQ3VzdCBsYWJlbD1cIkludGVybmFsIEFjY291bnQgTm1iXCIgdmFsdWU9e3Byb3BzLmRvY3VtZW50LmN1c3RhY2NubWJ9Lz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRJdGVtRGV0YWlsSGVhZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBEb2N1bWVudEl0ZW1EZXRhaWxOdW1iZXIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1hbWJlclwiPlxuICAgICAgPGg1Pkludm9pY2UgTm1iOiB7cHJvcHMuZG9jdW1lbnQubnVtYmVyfTwvaDU+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRJdGVtRGV0YWlsTnVtYmVyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgRG9jdW1lbnRJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvRG9jdW1lbnRJdGVtJ1xuXG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSc7XG5cbmltcG9ydCB7IFxuICBmZXRjaERvY3VtZW50c0lmTmVlZGVkLCBcbiAgaW52YWxpZGF0ZURvY3VtZW50cywgXG4gIHByZXZQYWdlLCBcbiAgbmV4dFBhZ2UsIFxuICBjaGFuZ2VPcmRlciwgXG4gIHRvZ2dsZURvY3VtZW50LFxuICB0b2dnbGVBbGxEb2N1bWVudHMsXG4gIGNsb3NlRG9jdW1lbnQsIFxuICBjbG9zZUFsbERvY3VtZW50cyxcbiAgZmV0Y2hEb2N1bWVudERldGFpbFxuIH0gZnJvbSAnLi4vYWN0aW9ucydcblxuLy8gRG9jdW1lbnRMaXN0IGNvbXBvbmVudCAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jbGFzcyBEb2N1bWVudExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vdGhpcy5wcm9wcy5mZXRjaERvY3VtZW50c0lmTmVlZGVkKCk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChmZXRjaERvY3VtZW50c0lmTmVlZGVkKCkpXG4gIH1cblxuICBvbkNoYW5nZU9yZGVyKGNvbCkge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2VPcmRlcihjb2wpO1xuICB9XG5cbiAgZ2V0T3JkZXJFbGVtZW50KG9yZGVyKSB7XG4gICAgY29uc3QgZWwgPSAgKHRoaXMucHJvcHMuZG9jdW1lbnRzLm9yZGVyID09PSBvcmRlciA/ICh0aGlzLnByb3BzLmRvY3VtZW50cy5kaXJPcmRlciA9PT0gJ2FzYycgPyAxIDogMikgOiAwKVxuICAgIGlmICghZWwpIHJldHVybiAnJ1xuICAgIHJldHVybiBlbCA9PT0gMSA/IDxpIGNsYXNzTmFtZT1cImZhIGZhLXNvcnQtYW1vdW50LWFzYyB3My1wYWRkaW5nLXNtYWxsXCIgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIn19YXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiA6IDxpIGNsYXNzTmFtZT1cImZhIGZhLXNvcnQtYW1vdW50LWRlc2MgdzMtcGFkZGluZy1zbWFsbFwiIHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCJ9fWFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgfVxuICBvblRvb2dsZUFsbERvY3VtZW50cyhldmVudCkge1xuICAgIHRoaXMucHJvcHMub25Ub2dnbGVBbGxEb2N1bWVudHMoZXZlbnQudGFyZ2V0LmNoZWNrZWQpXG4gIH1cblxuICBnZXRIaWdobGlnaHRlZENvbENsYXNzKGNvbCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmRvY3VtZW50cy5vcmRlciA9PT0gY29sID8gJ3czLXRoZW1lLWQyJyA6ICcnXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnRMaXN0LnJlbmRlcigpXCIpXG4gICAgY29uc3QgcmVsb2FkQW5pbUNsYXNzID0gJ3czLXBhZGRpbmctc21hbGwgZmEgZmEtcmVmcmVzaCcgKyAodGhpcy5wcm9wcy5kb2N1bWVudHMgJiYgdGhpcy5wcm9wcy5kb2N1bWVudHMuaXNGZXRjaGluZyA/ICcgdzMtc3BpbicgOiAnJylcblxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG5cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLWJvcmRlciB3My1yb3VuZCB3My1wYWRkaW5nLXNtYWxsIGJ1dHRvbi1tYXJnaW4gYnV0dG9uLXN0eWxlXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5wcm9wcy5kaXNwYXRjaCh7IHR5cGU6ICdQUkVWX1BBR0UnIH0pfT5cbiAgICAgICAgICAgIEJhY2t3YXJkPGkgY2xhc3NOYW1lPVwidzMtcGFkZGluZy1zbWFsbCBmYSBmYS1hcnJvdy1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3My1idXR0b24gdzMtYm9yZGVyIHczLXJvdW5kIHczLXBhZGRpbmctc21hbGwgYnV0dG9uLW1hcmdpbiBidXR0b24tc3R5bGVcIiBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnByb3BzLmRpc3BhdGNoKHsgdHlwZTogJ05FWFRfUEFHRScgfSl9PlxuICAgICAgICAgICAgRm9yd2FyZDxpIGNsYXNzTmFtZT1cInczLXBhZGRpbmctc21hbGwgZmEgZmEtYXJyb3ctcmlnaHRcIj48L2k+PC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInczLWJ1dHRvbiB3My1ib3JkZXIgdzMtcm91bmQgdzMtcGFkZGluZy1zbWFsbCBidXR0b24tbWFyZ2luIGJ1dHRvbi1zdHlsZVwiIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5wcm9wcy5vblJlZnJlc2hEYXRhfT5cbiAgICAgICAgICAgIFJlbG9hZDxpIGNsYXNzTmFtZT17cmVsb2FkQW5pbUNsYXNzfT48L2k+PC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInczLWJ1dHRvbiB3My1ib3JkZXIgdzMtcm91bmQgdzMtcGFkZGluZy1zbWFsbCBidXR0b24tbWFyZ2luIGJ1dHRvbi1zdHlsZVwiIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlQWxsRG9jdW1lbnRzfT5cbiAgICAgICAgICAgIENsb3NlIGFsbDxpIGNsYXNzTmFtZT1cInczLXBhZGRpbmctc21hbGwgZmEgZmEtY29tcHJlc3NcIj48L2k+PC9hPlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5kb2N1bWVudHMuaXNGZXRjaEVycm9yID8gPGRpdiBjbGFzc05hbWU9XCJidXR0b24tbWFyZ2luIHczLWxlZnQgdzMtcGFkZGluZy1zbWFsbCBlcnJvcl9tc2dcIj5Pb3BzLCBubyByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIgb3IgYW4gdW5leHBlY3RlZCBmb3JtYXQgcmVjZWl2ZWQ8L2Rpdj4gOiAnJyB9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tbWFyZ2luIHczLXJpZ2h0IHczLXBhZGRpbmctc21hbGxcIj5QYWdlOiB7dGhpcy5wcm9wcy5kb2N1bWVudHMgJiYgdGhpcy5wcm9wcy5kb2N1bWVudHMuaXNGZXRjaGluZyA/ICcuLicgOiB0aGlzLnByb3BzLmRvY3VtZW50cy5wYWdlTm1iICsgMX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1ib3JkZXIgdzMtcm91bmQgdzMtbWVkaXVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXJvdyB3My10aGVtZS1kMSB3My10ZXh0LXdoaXRlXCI+IHsvKiB0YWJsZSBoZWFkZXIgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29sIHczLWxlZnQgZG9jLWNoZWNrXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImlucHV0LWNoZWNrYm94XCIgbmFtZT1cIlwiIHZhbHVlPVwiXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5kb2N1bWVudHMuYWxsU2VsZWN0ZWRJdGVtc30gb25DaGFuZ2U9eyhlKT0+KHRoaXMub25Ub29nbGVBbGxEb2N1bWVudHMoZSkpfS8+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29sIHczLWxlZnQgZG9jLWlkXCI+PHAgY2xhc3NOYW1lPVwidGV4dC1hciBwLWNlbGxcIj5pZDwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3Zlci1kaXZcIj48ZGl2IGNsYXNzTmFtZT17XCJ3My1jb2wgdzMtbGVmdCBkb2MtbnVtYmVyIFwiICsgdGhpcy5nZXRIaWdobGlnaHRlZENvbENsYXNzKCdudW1iZXInKX0gIG9uQ2xpY2s9eygpPT50aGlzLm9uQ2hhbmdlT3JkZXIoJ251bWJlcicpfT48cCBjbGFzc05hbWU9XCJ0ZXh0LWFsIHAtY2VsbFwiPkludiBObWIge3RoaXMuZ2V0T3JkZXJFbGVtZW50KCdudW1iZXInKX0gPC9wPjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbCB3My1sZWZ0IGRvYy10eXBlXCI+PHAgY2xhc3NOYW1lPVwidGV4dC1hYyBwLWNlbGxcIj5JbnYgVHlwZTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3Zlci1kaXZcIj48ZGl2IGNsYXNzTmFtZT17XCJ3My1jb2wgdzMtbGVmdCBkb2MtbnVtYmVyIFwiICsgdGhpcy5nZXRIaWdobGlnaHRlZENvbENsYXNzKCdkYXRlJyl9IG9uQ2xpY2s9eygpPT50aGlzLm9uQ2hhbmdlT3JkZXIoJ2RhdGUnKX0+PHAgY2xhc3NOYW1lPVwidGV4dC1hbCBwLWNlbGxcIj5EYXRlIHt0aGlzLmdldE9yZGVyRWxlbWVudCgnZGF0ZScpfTwvcD48L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3Zlci1kaXZcIj48ZGl2IGNsYXNzTmFtZT17XCJ3My1jb2wgdzMtcmlnaHQgZG9jLXZhbCBcIiArIHRoaXMuZ2V0SGlnaGxpZ2h0ZWRDb2xDbGFzcygnZXhjaXNlJyl9IG9uQ2xpY2s9eygpPT50aGlzLm9uQ2hhbmdlT3JkZXIoJ2V4Y2lzZScpfT48cCBjbGFzc05hbWU9XCJ0ZXh0LWFsIHAtY2VsbFwiPkV4Y2lzZSB7dGhpcy5nZXRPcmRlckVsZW1lbnQoJ2V4Y2lzZScpfTwvcD48L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3Zlci1kaXZcIj48ZGl2IGNsYXNzTmFtZT17XCJ3My1jb2wgdzMtcmlnaHQgZG9jLXZhbCBcIiArIHRoaXMuZ2V0SGlnaGxpZ2h0ZWRDb2xDbGFzcygnYnJ1dHRvJyl9IG9uQ2xpY2s9eygpPT50aGlzLm9uQ2hhbmdlT3JkZXIoJ2JydXR0bycpfT48cCBjbGFzc05hbWU9XCJ0ZXh0LWFsIHAtY2VsbFwiPkJydXR0byB7dGhpcy5nZXRPcmRlckVsZW1lbnQoJ2JydXR0bycpfTwvcD48L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3Zlci1kaXZcIj48ZGl2IGNsYXNzTmFtZT17XCJ3My1jb2wgdzMtcmlnaHQgZG9jLXZhbCBcIiArIHRoaXMuZ2V0SGlnaGxpZ2h0ZWRDb2xDbGFzcygnbmV0dG8nKX0gb25DbGljaz17KCk9PnRoaXMub25DaGFuZ2VPcmRlcignbmV0dG8nKX0+PHAgY2xhc3NOYW1lPVwidGV4dC1hbCBwLWNlbGxcIj5OZXR0byB7dGhpcy5nZXRPcmRlckVsZW1lbnQoJ25ldHRvJyl9PC9wPjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyLWRpdlwiPjxkaXYgY2xhc3NOYW1lPXtcInczLWNvbCB3My1yaWdodCBkb2MtbmlwIFwiICsgdGhpcy5nZXRIaWdobGlnaHRlZENvbENsYXNzKCdjdXN0bmlwJyl9IG9uQ2xpY2s9eygpPT50aGlzLm9uQ2hhbmdlT3JkZXIoJ2N1c3RuaXAnKX0+PHAgY2xhc3NOYW1lPVwidGV4dC1hbCBwLWNlbGxcIj5WQVQgSUQge3RoaXMuZ2V0T3JkZXJFbGVtZW50KCdjdXN0bmlwJyl9PC9wPjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyLWRpdlwiPjxkaXYgY2xhc3NOYW1lPXtcInczLXJlc3QgdGV4dC1hbCBcIiArIHRoaXMuZ2V0SGlnaGxpZ2h0ZWRDb2xDbGFzcygnY3VzdG5hbWUxJyl9IG9uQ2xpY2s9eygpPT50aGlzLm9uQ2hhbmdlT3JkZXIoJ2N1c3RuYW1lMScpfT48cCBjbGFzc05hbWU9XCJwLWNlbGxcIj5DdXN0b21lciB7dGhpcy5nZXRPcmRlckVsZW1lbnQoJ2N1c3RuYW1lMScpfTwvcD48L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGxpc3Qgb2YgZG9jdW1lbnRzICovfVxuICAgICAgICAgICAgeyB0aGlzLnByb3BzLmRvY3VtZW50cy5pdGVtcy5tYXAoIChkb2N1bWVudCk9PihcbiAgICAgICAgICAgICAgPERvY3VtZW50SXRlbSBcbiAgICAgICAgICAgICAgICBrZXk9e2RvY3VtZW50LklkfSBcbiAgICAgICAgICAgICAgICBkb2N1bWVudD17ZG9jdW1lbnR9XG4gICAgICAgICAgICAgICAgYXJ0aWNsZXM9e3RoaXMucHJvcHMuYXJ0aWNsZXN9XG4gICAgICAgICAgICAgICAgb3JkZXI9e3RoaXMucHJvcHMuZG9jdW1lbnRzLm9yZGVyfVxuICAgICAgICAgICAgICAgIG9uQ2hlY2tDbGljaz17dGhpcy5wcm9wcy5vblRvZ2dsZX1cbiAgICAgICAgICAgICAgICBvbk9wZW5EZXRhaWw9e3RoaXMucHJvcHMub25PcGVuRGV0YWlsfVxuICAgICAgICAgICAgICAgIG9uQ2xvc2VEZXRhaWw9e3RoaXMucHJvcHMub25DbG9zZURldGFpbH0vPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PjtcbiAgfVxufVxuXG4vL2V4cG9ydCBkZWZhdWx0IERvY3VtZW50TGlzdFxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIFxuICByZXR1cm4ge1xuXG4gICAgZmV0Y2hEb2N1bWVudHNJZk5lZWRlZDogKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goZmV0Y2hEb2N1bWVudHNJZk5lZWRlZCgpKVxuICAgIH0sXG4gICAgb25QYWdlQ2xpY2s6IChlLCBpbmNyLCBwYWdlTm1iID0gMCkgPT4ge1xuICAgICAgaWYgKCBpbmNyID09PSAtMSAmJiBwYWdlTm1iID4gMCApIHtcbiAgICAgICAgZGlzcGF0Y2gocHJldlBhZ2UoKSlcbiAgICAgICAgZGlzcGF0Y2goaW52YWxpZGF0ZURvY3VtZW50cygpKVxuICAgICAgICBkaXNwYXRjaChmZXRjaERvY3VtZW50c0lmTmVlZGVkKCkpXG4gICAgICAgIFxuICAgICAgICBSZWFjdEdBLmV2ZW50KHtcbiAgICAgICAgICBjYXRlZ29yeTogJ05hdmlnYXRpb24nLFxuICAgICAgICAgIGFjdGlvbjogJ1ByZXYgcGFnZScsXG4gICAgICAgICAgbGFiZWw6ICdUb3AgbmF2aWdhdGlvbidcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoIGluY3IgPT09IDEgKSB7XG4gICAgICAgIGRpc3BhdGNoKG5leHRQYWdlKCkpXG4gICAgICAgIGRpc3BhdGNoKGludmFsaWRhdGVEb2N1bWVudHMoKSlcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hEb2N1bWVudHNJZk5lZWRlZCgpKVxuXG4gICAgICAgIFJlYWN0R0EuZXZlbnQoe1xuICAgICAgICAgIGNhdGVnb3J5OiAnTmF2aWdhdGlvbicsXG4gICAgICAgICAgYWN0aW9uOiAnTmV4dCBwYWdlJyxcbiAgICAgICAgICBsYWJlbDogJ1RvcCBuYXZpZ2F0aW9uJ1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNoYW5nZU9yZGVyOiAoIG9yZGVyICkgPT4geyAgICBcbiAgICAgIGRpc3BhdGNoKGNoYW5nZU9yZGVyKG9yZGVyKSlcbiAgICAgIGRpc3BhdGNoKGludmFsaWRhdGVEb2N1bWVudHMoKSlcbiAgICAgIGRpc3BhdGNoKGZldGNoRG9jdW1lbnRzSWZOZWVkZWQoKSlcblxuICAgICAgUmVhY3RHQS5ldmVudCh7XG4gICAgICAgIGNhdGVnb3J5OiAnRG9jdW1lbnRzJyxcbiAgICAgICAgYWN0aW9uOiAnQ2hhbmdlIG9yZGVyOiAnICsgb3JkZXIsXG4gICAgICAgIGxhYmVsOiAnU29ydGluZydcbiAgICAgIH0pO1xuXG4gICAgfSxcbiAgICBvblJlZnJlc2hEYXRhOiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaChpbnZhbGlkYXRlRG9jdW1lbnRzKCkpXG4gICAgICBkaXNwYXRjaChmZXRjaERvY3VtZW50c0lmTmVlZGVkKCkpXG5cbiAgICAgIFJlYWN0R0EuZXZlbnQoe1xuICAgICAgICBjYXRlZ29yeTogJ05hdmlnYXRpb24nLFxuICAgICAgICBhY3Rpb246ICdSZWZyZXNoJyxcbiAgICAgICAgbGFiZWw6ICdUb3AgbmF2aWdhdGlvbidcbiAgICAgIH0pO1xuICAgICAgXG4gICAgfSxcbiAgICBvblRvZ2dsZTogKCBpZCApID0+IHtcbiAgICAgIGRpc3BhdGNoKHRvZ2dsZURvY3VtZW50KGlkKSlcblxuICAgICAgUmVhY3RHQS5ldmVudCh7XG4gICAgICAgIGNhdGVnb3J5OiAnRG9jdW1lbnRzJyxcbiAgICAgICAgYWN0aW9uOiAnVG9nZ2xlIGRvY3VtZW50JyxcbiAgICAgICAgbGFiZWw6ICcnXG4gICAgICB9KTtcbiAgICAgIFxuICAgIH0sXG4gICAgb25Ub2dnbGVBbGxEb2N1bWVudHM6ICggc2VsZWN0QWxsICkgPT4ge1xuICAgICAgZGlzcGF0Y2godG9nZ2xlQWxsRG9jdW1lbnRzKHNlbGVjdEFsbCkpXG5cbiAgICAgIFJlYWN0R0EuZXZlbnQoe1xuICAgICAgICBjYXRlZ29yeTogJ0RvY3VtZW50cycsXG4gICAgICAgIGFjdGlvbjogJ1RvZ2dsZSBhbGwgZG9jdW1lbnRzJyxcbiAgICAgICAgbGFiZWw6ICcnXG4gICAgICB9KTtcblxuXG4gICAgfSxcbiAgICBvbkNsb3NlRGV0YWlsOiAoaWQpID0+IHtcbiAgICAgIGRpc3BhdGNoKGNsb3NlRG9jdW1lbnQoaWQpKVxuXG4gICAgICBSZWFjdEdBLmV2ZW50KHtcbiAgICAgICAgY2F0ZWdvcnk6ICdEb2N1bWVudCcsXG4gICAgICAgIGFjdGlvbjogJ0Nsb3NlIGRldGFpbCcsXG4gICAgICAgIGxhYmVsOiAnRG9jdW1lbnQgZGV0YWlsJ1xuICAgICAgfSk7XG4gICAgICBcbiAgICB9LFxuICAgIG9uQ2xvc2VBbGxEb2N1bWVudHM6ICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGNsb3NlQWxsRG9jdW1lbnRzKCkpICAgIFxuXG4gICAgICBSZWFjdEdBLmV2ZW50KHtcbiAgICAgICAgY2F0ZWdvcnk6ICdEb2N1bWVudCcsXG4gICAgICAgIGFjdGlvbjogJ0Nsb3NlIGFsbCBkb2N1bWVudHMnLFxuICAgICAgICBsYWJlbDogJ0RvY3VtZW50IGRldGFpbCdcbiAgICAgIH0pO1xuICAgICAgXG4gICAgfSxcbiAgICBvbk9wZW5EZXRhaWw6IChpZCkgPT4ge1xuICAgICAgZGlzcGF0Y2goZmV0Y2hEb2N1bWVudERldGFpbChpZCkpXG5cbiAgICAgIFJlYWN0R0EuZXZlbnQoe1xuICAgICAgICBjYXRlZ29yeTogJ0RvY3VtZW50JyxcbiAgICAgICAgYWN0aW9uOiAnT3BlbiBkZXRhaWwnLFxuICAgICAgICBsYWJlbDogJ0RvY3VtZW50IGRldGFpbCdcbiAgICAgIH0pO1xuICAgICAgXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAvL2FydGljbGVzOiBzdGF0ZS5hcnRpY2xlcyxcbiAgICAgIGRvY3VtZW50czogc3RhdGUuZG9jdW1lbnRzXG4gICAgfX1cbiAgLy9tYXBEaXNwYXRjaFRvUHJvcHNcbikoRG9jdW1lbnRMaXN0KVxuIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTdmMzcwMjVkMDQyMWNkYzRlMGU3MDk4OWRmYjAxZWYuc3ZnXCI7IiwiLy8gUmVhY3QsIHJlZHV4IGFuZCB0aHVua1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSAncmVkdXgtbG9nZ2VyJ1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycydcbi8vaW1wb3J0IERvY3VtZW50TGlzdENvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvRG9jdW1lbnRMaXN0Q29udGFpbmVyJztcbmltcG9ydCBEb2N1bWVudExpc3QgZnJvbSAnLi9jb21wb25lbnRzL0RvY3VtZW50TGlzdCc7XG5pbXBvcnQgJy4vY3NzL3N0eWxlcy5jc3MnO1xuLy9pbXBvcnQgJy4vY3NzL3czLmNzcyc7XG5cbi8vIEVuYWJsZSBsb2dnZXIgXG5jb25zdCBtaWRkbGV3YXJlID0gWyB0aHVuayBdXG5pZiAoIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgbWlkZGxld2FyZS5wdXNoKGNyZWF0ZUxvZ2dlcigpKVxufVxuXG4vLyBSZWR1eCBzdG9yZVxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgcmVkdWNlcixcbiAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpXG4pXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPERvY3VtZW50TGlzdCAvPlxuICA8L1Byb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKVxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBcbiAgICBSRVFVRVNUX0RPQ1VNRU5UUywgXG4gICAgUkVDRUlWRV9ET0NVTUVOVFMsIFxuICAgIElOVkFMSURBVEVfRE9DVU1FTlRTLCBcbiAgICBORVhUX1BBR0UsIFxuICAgIFBSRVZfUEFHRSwgXG4gICAgQ0hBTkdFX09SREVSLFxuICAgIFRPR0dMRV9ET0NVTUVOVCxcbiAgICBUT0dHTEVfQUxMX0RPQ1VNRU5UUyxcbiAgICBUT0dHTEVfU1BJTk5FUixcbiAgICBPUEVOX0RPQ1VNRU5ULFxuICAgIENMT1NFX0RPQ1VNRU5ULFxuICAgIENMT1NFX0FMTERPQ1VNRU5UUyxcbiAgICBSRUNFSVZFX0RPQ1VNRU5UREVUQUlMLFxuICAgIEZFVENIX0VSUk9SXG59IGZyb20gJy4uL2FjdGlvbnMnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICBpdGVtczogW10sXG4gICAgc2VsZWN0ZWRJdGVtczogW10sXG4gICAgYWxsU2VsZWN0ZWRJdGVtczogZmFsc2UsXG4gICAgbGFzdFVwZGF0ZWQ6ICcnLFxuICAgIGRpZEludmFsaWRhdGU6IHRydWUsXG4gICAgcGFnZU5tYjogMCxcbiAgICBwYWdlU2l6ZTogMjAsXG4gICAgb3JkZXI6ICdudW1iZXInLFxuICAgIGRpck9yZGVyOiAnYXNjJyxcbiAgICBpc0ZldGNoRXJyb3I6IGZhbHNlLFxuICAgIGZldGNoRXJyb3JTdGF0dXM6IDIwMFxufVxuXG4vLyBEb2N1bWVudCBsaXN0IHJlZHVjZXJcbmNvbnN0IHVwZGF0ZU9wZW4gPSAoaWQsIGl0ZW1zLCByZWNlaXZlZEF0KSA9PiB7XG4gIHJldHVybiBpdGVtcy5tYXAoIChkb2MpID0+IHtcbiAgICBpZiAoZG9jLmlkID09PSBpZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZG9jLFxuICAgICAgICBvcGVuaW5nOiB0cnVlLFxuICAgICAgICBjbG9zaW5nOiBmYWxzZSxcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IHJlY2VpdmVkQXRcbiAgICAgIH1cbiAgICB9IGVsc2UgcmV0dXJuIGRvY1xuICB9KVxufVxuXG5jb25zdCB1cGRhdGVDbG9zZSA9IChpZCwgaXRlbXMsIHJlY2VpdmVkQXQpID0+IHtcbiAgcmV0dXJuIGl0ZW1zLm1hcCggKGRvYykgPT4ge1xuICAgIGlmIChkb2MuaWQgPT09IGlkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5kb2MsXG4gICAgICAgIG9wZW5pbmc6IGZhbHNlLFxuICAgICAgICBjbG9zaW5nOiB0cnVlLFxuICAgICAgICBsYXN0VXBkYXRlZDogcmVjZWl2ZWRBdFxuICAgICAgfVxuICAgIH0gZWxzZSByZXR1cm4gZG9jIFxuICB9KVxufVxuXG5jb25zdCB0b2dnbGUgPSAoc2VsZWN0ZWRJdGVtcywgaXRlbXMsIHRvZ2dsZURvY3VtZW50SWQsIHJlY2VpdmVkQXQgKSA9PiB7XG4gICAgLy8gVG8gYXZvaWQgbXV0YWJpbGl0eVxuICAgIGxldCBuZXdTZWxlY3RlZEl0ZW1zID0gc2VsZWN0ZWRJdGVtcy5zbGljZSgpXG4gICAgLy8gUm93IGlzIHNlbGVjdGVkIGFuZCB3aWxsIGJlIGRlc2VsZWN0ZWRcbiAgICBpZiAoIG5ld1NlbGVjdGVkSXRlbXNbdG9nZ2xlRG9jdW1lbnRJZF0gKVxuICAgICAgICBkZWxldGUobmV3U2VsZWN0ZWRJdGVtc1t0b2dnbGVEb2N1bWVudElkXSlcbiAgICAvLyBSb3cgaXMgbm90IHNlbGVjdGVkIGFuZCB3aWxsIGJlIHNlbGVjdGVkXG4gICAgZWxzZSBcbiAgICAgICAgbmV3U2VsZWN0ZWRJdGVtc1t0b2dnbGVEb2N1bWVudElkXSA9IHRydWVcblxuICAgIHJldHVybiB7XG4gICAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoIChkb2MpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2MuaWQgPT09IHBhcnNlSW50KHRvZ2dsZURvY3VtZW50SWQsIDEwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmRvYyxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogbmV3U2VsZWN0ZWRJdGVtc1t0b2dnbGVEb2N1bWVudElkXSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IHJlY2VpdmVkQXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgcmV0dXJuIGRvY1xuICAgICAgICB9KSxcbiAgICAgICAgc2VsZWN0ZWRJdGVtczogbmV3U2VsZWN0ZWRJdGVtc1xuICAgIH1cbn1cbmNvbnN0IHRvZ2dsZUFsbERvY3VtZW50cyA9IChpdGVtcywgYWN0aW9uKSA9PiB7XG4gICAgdmFyIHNlbGVjdGVkSXRlbXMgPSBbXVxuICAgIHJldHVybiB7XG4gICAgICAgIF9pdGVtczogaXRlbXMubWFwKCAoZG9jKSA9PiB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLnNlbGVjdEFsbCkgc2VsZWN0ZWRJdGVtc1tkb2MuaWRdID0gdHJ1ZVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5kb2MsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogYWN0aW9uLnNlbGVjdEFsbCxcbiAgICAgICAgICAgICAgICBsYXN0VXBkYXRlZDogYWN0aW9uLnJlY2VpdmVkQXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF9zZWxlY3RlZEl0ZW1zOiBzZWxlY3RlZEl0ZW1zXG4gICAgfVxufVxuXG4vLyBTZXQgc2VsZWN0ZWQgZG9jdW1lbnRzIGFmdGVyIHBhZ2UgY2hhbmdlLCBzZXQgb3BlbmVkXG5jb25zdCB1cGRhdGVEb2N1bWVudHNTdGF0ZSA9ICggc2VsZWN0ZWRJdGVtcywgaXRlbXMsIHJlY2VpdmVkQXQgKSA9PiB7XG4gICAgaWYgKCFpdGVtcykgcmV0dXJuIG51bGxcbiAgICBsZXQgbmV3SXRlbXMgPSBpdGVtcy5tYXAoIChkb2MpID0+IHtcbiAgICAgICAgaWYgKCBzZWxlY3RlZEl0ZW1zWyBkb2MuaWQgXSApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uZG9jLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgb3BlbmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2xvc2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3Bpbm5lcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IHJlY2VpdmVkQXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSByZXR1cm4geyBcbiAgICAgICAgICAgIC4uLmRvYyxcbiAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgb3BlbmluZzogZmFsc2UsXG4gICAgICAgICAgICBjbG9zaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHNwaW5uZXI6IGZhbHNlLFxuICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IHJlY2VpdmVkQXRcbiAgICAgICAgfSAgICBcbiAgICB9KVxuICAgIHJldHVybiBuZXdJdGVtc1xufVxuXG5jb25zdCBkb2N1bWVudHMgPSAoIHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gKSA9PiB7XG4gICAgc3dpdGNoKCBhY3Rpb24udHlwZSApIHtcbiAgICAgICAgY2FzZSBSRVFVRVNUX0RPQ1VNRU5UUzogICAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgZGlkSW52YWxpZGF0ZTogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgUkVDRUlWRV9ET0NVTUVOVFM6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgaXRlbXM6IHVwZGF0ZURvY3VtZW50c1N0YXRlKCBzdGF0ZS5zZWxlY3RlZEl0ZW1zLCBhY3Rpb24uaXRlbXMsIGFjdGlvbi5yZWNlaXZlZEF0ICksXG4gICAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBhY3Rpb24ucmVjZWl2ZWRBdCxcbiAgICAgICAgICAgICAgaXNGZXRjaEVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgICAgZmV0Y2hFcnJvclN0YXR1czogMjAwXG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIElOVkFMSURBVEVfRE9DVU1FTlRTOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICBkaWRJbnZhbGlkYXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIE5FWFRfUEFHRTpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgcGFnZU5tYjogc3RhdGUucGFnZU5tYiArIDEsXG4gICAgICAgICAgICAgIGRpZEludmFsaWRhdGU6IHRydWUsXG4gICAgICAgICAgICAgIGFsbFNlbGVjdGVkSXRlbXM6IGZhbHNlLFxuICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiBzdGF0ZS5hbGxTZWxlY3RlZEl0ZW1zID8gW10gOiBzdGF0ZS5zZWxlY3RlZEl0ZW1zXG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIFBSRVZfUEFHRTpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgcGFnZU5tYjogc3RhdGUucGFnZU5tYiA+IDAgPyBzdGF0ZS5wYWdlTm1iIC0gMSA6IHN0YXRlLnBhZ2VObWIsXG4gICAgICAgICAgICAgIGRpZEludmFsaWRhdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQ0hBTkdFX09SREVSOlxuICAgICAgICAgIGlmICggc3RhdGUub3JkZXIgPT09IGFjdGlvbi5vcmRlcikge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgICBvcmRlcjogYWN0aW9uLm9yZGVyLFxuICAgICAgICAgICAgICAgICAgZGlyT3JkZXI6IHN0YXRlLmRpck9yZGVyID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnLFxuICAgICAgICAgICAgICAgICAgZGlkSW52YWxpZGF0ZTogdHJ1ZSAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgIG9yZGVyOiBhY3Rpb24ub3JkZXIsXG4gICAgICAgICAgICAgIGRpck9yZGVyOiAnYXNjJyxcbiAgICAgICAgICAgICAgZGlkSW52YWxpZGF0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBUT0dHTEVfRE9DVU1FTlQ6XG4gICAgICAgICAgdmFyIHtpdGVtcywgc2VsZWN0ZWRJdGVtc30gPSB0b2dnbGUoIHN0YXRlLnNlbGVjdGVkSXRlbXMsIHN0YXRlLml0ZW1zLCBhY3Rpb24uaWQsIGFjdGlvbi5yZWNlaXZlZEF0IClcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpdGVtczogaXRlbXMsXG4gICAgICAgICAgICBsYXN0VXBkYXRlZDogYWN0aW9uLnJlY2VpdmVkQXQsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiBzZWxlY3RlZEl0ZW1zLFxuICAgICAgICAgICAgYWxsU2VsZWN0ZWRJdGVtczogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgVE9HR0xFX0FMTF9ET0NVTUVOVFM6XG4gICAgICAgICAgdmFyIHtfaXRlbXMsIF9zZWxlY3RlZEl0ZW1zfSA9IHRvZ2dsZUFsbERvY3VtZW50cyggc3RhdGUuaXRlbXMsIGFjdGlvbiApXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgaXRlbXM6IF9pdGVtcyxcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM6IF9zZWxlY3RlZEl0ZW1zLFxuICAgICAgICAgICAgYWxsU2VsZWN0ZWRJdGVtczogYWN0aW9uLnNlbGVjdEFsbFxuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBPUEVOX0RPQ1VNRU5UOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGl0ZW1zOiB1cGRhdGVPcGVuKGFjdGlvbi5pZCwgc3RhdGUuaXRlbXMsIGFjdGlvbi5yZWNlaXZlZEF0KVxuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBDTE9TRV9ET0NVTUVOVDpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpdGVtczogdXBkYXRlQ2xvc2UoYWN0aW9uLmlkLCBzdGF0ZS5pdGVtcywgYWN0aW9uLnJlY2VpdmVkQXQpXG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIFRPR0dMRV9TUElOTkVSOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoIChkb2MpID0+IHsgXG4gICAgICAgICAgICAgICAgaWYgKCBkb2MuaWQgPT09IGFjdGlvbi5pZCApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRvYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uZXI6ICFkb2Muc3Bpbm5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBhY3Rpb24ucmVjZWl2ZWRBdFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHJldHVybiBkb2NcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIGNhc2UgQ0xPU0VfQUxMRE9DVU1FTlRTOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoIChkb2MpID0+IHsgXG4gICAgICAgICAgICAgICAgaWYgKCBkb2Mub3BlbmluZyApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRvYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2luZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBhY3Rpb24ucmVjZWl2ZWRBdFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHJldHVybiBkb2NcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IGFjdGlvbi5yZWNlaXZlZEF0XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIEZFVENIX0VSUk9SOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0ZldGNoRXJyb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgZmV0Y2hFcnJvclN0YXR1czogYWN0aW9uLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuLy8gRG9jdW1lbnQgZGV0YWlsIHJlZHVjZXJcbmNvbnN0IGluaXRpYWxTdGF0ZURvY0RldGFpbCA9IHtcbiAgICBpdGVtczogW11cbn1cbmNvbnN0IGFydGljbGVzID0gKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZURvY0RldGFpbCwgYWN0aW9uICkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBSRUNFSVZFX0RPQ1VNRU5UREVUQUlMOlxuICAgICAgICAgIHZhciBuZXdJdGVtcyA9IHN0YXRlLml0ZW1zLnNsaWNlKCk7XG4gICAgICAgICAgbmV3SXRlbXNbYWN0aW9uLmlkXSA9IHtcbiAgICAgICAgICAgICAgYXJ0aWNsZXM6IGFjdGlvbi5kb2N1bWVudC5hcnRpY2xlc1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IG5ld0l0ZW1zXG4gICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgZG9jdW1lbnRzLFxuICAgIGFydGljbGVzXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCJcbi8vIEZvcm1hdCBkZWNpbWFsIHN0cmluZyBcIm5ubm5uLm5uIHRvIFwibm4gbm5uLm5uICRcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREZWNpbWFsKHN0cmRlYywgY3VycmVuY3ksIGxlZnQpIHtcbiAgICB2YXIgb3V0ID0gXCJcIlxuICAgIHZhciBmbGVmdCA9IGxlZnQgfHwgZmFsc2U7XG5cbiAgICB2YXIgZm10ZGVjID0gcm91bmRUb1R3byhwYXJzZUZsb2F0KHN0cmRlYykpLnRvRml4ZWQoMikucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KStcXC4pL2csICckMSAnKTtcbiAgICBpZiAoY3VycmVuY3kpIG91dCA9IGZsZWZ0ID8gY3VycmVuY3kgKyBcIiBcIiArIGZtdGRlYyA6IGZtdGRlYyArIFwiIFwiICsgY3VycmVuY3k7XG4gICAgZWxzZSBvdXQgPSBmbXRkZWM7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiByb3VuZFRvVHdvKG51bSkgeyAgICBcbiAgICByZXR1cm4gKyhNYXRoLnJvdW5kKG51bSArIFwiZSsyXCIpICArIFwiZS0yXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmRGbG9hdChudW1iZXIsIHByZWNpc2lvbikge1xuICAgIHZhciBmYWN0b3IgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgICB2YXIgdGVtcE51bWJlciA9IG51bWJlciAqIGZhY3RvcjtcbiAgICB2YXIgcm91bmRlZFRlbXBOdW1iZXIgPSBNYXRoLnJvdW5kKHRlbXBOdW1iZXIpO1xuICAgIHJldHVybiByb3VuZGVkVGVtcE51bWJlciAvIGZhY3Rvcjtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==