'use client'

import styled from 'styled-components'

export const ProductContainer = styled.div`
    border-radius: 8px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.14);

    overflow: hidden;

    width: 100%;
    max-width: 251px;
`

export const ProductData = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 18px 12px 12px 14px; //top, right, bottom, left

    img{
        object-fit: contain;
    }

    @media(max-width: 470px){
        align-items: start;
        padding: 20px 13px 14px 16px;

        img{
            height: 158px;
            margin: 0 auto;

            object-fit: contain;
        }
    }
`
export const Header = styled.header`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;

    padding: 14px 0 8px;

    font-size: 1rem;

    @media(max-width: 470px){
        padding: 16px 0 14px;
    }
`

export const Title = styled.strong`
    font-weight: 400;
    width: 124px;
    height: 38px;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Price = styled.span`
    font-weight: 700;
    font-size: .9375rem; //15px

    padding: 4px 6px;
    border-radius: 5px;

    color: ${(props) => props.theme['white']};
    background: ${(props) => props.theme['gray-800']};

    @media(max-width: 470px){
        padding: 5px 11px;
    } 
`

export const Description = styled.span`
    font-weight: 300;
    font-size: .625rem; //10px
    width: 192px;

    text-align: start;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    
    overflow: hidden;
    text-overflow: ellipsis;
`

export const BuyButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    width: 100%;

    padding: 9px 0;

    font-weight: 700;
    font-size: .875rem; //14px
    text-transform: uppercase;

    color: ${(props) => props.theme['white']};
    background-color: ${(props) => props.theme['blue']};

    border: 0;

    transition: filter .2s ease;

    &:hover{
        filter: brightness(.8);
    }

    &:active{
        opacity: .8;
    }
`