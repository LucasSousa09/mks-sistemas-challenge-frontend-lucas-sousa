import { Footer } from "@/components/Footer"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Footer", () => {
    it("should render text correctly", () => {
        render(<Footer />)

        expect(screen.getByText("MKS sistemas © Todos os direitos reservados")).toBeInTheDocument()

    })
})