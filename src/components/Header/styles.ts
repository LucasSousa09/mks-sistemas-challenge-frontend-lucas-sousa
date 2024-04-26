'use client'

import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 28px 88px 28px 65px;
    background-color: ${(props) => props.theme['blue']};

    @media(max-width: 470px){
        padding: 2px 23px 2px 20px;

        > img {
            height: 43px;
            width: 158px;
            object-fit: contain;
        }
    }
`

export const CartButton = styled.button`
    display: flex;
    align-items: center;
    gap: 16px;

    padding: 12px 27px 12px 15px;
    
    background-color: ${(props) => props.theme['white']};

    border: none;
    border-radius: 8px;
    
    font-size: 1.125rem; //18px
    font-weight: 700;

    transition: box-shadow .3s ease;

    &:hover{
        box-shadow: 0 0 4px 2px rgba(255,255,255, 0.5);
    }

    &:active{
        transform: scale(0.95);
    }

    @media(max-width: 470px){
        gap: 10px;
        padding: 6px 14px 6px 9px;

        font-size: .75rem; //12px

        > img {
            width: 11px;
            height: 10px;
        }
    }
`