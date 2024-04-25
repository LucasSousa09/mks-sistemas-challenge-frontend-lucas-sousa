import Image from "next/image"

import { HeaderContainer, CartButton } from "./styles"

import logoImg from "../../assets/logoImg.png"
import cartIcon from '../../assets/CartIcon.svg'

export function Header(){
    return (
        <HeaderContainer>
            <Image src={logoImg} alt="MKS sistemas" />

            <CartButton>
                 <Image src={cartIcon} alt="Ilustração de um carrinho de compras" />
                 0
            </CartButton>
        </HeaderContainer>
    )
}