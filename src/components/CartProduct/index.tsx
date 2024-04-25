import Image from 'next/image'
import {
    CartProductContainer,
    CartProductName,
    CartProductQuantity,
    CartProductPrice,
    CloseButton,
} from './styles'

import testImg from '../../assets/apple-watch.png'

export function CartProduct(){
    return (
        <CartProductContainer>
            <CloseButton>
                x
            </CloseButton>
            <Image src={testImg} height={61} alt=""/>
            <CartProductName>Apple Watch Series 4 GPS</CartProductName>
            <CartProductQuantity>
                <span>Qtd:</span>

                <button>-</button>
                <input type="number" />
                <button>+ </button>
            </CartProductQuantity>
            <CartProductPrice>R$399</CartProductPrice>
        </CartProductContainer>
    )
}