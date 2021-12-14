import React from 'react'
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image'
import { theme } from '../../styles/theme'
import {Link} from 'gatsby'

const FeaturedProduct = styled(Link)`
    display: flex;
    border:transparent 1px solid;
    flex-direction: column;
    align-content: center;
    padding: 2.5rem 2.5rem 1rem 2.5rem;
    height: auto;
    min-width: 20rem;
    transition: background-color .3s ease-in-out;
    background-color: ${theme.colors.beige};
    text-decoration:none;
    *{height: auto;}
    div{align-self: center;}
    :hover{
        background-color:${theme.colors.beigeLight} !important;
        border-radius:0;
    }
    hr{
        width: 4rem;
        margin:0 auto;
        padding: 0;
        background-color: black;
    }
    img{
        aspect-ratio:1;
        z-index: 2;
    }
    `
const FeaturedDescription =styled.p`
    /* display: grid;
    place-items: center; */
    height: 20%;
    min-height: 7rem;
    padding: 2rem 1.5rem .8rem 1.5rem;
    color: ${theme.colors.ams};
    font-size: 1.15rem;
    font-weight: 400;
    text-align: center;
    `
// const LogoImage= styled(GatsbyImage)`
//     padding: .5rem;
//     min-width: 3rem;
//     width: 3rem;
//     `
const ProductImage= styled(GatsbyImage)`
    padding: 0;
    margin:2rem 0 1rem 0 ;
    max-height: 15rem;
    `
const BrandName = styled.h3`
    display: grid;
    place-items: center;
    height: 20%;
    min-height: 6rem;
    max-height: 6rem;
    /* font-size:2rem; */
    font-size:4rem;
    font-weight: 600;
    /* color: ${theme.colors.ams}; */
    color: ${theme.colors.smoke};
    letter-spacing:3px;
`
export default function FeaturedProducts ({ featuredImage, brandName, description, linkTo }) {
  return(
      <FeaturedProduct to={linkTo}>
        {/* <LogoImage image={brand} objectFit="contain" alt="hullo"/> */}
        <BrandName>{brandName}</BrandName>
        <ProductImage image={featuredImage} objectFit="contain" alt="featured images"/>
        <hr />
        <FeaturedDescription>{description}</FeaturedDescription>
    </FeaturedProduct>
  )
}
// const ImgWrap=styled.div.attrs({className:"ImgWrap"})`
//     /* backface-visibility: hidden; */
//     position:relative;
//     transition: transform 2s ease;
//     transform-style: preserve-3d;
//     :after{
//         content:'1';
//         backface-visibility: hidden;
//         transition: transform 2s ease;
//         transform:rotateY(.5turn);
//         position: absolute;
//         inset:0;
//        border-radius:50% ;
//         background-color:pink;
//     }
// `