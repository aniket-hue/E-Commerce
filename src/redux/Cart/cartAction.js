export const setCartItem = item => ({
    type: 'ADD',
    payload: item
})

export const setCartVisiblity = () => (
    {
        type: 'TOGGLE_VISIBLITY'
    }
);

export const removeItem = (item) => ({
    type: 'REMOVE_ITEM',
    payload: item
});