import { combineReducers } from 'redux'

import requestReducer from './requestReducer'
import userReducer from './userReducer'

const reducers = combineReducers({
  requestReducer,
  userReducer
})

export default reducers
