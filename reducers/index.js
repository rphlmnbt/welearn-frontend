import { combineReducers } from 'redux'
import signUpReducer from './signUpReducer'
import userReducer from './userReducer'
import partnerReducer from './partnerReducer'

const rootReducer = combineReducers({
  signUp: signUpReducer,
  user : userReducer,
  partner : partnerReducer
})

export default rootReducer