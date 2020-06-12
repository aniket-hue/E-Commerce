export const setCartItem = item => ({
    type: 'ADD',
    payload: item
})

export const setCartVisiblity = () => ({ type: 'TOGGLE_VISIBLITY' });