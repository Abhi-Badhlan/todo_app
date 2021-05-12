import { combineReducers } from 'redux'
import todoReducer from './todoreducer'


const rootreducer=combineReducers({
    todoReducer
})
export default rootreducer;