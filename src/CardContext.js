// context (cart, addToCart, removeFromCart)
// Provider => gives your React app access to all things in your context

import { createContext, useState } from "react";
import { productsArray } from "./productsStore";

export const CartContext = createContext(
    // context is an object both of properties and functions that can be used within context
    {
        // context begins with empty array for items since cart begins empty
        items: [],
        // context begins with dummy functions that can receive function from below
        getProductQuantity : () => {},
        addOneToCart: () => {},
        removeOneFromCart: () => {},
        deleteFromCart: () => {},
        getTotalCost: () => {},

    }
);

// {children} are anyhting that is wrapped in Provider
export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([])

    // data we want for cart is, for exmaple { id: 1, quantity: 2 }

    function getProductQuantity(id) {
        // question mark below means that if no id is found then it will return nothing, but if it does find something, then it will return the entire object with that id ///////////////////////////
        cartProducts.find(product => product.id === id)?.quantity
    }

    const contextValue = {
        items: [],
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return <CartProvider.Provider value={contextValue}>
        {children}
    </CartProvider.Provider>
}