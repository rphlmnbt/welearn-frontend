import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import signUpReducer from '../reducers/signUpReducer';

const store = createStore(signUpReducer, applyMiddleware(thunk))

export default store;