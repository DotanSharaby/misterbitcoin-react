import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import contactReducer from './reducers/contactReducer'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
    contactReducer,
    userReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)
export default store