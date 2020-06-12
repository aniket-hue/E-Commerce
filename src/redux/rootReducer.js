import { combineReducers } from 'redux';
import userReducer from './User/userReducer';
import authReducer from './Auth/authReducer';
import cartReducer from './Cart/cartReducer';
export default combineReducers({
    user: userReducer,
    auth: authReducer,
    cart: cartReducer
})