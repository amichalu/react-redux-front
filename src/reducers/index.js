import { combineReducers } from 'redux'
import { 
    REQUEST_DOCUMENTS, 
    RECEIVE_DOCUMENTS, 
    INVALIDATE_DOCUMENTS, 
    NEXT_PAGE, 
    PREV_PAGE, 
    CHANGE_ORDER,
    TOOGLE_DOCUMENT,
    OPEN_DOCUMENT,
    CLOSE_DOCUMENT,
    CLOSE_ALLDOCUMENTS } from '../actions'

const initialState = {
    isFetching: false,
    items: [],
    selectedItems: [],
    lastUpdated: '',
    didInvalidate: true,
    pageNmb: 0,
    pageSize: 20,
    order: 'number',
    dirOrder: 'asc'
}

const updateOpen = (id, items) => {
  return items.map( (doc) => {
    if (doc.id === id) {
      return {
        ...doc,
        opening: true,
        closing: false
      }
    } else return doc
  })
}

const updateClose = (id, items) => {
  return items.map( (doc) => {
    if (doc.id === id) {
      return {
        ...doc,
        opening: false,
        closing: true
      }
    } else return doc 
  })
}

const toogle = ( selectedItems, items, toogleDocumentId  ) => {
    // Row is selected and will be deselected
    if ( selectedItems[toogleDocumentId] )
        delete(selectedItems[toogleDocumentId])
    // Row is not selected and will be selected
    else 
        selectedItems[toogleDocumentId] = true

    return {
        items: items.map( (doc) => {
            if (doc.id === parseInt(toogleDocumentId, 10)) {
                return {
                    ...doc,
                    checked: selectedItems[toogleDocumentId] ? true : false
                }
            } else return doc
        }),
        selectedItems: selectedItems
    }
}

// Set selected documents after page change, set opened
const updateDocumentsState = ( state, items ) => {
    let selectedItems = state.selectedItems
    let newItems = items.map( (doc) => {
        if ( selectedItems[ doc.id ] ) {
            return {
                ...doc,
                checked: true,
                opening: false,
                closing: false
            }
        } 
        else return { 
            ...doc,
            checked: false,
            opening: false,
            closing: false
        }    
    })
    return newItems
}

const documents = ( state = initialState, action ) => {
    console.log( 'reducer: documents() ', state, ' action: ', action )
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
              items: updateDocumentsState( state, action.items ),
              lastUpdated: action.receivedAt
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
              didInvalidate: true
          }
        case PREV_PAGE:
          return {
              ...state,
              pageNmb: state.pageNmb - 1,
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
        case TOOGLE_DOCUMENT:
          const {items, selectedItems} = toogle( state.selectedItems, state.items, action.id )
          return {
            ...state,
            items: items,
            lastUpdated: action.receivedAt,
            selectedItems: selectedItems
          }
        case OPEN_DOCUMENT:
          return {
            ...state,
            items: updateOpen(action.id, state.items)
            //lastUpdated: action.receivedAt
          }
        case CLOSE_DOCUMENT:
          return {
            ...state,
            items: updateClose(action.id, state.items)
            //lastUpdated: action.receivedAt
          }
        //TODO It mustn't change state for all documents !!!!!
        case CLOSE_ALLDOCUMENTS:
          return {
            ...state,
            items: state.items.map( (doc) => ({ 
                ...doc,
                opening: false,
                closing: true
              }) ),
              lastUpdated: action.receivedAt
          }
          
        default:
          return state
    }
}

// const initialStateOpened = {
//     opened: false,
//     id: null
// }

// const opened = ( state = initialStateOpened, action ) => {
//   console.log( 'reducer: documents() ', state, ' action: ', action )
//   switch( action.type ) {
//     case TOOGLE_OPENED:
//       if (state.opened && state.id !== action.id) return state
//       return {
//         opened: state.opened ? false : true,
//         id: opened ? action.id : null
//       }        
//     default:
//       return state
//   }
// }

const rootReducer = combineReducers({
    documents
})

export default rootReducer;