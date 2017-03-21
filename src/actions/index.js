export const REQUEST_DOCUMENTS = 'REQUEST_DOCUMENTS'
export const RECEIVE_DOCUMENTS = 'RECEIVE_DOCUMENTS'
export const INVALIDATE_DOCUMENTS = 'INVALIDATE_DOCUMENTS'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'
export const CHANGE_ORDER = 'CHANGE_ORDER'

export const invalidateDocuments = () => ({
  type: INVALIDATE_DOCUMENTS
})

export const requestDocuments = () => ({
  type: REQUEST_DOCUMENTS
})

export const receiveDocuments = (json) => ({
  type: RECEIVE_DOCUMENTS,
  items: setEvenDocuments( json.documents ),
  receivedAt: Date.now()
})

export const changeOrder = ( newOrder ) => ({
  type: CHANGE_ORDER,
  order: newOrder.col || 'number',
  dirOrder: newOrder.dir || 'asc'
})

export const nextPage = () => ({
    type: NEXT_PAGE
})
export const prevPage = () => ({
    type: PREV_PAGE
})

const setEvenDocuments = (documents) => {
  var even = false;
  for (var i = 0; i < documents.length; i++) {
    documents[i].even = !even;
    even = !even;
  }
  return documents;
}

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