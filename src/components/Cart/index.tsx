import { CartProduct } from "../CartProduct"

import { 
    CartContainer,
    CartHeader,
    CartBody,
    CartFooter
} from "./styles"

export function Cart(){
    return (
        <CartContainer>
            <CartHeader>
                <strong>
                    Carrinho de compras
                </strong>

                <button>
                    X
                </button>
            </CartHeader>

            <CartBody>
                <CartProduct />
                <CartProduct />
                <CartProduct />
            </CartBody>
            
            <CartFooter>
                <div>
                    <strong>Total:</strong>
                    <strong>R$798</strong>
                </div>
                <button>
                    Finalizar Compra
                </button>
            </CartFooter>
        </CartContainer>
    )
}