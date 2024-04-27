'use client'

import Image from "next/image"

import { HeaderContainer, CartButton } from "./styles"

import logoImg from "../../assets/logoImg.webp"
import cartIcon from '../../assets/cartIcon.svg'
import { useContext } from "react"
import { CartContext } from "@/contexts/CartContextProvider"

export function Header(){
    const { toggleCart, cart } = useContext(CartContext)

    return (
        <HeaderContainer>
            <Image data-testid="logo-img" src={logoImg} alt="MKS sistemas" />

            <CartButton data-testid="cart-button" onClick={toggleCart}>
                 <Image src={cartIcon} alt="Ilustração de um carrinho de compras" />
                 {cart.length || 0}
            </CartButton>
        </HeaderContainer>
    )
}