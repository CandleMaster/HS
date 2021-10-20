import React from 'react'
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image'
import { theme } from '../theme'

export default function FeaturedProducts ({ featuredImage, brand, description }) {
    const FeaturedProduct = styled.div`
        background-color: ${theme.colors.beige};
        display: flex;
        border:black .5px solid;
        border-radius: 0 0 10px 10px;
        flex-direction: column;
        justify-content:space-between;
        align-content: center;
        div{
            text-align: center;
            height: 12rem;
            align-self: center;
            object-fit: contain;
            max-width: 15rem;
            margin:1rem;
        }
        p{
            border:black solid;
            border-width: 3px 0 0 0;
            height: 1.5rem;
        }
    `
  return(
    <FeaturedProduct>
        <p>{description}</p>
        <GatsbyImage image={featuredImage} alt="hullo"/>
        <GatsbyImage image={brand} alt="hullo"/>
        <p>{description}</p>
    </FeaturedProduct>
  )
}