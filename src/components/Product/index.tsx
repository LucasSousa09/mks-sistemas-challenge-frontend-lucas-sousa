'use client'

import Image from "next/image";
import { 
    ProductContainer, 
    ProductData, 
    Header, 
    Title, 
    Price, 
    Description, 
    BuyButton 
} from "./styles";

import testImg from '../../assets/apple-watch.png'
import shoppingBagIcon from '../../assets/shoppingBagIcon.svg'

import type { Product } from '../ProductsContainer'
import { formatPrice } from "@/utils/format-price";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContextProvider";

export function Product(product: Product){
    const { updateCart } = useContext(CartContext)

    return (
        <ProductContainer>
            <ProductData>
                <Image src={product.photo} height={138} width={172} alt="" />
                <Header>
                    <Title data-testid="title">
                        {product.name}
                    </Title>
                    <Price data-testid="price">
                        {
                            formatPrice(product.price)
                        }
                    </Price>
                </Header>
                <Description data-testid="description">
                   {product.description}
                </Description>
            </ProductData>
            <BuyButton data-testid="buy-button" onClick={() => updateCart.addNewProductToCart(product)}>
                <Image src={shoppingBagIcon} alt="" />
                Comprar
            </BuyButton>
        </ProductContainer>
    )
}