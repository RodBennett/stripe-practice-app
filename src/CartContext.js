// context (cart, addToCart, removeFromCart)
// Provider => gives your React app access to all things in your context

import { createContext, useState } from "react";
import { getProductData, productsArray } from "./productsStore";

export const CartContext = createContext(
    // context is an object both of properties and functions that can be used within context
    {
        // context begins with empty array for items since cart begins empty
        items: [],
        // context begins with dummy functions that can receive functions from below
        getProductQuantity: () => { },
        addOneToCart: () => { },
        removeOneFromCart: () => { },
        deleteFromCart: () => { },
        getTotalCost: () => { },

    }
);

// {children} are anyhting that is wrapped in Provider
export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([])

    // data we want for cart is, for example { id: 1, quantity: 2 }

    function getProductQuantity(id) {
        // question mark below means that if no id is found then it will return nothing, but if it does find something, then it will return the entire object with that id ///////////////////////////
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) {
            setCartProducts( // nothing in cart...whatever is already in cartProducts will go to TOP OF THE ARRAY //
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )

        } else {// product is in cart 
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 1) {
            deleteFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity - 1 }
                            : product
                )
            )
        }
    }

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id !== id;
                })
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity)
        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;