   
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import combRed from './combineReducer.js'
import reducer from './reducer.js'

const store = createStore(combRed, applyMiddleware(thunk))
console.log('store bay', store)
export default store
