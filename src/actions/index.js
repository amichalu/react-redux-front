// Document's list actions
export const REQUEST_DOCUMENTS = 'REQUEST_DOCUMENTS'
export const RECEIVE_DOCUMENTS = 'RECEIVE_DOCUMENTS'
export const INVALIDATE_DOCUMENTS = 'INVALIDATE_DOCUMENTS'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'
export const CHANGE_ORDER = 'CHANGE_ORDER'
export const TOOGLE_DOCUMENT = 'TOOGLE_DOCUMENT'
export const TOOGLE_ALL_DOCUMENTS = 'TOOGLE_ALL_DOCUMENTS'
export const TOOGLE_SPINNER = 'TOOGLE_SPINNER'
export const OPEN_DOCUMENT = 'OPEN_DOCUMENT'
export const CLOSE_DOCUMENT = 'CLOSE_DOCUMENT'
export const CLOSE_ALLDOCUMENTS = 'CLOSE_ALLDOCUMENTS'

// Document detail actions
export const REQUEST_DOCUMENTDETAIL = 'REQUEST_DOCUMENTDETAIL'
export const RECEIVE_DOCUMENTDETAIL = 'RECEIVE_DOCUMENTDETAIL'

export const invalidateDocuments = () => ({
  type: INVALIDATE_DOCUMENTS
})

export const requestDocuments = () => ({
  type: REQUEST_DOCUMENTS
})

const prepareDocuments = (documents) => {
  var even = false;
  for (var i = 0; i < documents.length; i++) {
    documents[i].even = !even;
    even = !even;
  }
  return documents;
}

export const toogleDocument = (id) => ({
  type: TOOGLE_DOCUMENT,
  id: id,
  receivedAt: Date.now()
}) 
export const toogleAllDocuments = (selectAll) => ({
  type: TOOGLE_ALL_DOCUMENTS,
  selectAll: selectAll,
  receivedAt: Date.now()
}) 

export const toogleSpinner = (id) => ({
  type: TOOGLE_SPINNER,
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
  items: prepareDocuments( json.documents ),
  receivedAt: Date.now()
})

export const changeOrder = ( col = 'number' ) => ({
  type: CHANGE_ORDER,
  order: col
})

export const nextPage = () => ({
    type: NEXT_PAGE
})
export const prevPage = () => ({
    type: PREV_PAGE
})

const getUrl = (state) => ("/documents/" + state.documents.order + "/" + state.documents.pageNmb + "/" + state.documents.pageSize + "/" + state.documents.dirOrder)

const fetchDocuments = () => (dispatch, getState) => {
  dispatch(requestDocuments())
  return fetch( getUrl(getState()) )
    .then(response => response.json())
    .then(json => dispatch(receiveDocuments(json)))
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

export const fetchDocumentArticlesIfNeeded = () => (dispatch, getState) => {
  console.log('fetchDocumentArticlesIfNeeded()')
}

// Document detail actions
export const requestDocumentDetail = () => ({
  type: REQUEST_DOCUMENTDETAIL
})
export const receiveDocumentDetail = (json, id) => ({
  type: RECEIVE_DOCUMENTDETAIL,
  document: json,
  id: id,
  receivedAt: Date.now()
})

const getUrlDocumentDetail = (id) => ("/documentarticles/" + id)

export const fetchDocumentDetail = id => (dispatch) => {
  dispatch(requestDocumentDetail())
  return fetch( getUrlDocumentDetail(id) )
    .then(response => response.json())
    .then(json => dispatch(receiveDocumentDetail(json, id)))
}

