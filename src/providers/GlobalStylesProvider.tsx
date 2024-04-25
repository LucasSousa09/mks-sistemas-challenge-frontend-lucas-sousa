'use client'

import { ReactNode } from "react"
import { GlobalStyle } from "@/styles/global"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../styles/theme/default"

export function GlobalStylesProvider({children}: {children: ReactNode}){
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            {children}    
        </ThemeProvider>
    )
}