const cartUtility = (cartItems, itemToAdd) => {
    const item = cartItems.find(cartItem => cartItem.id === itemToAdd.id)
    console.log(item)
    if (!item) {
        return [...cartItems, { ...itemToAdd, count: 1 }]
    }
    else {
        return cartItems.map(cartItem => {
            if (item.id === cartItem.id)
                return {
                    ...cartItem,
                    count : cartItem.count + 1
                }
            else
                return cartItem
        })
    }
}

export default cartUtility;