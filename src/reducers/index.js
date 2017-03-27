import { combineReducers } from 'redux'
import { 
    REQUEST_DOCUMENTS, 
    RECEIVE_DOCUMENTS, 
    INVALIDATE_DOCUMENTS, 
    NEXT_PAGE, 
    PREV_PAGE, 
    CHANGE_ORDER,
    TOOGLE_DOCUMENT } from '../actions'

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

const toogle = ( selectedItems, items, toogleDocumentId  ) => {
    // Row is selected and will be deselected
    if ( selectedItems[toogleDocumentId] )
        delete(selectedItems[toogleDocumentId])
    else 
        selectedItems[toogleDocumentId] = true 
    
    return {
        items: items.map( (doc) => {
            if (doc.id === toogleDocumentId) {
                return {
                    ...doc,
                    checked: selectedItems[toogleDocumentId] ? true : false
                }
            } else return doc
        }),
        selectedItems: selectedItems
    }
}

const setSelectedRows = ( state, items ) => {
    let selectedItems = state.selectedItems
    let newItems = items.map( (doc) => {
        if ( selectedItems[ doc.id ] ) {
            return {
                ...doc,
                checked: true
            }
        } 
        else return { 
            ...doc,
            checked: false 
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
                items: setSelectedRows( state, action.items ),
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
            
        default:
            return state
    }
}

const rootReducer = combineReducers({
    documents
})

export default rootReducer;