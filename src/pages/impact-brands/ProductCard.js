import React from 'react'
import styled from 'styled-components';
import { theme } from '../../styles/theme'
import { SimpleSlider } from '../components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const BrandLogo=styled(GatsbyImage)`
    width: 2rem;
    height: 2rem;
    object-fit:contain;
    top:-2.5rem;
`
export default function ProductCard({ ProductImages, BrandNameLogo, LinkTo, display,...prop}) {
const ProductCardWrap=styled(Link)`
    background-color: ${theme.colors.beige};
    border-radius:0 50px 50px 50px;
    aspect-ratio:1;
    display:${display}
`
    return (
        <>
            <ProductCardWrap to={LinkTo}> 
            <BrandLogo image={BrandNameLogo} />
                <SimpleSlider imageList={ProductImages} duration="99999999" button="none" />
            </ProductCardWrap>
        </>    
    )
}
