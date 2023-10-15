import React, { createContext, useState } from 'react'
import { FOOD } from '../Food'
import { useEffect } from 'react'


export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < FOOD.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const updateLocalStorage = (cartData) => {
        localStorage.setItem('cart', JSON.stringify(cartData));
    };

    // Add to cart      
    // const addToCart = (itemsId) => {
    //     setCartItems((prev) => ({ ...prev, [itemsId]: prev[itemsId] + 1 }))
    // }

    const addToCart = (itemsId) => {
        setCartItems((prevCart) => {
            const updatedCart = {
                ...prevCart,
                [itemsId]: prevCart[itemsId] + 1
            }
            updateLocalStorage(updatedCart)
            return updatedCart
        })
    }
    const removeCart = (itemsId) => {
        setCartItems((prevCart) => {
            const updatedCart = {
                ...prevCart,
                [itemsId]: prevCart[itemsId] - 1
            }
            updateLocalStorage(updatedCart)
            return updatedCart
        })
    }

    useEffect(() => {
        const storedCart = localStorage.getItem('cart')
        if (storedCart) {
            setCartItems(JSON.parse(storedCart))
        }
    }, [])

    // const removeCart = (itemsId) => {
    //     setCartItems((prev) => ({ ...prev, [itemsId]: prev[itemsId] - 1 }))
    // }



    // Update cart
    const updateCartItem = (newAmount, itemsId) => {
        setCartItems((prev) => ({ ...prev, [itemsId]: newAmount }))
    }

    const getTotalItemCount = () => {
        return Object.values(cartItems).reduce((total, count) => total + count, 0);
    };


    // total amount
    const getTotalAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = FOOD.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }



    const contextValue = {
        cartItems,
        addToCart,
        removeCart,
        updateCartItem,
        getTotalAmount,
        getTotalItemCount
    }

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}


