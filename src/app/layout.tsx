import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";

import type { Metadata } from "next";

import { GlobalStylesProvider } from "@/providers/GlobalStylesProvider";
import { ReactQueryClientProvider } from '../providers/ReactQueryClientProvider'

import { CartContextProvider } from '../contexts/CartContextProvider'

const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap" 
});

export const metadata: Metadata = {
  title: "MKS Sistemas | Home",
  description: "Front-end Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <CartContextProvider>
        <ReactQueryClientProvider>
          <html lang="pt-BR">
              <StyledComponentsRegistry>
                <GlobalStylesProvider>
                  <body className={montserrat.className}>
                    {children}
                  </body>
                </GlobalStylesProvider>
              </StyledComponentsRegistry>
          </html>
        </ReactQueryClientProvider>
      </CartContextProvider>
  );
}
