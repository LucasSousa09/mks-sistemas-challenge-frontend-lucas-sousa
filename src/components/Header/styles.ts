'use client'

import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 28px 88px 28px 65px;
    background-color: ${(props) => props.theme['blue']};
`

export const CartButton = styled.button`
    display: flex;
    align-items: center;
    gap: 16px;

    padding: 12px 27px 12px 15px;
    
    background-color: ${(props) => props.theme['white']};

    border: none;
    border-radius: 8px;
    
    font-size: 1.125rem;
    font-weight: 700;
`