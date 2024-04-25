'use client'

import styled from 'styled-components'


export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    justify-items: center;
    align-content: center;
    column-gap: 22px;
    row-gap: 31px;

    width: 100%;
    max-width: 938px;

    padding: 0 22px;

    @media(max-width: 930px){
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media(max-width: 710px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media(max-width: 470px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`