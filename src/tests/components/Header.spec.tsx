import React from 'react'

import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"

import { CartContextProvider } from '../../contexts/CartContextProvider'

import { Header } from '../../components/Header'

describe("Header", () => {
    it("should the header render correctly", () => {
        render(
            <CartContextProvider>
                <Header/> 
            </CartContextProvider>
        )
        expect(screen.getByTestId("logo-img")).toBeInTheDocument()
        expect(screen.getByTestId("cart-button")).toBeInTheDocument()
    })

    it("should render the button starting with 0", () => {
        render(
            <CartContextProvider>
                <Header/> 
            </CartContextProvider>
        )
    
        expect(screen.getByTestId("cart-button").innerHTML.split('>')[1]).toBe('0')       
    })
})