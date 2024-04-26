import { Cart } from "@/components/Cart"
import { CartContextProvider } from "@/contexts/CartContextProvider"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Cart", () => {
    it("should render the text correctly", () => {
        render(
            <CartContextProvider>
                <Cart />
            </CartContextProvider>
        )

        expect(screen.getByText("Carrinho de compras"))
        
        const finishButton = screen.getByText("Finalizar Compra")
        expect(finishButton).toBeInTheDocument()
        expect(finishButton).toBeDisabled()
    })

})