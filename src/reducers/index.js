import { combineReducers } from 'redux'
import { 
    REQUEST_DOCUMENTS, 
    RECEIVE_DOCUMENTS, 
    INVALIDATE_DOCUMENTS, 
    NEXT_PAGE, 
    PREV_PAGE, 
    CHANGE_ORDER,
    TOGGLE_DOCUMENT,
    TOGGLE_ALL_DOCUMENTS,
    TOGGLE_SPINNER,
    OPEN_DOCUMENT,
    CLOSE_DOCUMENT,
    CLOSE_ALLDOCUMENTS,
    RECEIVE_DOCUMENTDETAIL,
    FETCH_ERROR
} from '../actions'

const initialState = {
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
}

// Document list reducer
const updateOpen = (id, items, receivedAt) => {
  return items.map( (doc) => {
    if (doc.id === id) {
      return {
        ...doc,
        opening: true,
        closing: false,
        lastUpdated: receivedAt
      }
    } else return doc
  })
}

const updateClose = (id, items, receivedAt) => {
  return items.map( (doc) => {
    if (doc.id === id) {
      return {
        ...doc,
        opening: false,
        closing: true,
        lastUpdated: receivedAt
      }
    } else return doc 
  })
}

const toggle = (selectedItems, items, toggleDocumentId, receivedAt ) => {
    // To avoid mutability
    let newSelectedItems = selectedItems.slice()
    // Row is selected and will be deselected
    if ( newSelectedItems[toggleDocumentId] )
        delete(newSelectedItems[toggleDocumentId])
    // Row is not selected and will be selected
    else 
        newSelectedItems[toggleDocumentId] = true

    return {
        items: items.map( (doc) => {
            if (doc.id === parseInt(toggleDocumentId, 10)) {
                return {
                    ...doc,
                    checked: newSelectedItems[toggleDocumentId] ? true : false,
                    lastUpdated: receivedAt
                }
            } else return doc
        }),
        selectedItems: newSelectedItems
    }
}
const toggleAllDocuments = (items, action) => {
    var selectedItems = []
    return {
        _items: items.map( (doc) => {
            if (action.selectAll) selectedItems[doc.id] = true
            return {
                ...doc,
                checked: action.selectAll,
                lastUpdated: action.receivedAt
            }
        }),
        _selectedItems: selectedItems
    }
}

// Set selected documents after page change, set opened
const updateDocumentsState = ( selectedItems, items, receivedAt ) => {
    if (!items) return null
    let newItems = items.map( (doc) => {
        if ( selectedItems[ doc.id ] ) {
            return {
                ...doc,
                checked: true,
                opening: false,
                closing: false,
                spinner: false,
                lastUpdated: receivedAt
            }
        } 
        else return { 
            ...doc,
            checked: false,
            opening: false,
            closing: false,
            spinner: false,
            lastUpdated: receivedAt
        }    
    })
    return newItems
}

const documents = ( state = initialState, action ) => {
    switch( action.type ) {
        case REQUEST_DOCUMENTS:            
          return {
              ...state,
              isFetching: true,
              didInvalidate: false
          }
        case RECEIVE_DOCUMENTS:
          return {
              ...state,
              isFetching: false,
              didInvalidate: false,
              items: updateDocumentsState( state.selectedItems, action.items, action.receivedAt ),
              lastUpdated: action.receivedAt,
              isFetchError: false,
              fetchErrorStatus: 200
          }
        case INVALIDATE_DOCUMENTS:
          return {
              ...state,
              didInvalidate: true
          }
        case NEXT_PAGE:
          return {
              ...state,
              pageNmb: state.pageNmb + 1,
              didInvalidate: true,
              allSelectedItems: false,
              selectedItems: state.allSelectedItems ? [] : state.selectedItems
          }
        case PREV_PAGE:
          return {
              ...state,
              pageNmb: state.pageNmb > 0 ? state.pageNmb - 1 : state.pageNmb,
              didInvalidate: true
          }
        case CHANGE_ORDER:
          if ( state.order === action.order) {
              return {
                  ...state,
                  order: action.order,
                  dirOrder: state.dirOrder === 'asc' ? 'desc' : 'asc',
                  didInvalidate: true                    
              }
          }
          return {
              ...state,
              order: action.order,
              dirOrder: 'asc',
              didInvalidate: true
          }
        case TOGGLE_DOCUMENT:
          var {items, selectedItems} = toggle( state.selectedItems, state.items, action.id, action.receivedAt )
          return {
            ...state,
            items: items,
            lastUpdated: action.receivedAt,
            selectedItems: selectedItems,
            allSelectedItems: false
          }
        case TOGGLE_ALL_DOCUMENTS:
          var {_items, _selectedItems} = toggleAllDocuments( state.items, action )
          return {
            ...state,
            items: _items,
            selectedItems: _selectedItems,
            allSelectedItems: action.selectAll
          }
        case OPEN_DOCUMENT:
          return {
            ...state,
            items: updateOpen(action.id, state.items, action.receivedAt)
          }
        case CLOSE_DOCUMENT:
          return {
            ...state,
            items: updateClose(action.id, state.items, action.receivedAt)
          }
        case TOGGLE_SPINNER:
          return {
            ...state,
            items: state.items.map( (doc) => { 
                if ( doc.id === action.id ) {
                    return {
                        ...doc,
                        spinner: !doc.spinner,
                        lastUpdated: action.receivedAt
                    }
                } else return doc
            })
          }        
        case CLOSE_ALLDOCUMENTS:
          return {
            ...state,
            items: state.items.map( (doc) => { 
                if ( doc.opening ) {
                    return {
                        ...doc,
                        opening: false,
                        closing: true,
                        lastUpdated: action.receivedAt
                    }
                } else return doc
            }),
            lastUpdated: action.receivedAt
          }
        case FETCH_ERROR:
            return {
                ...state,
                isFetchError: true,
                fetchErrorStatus: action.status,
                isFetching: false
            }
        default:
          return state
    }
}

// Document detail reducer
const initialStateDocDetail = {
    items: []
}
const articles = ( state = initialStateDocDetail, action ) => {
    switch (action.type) {
        case RECEIVE_DOCUMENTDETAIL:
          var newItems = state.items.slice();
          newItems[action.id] = {
              articles: action.document.articles
          }
          return {
              ...state,
              items: newItems
          }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    documents,
    articles
})

export default rootReducer;