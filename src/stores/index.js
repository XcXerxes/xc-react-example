import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as home from './home/reducer'
import middlewares from './middlewares'
const store = createStore(
  combineReducers({...home}),
  applyMiddleware(...middlewares)
)
export default store
