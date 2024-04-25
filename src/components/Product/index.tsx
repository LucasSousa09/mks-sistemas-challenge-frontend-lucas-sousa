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

export function Product(){
    return (
        <ProductContainer>
            <ProductData>
                <Image src={testImg} height={138} alt="" />
                <Header>
                    <Title>
                        Apple Watch Series 4 GPS
                    </Title>
                    <Price>
                        R$399
                    </Price>
                </Header>
                <Description>
                   Redesigned from scratch and completely revised.
                </Description>
            </ProductData>
            <BuyButton>
                <Image src={shoppingBagIcon} alt="" />
                Comprar
            </BuyButton>
        </ProductContainer>
    )
}