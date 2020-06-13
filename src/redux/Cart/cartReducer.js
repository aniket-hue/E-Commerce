import { cartAddUtility, cartRemoveUtility } from "./cartUtils";
const initialState = {
    hideCart: true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_VISIBLITY':
            return { ...state, hideCart: !state.hideCart };
        case 'ADD':
            return { ...state, cartItems: cartAddUtility(state.cartItems, action.payload) }
        case 'REMOVE_ITEM':
            return { ...state, cartItems: cartRemoveUtility(state.cartItems, action.payload) }
        default:
            return state;
    }
}

export default cartReducer;