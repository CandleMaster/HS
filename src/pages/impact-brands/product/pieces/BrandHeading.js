import React from 'react'
import styled from 'styled-components';
import {theme }from '../../../../styles/theme'

export default  function BrandHeading({ gridName,brandName }) {
    const BrandName = styled.div`
        grid-area: ${gridName};
        padding-top: 7rem;
        margin-bottom: 0;
        @media(max-width:${theme.breakPoint.md}){
            padding: 7rem 1rem 0 2rem;
            background-color: white;
        }
`
    const Brand = styled.div`
        height: auto;
        font-size: 1.75rem;
        line-height:3rem;
        letter-spacing: 2px;
        a{
        font-weight: 600 !important;

        }
    `
    const Impact = styled.div`
    height: auto;
    font-weight: 100;
        font-size: 1rem;
        line-height: 3rem;
    `
    const Divider = styled.div`
        height: 1px;
        background-color:black;
    `
    return (
            <BrandName>
                <Brand dangerouslySetInnerHTML={{__html:brandName}} target="_blank"/>
                <Impact>impact brand</Impact>
                <Divider />
            </BrandName>
    )
}