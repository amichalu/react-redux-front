
// Document's list actions
export const REQUEST_DOCUMENTS = 'REQUEST_DOCUMENTS'
export const RECEIVE_DOCUMENTS = 'RECEIVE_DOCUMENTS'
export const INVALIDATE_DOCUMENTS = 'INVALIDATE_DOCUMENTS'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'
export const CHANGE_ORDER = 'CHANGE_ORDER'
export const TOGGLE_DOCUMENT = 'TOOGLE_DOCUMENT'
export const TOGGLE_ALL_DOCUMENTS = 'TOOGLE_ALL_DOCUMENTS'
export const TOGGLE_SPINNER = 'TOOGLE_SPINNER'
export const OPEN_DOCUMENT = 'OPEN_DOCUMENT'
export const CLOSE_DOCUMENT = 'CLOSE_DOCUMENT'
export const CLOSE_ALLDOCUMENTS = 'CLOSE_ALLDOCUMENTS'
export const FETCH_ERROR = 'FETCH_ERROR'

// Document detail actions
export const RECEIVE_DOCUMENTDETAIL = 'RECEIVE_DOCUMENTDETAIL'

export const invalidateDocuments = () => ({
  type: INVALIDATE_DOCUMENTS
})

export const requestDocuments = () => ({
  type: REQUEST_DOCUMENTS
})

const prepareDocuments = (documents) => {
  if (!documents) return
  var even = false;
  for (var i = 0; i < documents.length; i++) {
    documents[i].even = !even;
    even = !even;
  }
  return documents;
}

export const toggleDocument = (id) => ({
  type: TOGGLE_DOCUMENT,
  id: id,
  receivedAt: Date.now()
}) 
export const toggleAllDocuments = (selectAll) => ({
  type: TOGGLE_ALL_DOCUMENTS,
  selectAll: selectAll,
  receivedAt: Date.now()
}) 

export const toggleSpinner = (id) => ({
  type: TOGGLE_SPINNER,
  id: id,
  receivedAt: Date.now()  
})

export const openDocument = (id) => ({
  type: OPEN_DOCUMENT,
  id: id,
  receivedAt: Date.now()
})
export const closeDocument = (id) => ({
  type: CLOSE_DOCUMENT,
  id: id,
  receivedAt: Date.now()
})
export const closeAllDocuments = () => ({
  type: CLOSE_ALLDOCUMENTS,
  receivedAt: Date.now()
})

export const receiveDocuments = (json) => ({
  type: RECEIVE_DOCUMENTS,
  items: prepareDocuments( json ),
  receivedAt: Date.now()
})

export const changeOrder = ( col = 'number' ) => ({
  type: CHANGE_ORDER,
  order: col
})

export const onRefreshData = () => {
  return (dispatch) => {
    dispatch(invalidateDocuments())
    dispatch(fetchDocumentsIfNeeded())
  }
}

export const nextPageClick = () => {
  return (dispatch) => {
    dispatch(nextPage())
    dispatch(invalidateDocuments())
    dispatch(fetchDocumentsIfNeeded())
  }
}

export const prevPageClick = () => {
  return (dispatch) => {
    dispatch(prevPage())
    dispatch(invalidateDocuments())
    dispatch(fetchDocumentsIfNeeded())
  }
}

export const nextPage = () => ({
  type: NEXT_PAGE
})
export const prevPage = () => ({
  type: PREV_PAGE
})

export const fetchError = (status) => ({
  type: FETCH_ERROR,
  status: status
})

const getUrl = (state) => ("/documents/" + state.documents.order + "/" + state.documents.pageNmb + "/" + state.documents.pageSize + "/" + state.documents.dirOrder)

const fetchDocuments = () => (dispatch, getState) => {
  dispatch(requestDocuments())
  return fetch( getUrl(getState()) )
    .then(response => response.json())
    .then(json => dispatch(receiveDocuments(json)))
    .catch(error => {
      const status = error.response ? error.response.status : 500
      dispatch(fetchError(status))
    });
}

const shouldFetchDocuments = (state) => {
  
  const documents = state.documents
  if (!documents.items) {
    return true
  }
  if (documents.isFetching) {
    return false
  }
  return documents.didInvalidate
}

export const fetchDocumentsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchDocuments(getState())) {
    return dispatch(fetchDocuments())
  }
}

// Document detail actions
export const receiveDocumentDetail = (json, id) => ({
  type: RECEIVE_DOCUMENTDETAIL,
  document: json,
  id: id,
  receivedAt: Date.now()
})

// This is called by fetch() in fetchDocumentDetail()
// We dispatch RECEIVE_DOCUMENTDETAIL, TOGGLE_SPINNER & OPEN_DOCUMENT
export const receiveDocumentDetailActions = (json, id) => (dispatch) => {
  dispatch(receiveDocumentDetail(json,id))
  dispatch(toggleSpinner(id))
  dispatch(openDocument(id))
}

const getUrlDocumentDetail = (id) => ("/documentarticles/" + id)

export const fetchDocumentDetail = (id) => (dispatch, getState) => {
  var alreadyOpened = false;
  getState().documents.items.forEach((doc) => {
    if (doc.Id === id && doc.opening) {
      alreadyOpened = true
      return
    }
  })
  if (!alreadyOpened) {
    dispatch(toggleSpinner(id))
    return fetch( getUrlDocumentDetail(id) )
      .then(response => response.json())
      .then(json => dispatch(receiveDocumentDetailActions(json, id)))
      .catch(error => {
        const status = error.response ? error.response.status : 500
        dispatch(fetchError(status))
      });  
  }
}


