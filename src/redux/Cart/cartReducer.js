import cartUtility from "./cartUtils";
const initialState = {
    hideCart: true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_VISIBLITY':
            return { ...state, hideCart: !state.hideCart };
        case 'ADD':
            return cartUtility(state.cartItems, action.payload)

        default:
            return state;
    }
}

export default cartReducer;