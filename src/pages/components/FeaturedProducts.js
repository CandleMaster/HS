import React from 'react'
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image'
import { theme } from '../../styles/theme'
import {Link} from 'gatsby'

export default function FeaturedProducts ({ featuredImage, brandName, description, linkTo }) {
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
            background-color:rgba(255,255,255, 60%) !important;
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
        color: black;
        height: 20%;
        padding: 1.5rem;
        text-align: center;
        font-size: 1rem;
    `
    const LogoImage= styled(GatsbyImage)`
        padding: .5rem;
        min-width: 3rem;
        width: 3rem;
    `
    const ProductImage= styled(GatsbyImage)`
        padding: 0;
        margin:3rem 0 1rem 0 ;
        max-height: 15rem;
        /* transform: translateY(2rem)!important; */
    `
  return(
      <FeaturedProduct to={linkTo}>
        {/* <LogoImage image={brand} objectFit="contain" alt="hullo"/> */}
        {/* <div>{brandName}</div> */}
        <FeaturedDescription>{brandName}</FeaturedDescription>
        <ProductImage image={featuredImage} objectFit="contain" alt="hullo"/>
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