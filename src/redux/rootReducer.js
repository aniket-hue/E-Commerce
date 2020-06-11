import { combineReducers } from 'redux';
import userReducer from './User/userReducer';
import authReducer from './Auth/authReducer';
export default combineReducers({
    user: userReducer,
    auth: authReducer
})