import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as home from './home/reducer'
import * as product from './products/reduce'
import middlewares from './middlewares'
const store = createStore(
  combineReducers({...home, ...product}),
  applyMiddleware(...middlewares)
)
export default store
