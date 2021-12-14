import React from 'react'
import styled from 'styled-components';
import { theme } from '../../styles/theme'
import SimpleSlider from '../components/Carouse'
import { Link } from 'gatsby'

// const BrandLogo=styled(GatsbyImage)`
//     width: 2rem;
//     height: 2rem;
//     object-fit:contain;
//     top:-2.5rem;
// `
const BrandName=styled.h4`
border-radius:0 50px 0px 0px;
    padding: .6rem 1.5rem 1.8rem 1rem;
    object-fit:contain;
    position:absolute;
    overflow: hidden;
    color:${theme.colors.smoke};
    top:-3.4rem;
    width: 100%;
    max-width:100%;
    word-wrap: wrap;
    font-size: 3.25rem;
    background: ${theme.colors.beige};

`
export default function ProductCard({ ProductImages, brandName, LinkTo, display,...prop}) {
const ProductCardWrap=styled(Link)`
    background-color: ${theme.colors.beige};
    border-radius:0 50px 50px 50px;
    aspect-ratio:1.1 ;
    /* padding:1rem; */
    display:${display};
    position: relative;
    @media(max-width:${theme.breakPoint.sm}){
    height: 76vw;
    }

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
