'use client'

import styled from 'styled-components'


export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 9px 0;

    background-color: ${(porps) => porps.theme['gray-100']};

    font-size: .825rem;

    @media(max-width: 470px){
        font-size: .75rem ;
    }
`