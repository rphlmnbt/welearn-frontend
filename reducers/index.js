import { combineReducers } from 'redux'
import signUpReducer from './signUpReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  signUp: signUpReducer,
  user : userReducer
})

export default rootReducer