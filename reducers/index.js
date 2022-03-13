import { combineReducers } from 'redux'
import signUpReducer from './signUpReducer'
import userReducer from './userReducer'
import partnerReducer from './partnerReducer'
import notificationReducer from './notificationReducer'

const rootReducer = combineReducers({
  signUp: signUpReducer,
  user : userReducer,
  partner : partnerReducer,
  notification: notificationReducer
})

export default rootReducer