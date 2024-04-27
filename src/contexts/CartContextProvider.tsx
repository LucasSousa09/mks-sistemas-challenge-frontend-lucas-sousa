'use client'

import { ReactNode, createContext, useEffect, useState } from "react";

type CartContextProps = {
    cart: CartProduct[],
    updateCart: {
        addNewProductToCart(product: CartProduct): void;
        removeProductFromCart(productId: number): void;
        addOneToCart(productId: number): void;
        decreaseOneFromCart(productId: number): void;
    },
    isCartOpen: boolean,
    toggleCart(): void
}

type CartContextProviderProps = {
    children: ReactNode
}

export type CartProduct = {
    id: number,
    name: string,
    photo: string,
    price: string,
    quantity?: number,
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({children}: CartContextProviderProps){
    const [cart, setCart] = useState<CartProduct[]>([])
    const [isCartOpen, setIsCartOpen] = useState(false)

    useEffect(() => {
        const localStorageCart = localStorage.getItem('@mks-systems:cart')

        if(localStorageCart !== null){
            if(localStorageCart !== '[]'){
                setCart(JSON.parse(localStorageCart))
            }
        }
    },[])


    const updateCart = {
        addNewProductToCart(product: CartProduct){
            setCart(state => {
                const productAlreadyOnCart = state.find(cartItem => product.id === cartItem.id)

                if(productAlreadyOnCart === undefined){
                    localStorage.setItem('@mks-systems:cart', JSON.stringify([...state, {...product, quantity: 1}]))
                    return [
                    ...state, {
                        ...product,
                        quantity: 1
                        }
                    ]
                }
                return state
            })
        },

        removeProductFromCart(productId: number){
            setCart(state => {
                const filteredArray = state.filter(cartItem => cartItem.id !== productId)
                localStorage.setItem('@mks-systems:cart', JSON.stringify(filteredArray))
                return filteredArray
            })
        },

        addOneToCart(productId: number){
            setCart(state => {
                return state.map(cartItem => {
                    if(cartItem.id === productId && cartItem.quantity){
                        localStorage.setItem('@mks-systems:cart', JSON.stringify({ ...cartItem,quantity: cartItem.quantity + 1}))
                        return {
                            ...cartItem,
                            quantity: cartItem.quantity + 1
                        }
                    }
                    return cartItem
                })
            })
        },

        decreaseOneFromCart(productId: number){
            setCart(state => {
                return state.map(cartItem => {
                    if(cartItem.id === productId && cartItem.quantity && cartItem.quantity > 1){
                        localStorage.setItem('@mks-systems:cart', JSON.stringify({ ...cartItem,quantity: cartItem.quantity + 1}))
                        return {
                            ...cartItem,
                            quantity: cartItem.quantity - 1
                        }
                    }
                    return cartItem
                })
            })
        },
    }

    function toggleCart(){
        setIsCartOpen(state => !state)
    }

    return (
        <CartContext.Provider value={{cart, updateCart, isCartOpen, toggleCart}}>
            {children}
        </CartContext.Provider>
    )
}