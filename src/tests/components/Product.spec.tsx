import { Product } from "@/components/Product"
import { formatPrice } from "@/utils/format-price"
import { render, screen } from "@testing-library/react"

describe("Product", () => {
    it("should the product properties correctly", () => {
        render(<Product  id={5} description="O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso." name="Apple Watch" photo="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp" price="3200.00"/>)      
        
        expect(screen.getByTestId("title").innerHTML).toBe("Apple Watch")
        expect(screen.getByTestId("description").innerHTML).toBe("O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.")
        expect(screen.getByTestId("price").innerHTML).toBe(formatPrice("3200.00"))
        expect(screen.getByTestId("buy-button")).toBeInTheDocument
    })
})