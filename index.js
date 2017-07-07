import submitReducer from './submitReducer'
import reducer from './reducer.js'
import {combineReducers} from 'redux'



const reducers = {
 submitReducer,
 reducer
}


const reducerRed = combineReducers(reducers)

export default reducerRed