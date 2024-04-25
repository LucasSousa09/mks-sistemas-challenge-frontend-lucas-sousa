'use client'

import styled from 'styled-components'

export const CartProductContainer = styled.div`
    position: relative;

    display: flex;
    align-items: center;

    padding: 19px 31px 19px 23px;
    background-color: ${(props) => props.theme['white']};

    border-radius: 8px;
    box-shadow: -2px 2px 10px 0 rgba(0,0,0,.05);

    img {
        margin-right: 22px;
        grid-area: img;
    }

    @media(max-width: 470px){
        display: grid;
        grid-template-areas: 
        "img img"
        "name name" 
        "qtd price";
        justify-items: center;

        padding: 19px 23px 21px 16px;

        img{
            margin: 0 0 12px;
            height: 100px;
            width: 100px;

            object-fit: contain;
        }
    }
`

export const CloseButton = styled.button`
    position: absolute;
    top:-3px;
    right:-5px;

    height: 18px;
    width: 18px;

    color: ${(props) => props.theme['white']};
    background-color: ${(props) => props.theme['black']};

    border: none;
    border-radius: 50%;

    font-size: .875rem; //14px

    @media(max-width: 470px){
        top: 10px;
        right: 14px;

        border-radius: 0;

        height: 31px;
        width: 21px;

        color: ${(props) => props.theme['black']};
        background-color: ${(props) => props.theme['white']};
        
        font-size: 42px;
        line-height: 17px;
    }
`

export const CartProductName = styled.span`
    grid-area: name;

    display: inline-block;
    max-width: 113px;
    
    margin-right: 9px;

    font-size: .8125rem; // 13px

    color: ${(props) => props.theme['gray-900']};

    @media(max-width: 470px){
        font-size: 1rem;
        max-width: 220px;

        margin: 0 0 11px;
    }
`

export const CartProductQuantity = styled.div`
    /* Remove Input Arrows */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
             appearance: textfield;
    }

    grid-area: qtd;

    position: relative;
    display: flex;
    align-items: center;

    border: 1px solid ${(props) => props.theme['gray-300']};
    border-radius: 4px;

    margin-right: 40px;

    span {
        position: absolute;
        top: -10px;
        left: 0;

        font-size: .3125rem; //5px
    }

    button {
        width: 17px;
        height: 19px;

        border: none;

        background-color: transparent;
    }

    input {
        text-align: center;

        width: 16px;
        height: 11.5px;

        border: 1px solid ${(props) => props.theme['gray-300']};

        border-top: none;
        border-bottom: none;

        font-size: .5rem; //8px
    }

    @media(max-width: 470px){
        > span{
            display: none;
        }

        input{
            width: 32px;
            height: 26px;

            font-size: 1.25rem; //20px
        }

        > button {
            height: 35px;
            width: 32px;

            font-size: 1.375rem; //22px
        }

        margin-right: 30px;

    }

`

export const CartProductPrice = styled.strong`
    grid-area: price;

    font-size: .875rem; //14px
    line-height: 17px;

    @media(max-width: 470px){
        font-weight: 700;
        font-size: .9375rem; //15px

        padding: 8px 17px;
        border-radius: 5px;

        color: ${(props) => props.theme['white']};
        background: ${(props) => props.theme['gray-800']};
    }
`