'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

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

    const updateCart = {
        addNewProductToCart(product: CartProduct){
            setCart(state => {
                const productAlreadyOnCart = state.find(cartItem => product.id === cartItem.id)

               if(productAlreadyOnCart === undefined){
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
            setCart(state => state.filter(cartItem => cartItem.id !== productId))
        },

        addOneToCart(productId: number){
            setCart(state => {
                return state.map(cartItem => {
                    if(cartItem.id === productId && cartItem.quantity){
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