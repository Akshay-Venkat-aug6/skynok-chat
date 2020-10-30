import { combineReducers } from 'redux';
// Customer Reducer
import userReducer from './reducer/userReducer';
import messageReducer from './reducer/messageReducer';

export default combineReducers({
  userRoot: userReducer,
  messageRoot: messageReducer
})