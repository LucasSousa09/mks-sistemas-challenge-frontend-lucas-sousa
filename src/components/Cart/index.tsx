'use client'

import { useContext } from "react"

import { CartContext } from "@/contexts/CartContextProvider"

import { CartProduct } from "../CartProduct"

import { 
    CartContainer,
    CartHeader,
    CartBody,
    CartFooter
} from "./styles"

import { formatPrice } from "@/utils/format-price"

import { AnimatePresence } from 'framer-motion'

export function Cart(){
    const { cart, isCartOpen, toggleCart } = useContext(CartContext)

    const totalPrice = cart.reduce((acc, cur) => acc + Number(cur.price) * (cur.quantity || 1), 0).toString()

    return (
        <CartContainer data-testid="cart-container" $isCartOpen={isCartOpen}>
            <CartHeader>
                <strong>
                    Carrinho de compras
                </strong>

                <button onClick={toggleCart}>
                    X
                </button>
            </CartHeader>

            <CartBody>
                <AnimatePresence>
                    {
                        cart.length === 0 ? (
                            <strong>
                                O carrinho está vazio
                            </strong>
                        ) : cart.map(cartItem => {
                                return (
                                    <CartProduct
                                        key={cartItem.id}
                                        id={cartItem.id}
                                        name={cartItem.name}
                                        photo={cartItem.photo}
                                        price={cartItem.price}
                                        quantity={cartItem.quantity}
                                    />
                                )
                            })
                        
                    }
                </AnimatePresence>
            </CartBody>
            
            <CartFooter>
                <div>
                    <strong>Total:</strong>
                    <strong>
                        {
                            cart.length === 0 ? "R$0" : formatPrice(totalPrice)
                        }
                    </strong>
                </div>
                <button disabled={cart.length === 0}>
                    Finalizar Compra
                </button>
            </CartFooter>
        </CartContainer>
    )
}