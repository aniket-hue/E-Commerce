export const cartAddUtility = (cartItems, itemToAdd) => {
    const item = cartItems.find(cartItem => cartItem.id === itemToAdd.id)
    if (!item) {
        return [...cartItems, { ...itemToAdd, count: 1 }]
    }
    else {
        return cartItems.map(cartItem => {
            if (item.id === cartItem.id)
                return {
                    ...cartItem,
                    price: itemToAdd.price,
                    count: cartItem.count + 1
                }
            else
                return cartItem
        })
    }
}


export const cartRemoveUtility = (cartItems, itemToRemoveID) => {
    return cartItems.map(cartItem => {
        if (cartItem.id === itemToRemoveID) {
            if (cartItem.count !== 1)
                return {
                    ...cartItem,
                    count: cartItem.count - 1
                }
            else
                return null
        }
        else
            return cartItem
    }).filter(Boolean)
}

