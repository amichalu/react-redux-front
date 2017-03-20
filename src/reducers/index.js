import { combineReducers } from 'redux'
import { REQUEST_DOCUMENTS, RECEIVE_DOCUMENTS, INVALIDATE_DOCUMENTS, NEXT_PAGE, PREV_PAGE, CHANGE_ORDER} from '../actions'

const initialState = {
    // isFetching: false,
    // items: [],
    // lastUpdated: '',
    // didInvalidate: false,
    pageNmb: 0,
    pageSize: 20,
    order: 'number',
    dirOrder: 'asc'   
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
                items: action.items,
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
            return {
                ...state,
                order: action.order,
                dirOrder: action.dirOrder,
                didInvalidate: true
            }
            
        default:
            return state
    }
}

const rootReducer = combineReducers({
    documents
})

export default rootReducer;