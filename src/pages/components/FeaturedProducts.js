import React from 'react'
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image'
import { theme } from '../../styles/theme'

export default function FeaturedProducts ({ featuredImage, brand, description }) {
    const FeaturedProduct = styled.button`
        display: flex;
        border:transparent 1px solid;
        border-radius: 0 0 30px 30px;
        flex-direction: column;
        justify-content:space-between;
        align-content: center;
        padding: 1rem 0;
        height:auto;
        transition: background-color .3s ease-in-out;
        background-color: ${theme.colors.beige};
        div{
            text-align: center;
            align-self: center;
        }
        *{
            height: auto;
        }

        :hover{
            background-color: ${theme.colors.peach};
        }
        img{
            padding:0 .5rem;
            height: auto;
            max-height: 18rem;
            /* object-fit: contain; */
        }
        hr{
            width: 3rem;
            margin:0 auto;
            padding: 0;;
        }
    /* :hover .ImgWrap{
    transform:rotateY(.5turn);
        
    } */

        
    `

    const ImgWrap=styled.div.attrs({className:"ImgWrap"})`
        /* backface-visibility: hidden; */
        position:relative;
        transition: transform 2s ease;
        transform-style: preserve-3d;
        :after{
            content:'1';
            backface-visibility: hidden;
            transition: transform 2s ease;
            transform:rotateY(.5turn);
            position: absolute;
            inset:0;
           border-radius:50% ;
            background-color:pink;
            /* visibility: hidden; */
        }
    `
  return(
    <FeaturedProduct>
        <h3>{description}</h3>
        <GatsbyImage image={featuredImage} objectFit="contain" alt="hullo"/>
        <GatsbyImage image={brand} alt="hullo"/>
        <hr />
        <p>{description}</p>
    </FeaturedProduct>
  )
}