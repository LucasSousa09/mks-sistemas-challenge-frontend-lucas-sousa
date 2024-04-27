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

export const SkeletonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 18px;

    width: 100%;
    max-width: 207px;

    height: 303px;

    background-color: ${(props) => props.theme['gray-900']};
    border-radius: 8px;

    overflow: hidden;

    @media(max-width: 470px){
        max-width: 251px;
    }
`

export const SkeletonImage = styled.div`
    width: 172px;
    height: 138px;

    background: ${(props) => props.theme['gray-600']};

    border-radius: 4px;
`
export const SkeletonHeader = styled.div`
    margin-top: 14px;

    width: 172px;
    height: 38px;

    background: ${(props) => props.theme['gray-600']};

    border-radius: 4px;
`

export const SkeletonDescription = styled.div`
    margin-top: 8px;

    width: 172px;
    height: 39px;

    background: ${(props) => props.theme['gray-600']};

    border-radius: 4px;
`

export const SkeletonButton = styled.div`
    margin-top: auto;

    width: 100%;
    height: 36px;

    background: ${(props) => props.theme['gray-600']};
`