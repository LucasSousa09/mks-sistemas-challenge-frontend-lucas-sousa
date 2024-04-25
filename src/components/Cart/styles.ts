'use client'

import styled from 'styled-components'

export const CartContainer = styled.div`
    position: fixed;

    top: 0;
    bottom: 0;
    right: 0;

    background: ${(props) => props.theme['blue']};
    box-shadow: -5px 0 6px 0 rgba(0,0,0,0.13);

    max-width: 485px;
    width: 100%;

    @media(max-width: 470px){
        max-width: 330px;

    }
` 

export const CartHeader = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    padding: 36px 22px 55px 47px;
    
    strong {
        display: inline-block;
        font-size: 1.6875rem; //27px
        font-weight: 700;
        
        max-width: 180px;

        color: ${(props) => props.theme['white']};
    }

    button {
        font-size: 1.75rem; //28px

        color: ${(props) => props.theme['white']};
        background-color: ${(props) => props.theme['black']};
        
        height: 38px;
        width: 38px;
        border: none;
        border-radius: 50%;
    }

    @media(max-width: 470px){
        padding: 25px 15px 27px 32px;

        > button{
            height: 45px;
            width: 45px;

            color: ${(props) => props.theme['blue']};
        }
    }
`

export const CartBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;

    padding: 4px 60px 0 47px;

    max-height: calc(100vh - 285px);

    overflow-y: auto;
    
    @media(max-width: 470px){
        padding: 0 46px 0 34px
    }
`

export const CartFooter = styled.footer`
    position: absolute;
    bottom: 0;
    right: 0;
    left:0;
    
    display: flex;  
    flex-direction: column;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        padding: 0 63px 42px 47px;

        strong {
            font-weight: 700;
            font-size: 1.75rem;
            line-height: 15px;

            color: ${(props) => props.theme['white']};
        }
    }

    button {
        text-align: center;

        font-weight: 700;
        font-size: 1.75rem;

        line-height: 15px;

        padding: 41px 0;

        color: ${(props) => props.theme['white']};
        background-color: ${(props) => props.theme['black']};

        border: none;
    }

    @media(max-width: 470px){
        div{
            padding: 0 43px 44px 32px;
        }

        button {
            font-size: 1.25rem; //20px
            padding: 26px 0;
        }
    }
`