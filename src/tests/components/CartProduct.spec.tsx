import { CartProduct } from "@/components/CartProduct"
import { formatPrice } from "@/utils/format-price"
import {  render, screen } from "@testing-library/react"


describe("CartProduct", () => {
    it("should the cart product properties correctly", () => {
        render(<CartProduct id={5} quantity={2} name="Apple Watch" photo="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp" price="3200.00"/>)      

        expect(screen.getByTestId("name").innerHTML).toBe("Apple Watch")
        expect(screen.getByTestId("price").innerHTML).toBe(formatPrice("3200.00", 2))
    })
})