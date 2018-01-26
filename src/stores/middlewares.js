import thunk from 'redux-thunk'
const middlewares = [thunk]
if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger').createLogger
  middlewares.push(createLogger())
}

export default middlewares
