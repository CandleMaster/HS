import React from 'react'
import styled from 'styled-components';
import { theme } from '../../styles/theme'
import { SimpleSlider } from '../components'
import { Link } from 'gatsby'

// const BrandLogo=styled(GatsbyImage)`
//     width: 2rem;
//     height: 2rem;
//     object-fit:contain;
//     top:-2.5rem;
// `
const BrandName=styled.h4`
    /* width: 2rem; */
    /* height: 2rem; */
border-radius:0 50px 0px 0px;
    padding: .6rem 1.5rem 1.8rem 1rem;
    object-fit:contain;
    position:absolute;
    overflow: hidden;
    color:${theme.colors.smoke};
    top:-3.4rem;
    /* height: 8rem; */
    max-width:100%;
    word-wrap: wrap;
    font-size: 3.25rem;
    /* font-weight: 300; */
    background: ${theme.colors.beige};
    /* background: ${theme.colors.smoke}; */
    /* width: 100%;
    text-align:center; */
`
export default function ProductCard({ ProductImages, brandName, LinkTo, display,...prop}) {
const ProductCardWrap=styled(Link)`
    background-color: ${theme.colors.beige};
    border-radius:0 50px 50px 50px;
    aspect-ratio:1;
    display:${display};
    position: relative;
`
    return (
        <>
            <ProductCardWrap to={LinkTo}> 
            <BrandName>{brandName}</BrandName>
                <SimpleSlider imageList={ProductImages} duration="99999999" button="none" />
            </ProductCardWrap>
        </>    
    )
}
