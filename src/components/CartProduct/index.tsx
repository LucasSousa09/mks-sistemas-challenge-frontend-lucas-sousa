'use client'

import Image from 'next/image'

import { CartContext, type CartProduct } from '../../contexts/CartContextProvider'

import { motion } from 'framer-motion'

import {
    CartProductContainer,
    CartProductName,
    CartProductQuantity,
    CartProductPrice,
    CloseButton,
} from './styles'

import { formatPrice } from '@/utils/format-price'
import { useContext } from 'react'

export function CartProduct({ id, name, photo, price, quantity }: CartProduct){
    const  { updateCart } = useContext(CartContext)

    return (
            <CartProductContainer as={motion.div} transition={{x:{duration: .6}}} animate={{x: [500, -50, 25, 0] }} initial={{x:500}} exit={{x: 500}}>
                <CloseButton data-testid="close-button" onClick={() => updateCart.removeProductFromCart(id)}>
                    x
                </CloseButton>
                <Image src={photo} height={61} width={50} alt=""/>
                <CartProductName data-testid="name" >{name}</CartProductName>
                <CartProductQuantity>
                    <span>Qtd:</span>

                    <button onClick={() => updateCart.decreaseOneFromCart(id)}>-</button>
                    <input type="number" min={1} readOnly value={quantity} />
                    <button onClick={() => updateCart.addOneToCart(id)}>+ </button>
                </CartProductQuantity>
                <CartProductPrice data-testid="price">{formatPrice(price, quantity)}</CartProductPrice>
            </CartProductContainer>
    )
}