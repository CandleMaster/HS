import React from 'react'
import styled from 'styled-components';
import  { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function index({data}) {

const heroCSS ={
    borderRadius:"0 0 75px 0",
    maxHeight:"880px",
    position: "absolute",
    top:"0px",
    left:'0px'
}

const Hero = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`
const ButtonWrapper = styled.div`
    position: absolute;
    height: 2rem;
    bottom: 18%;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 5%;
`
const HeroButtons = styled.button`
    background:rgba(225,225,225,0.3);
    height:2.2rem;
    width:10rem;
    z-index: 999;
    border-radius: 25px;
    border: rgba(225,225,225,0.8) 2px solid;
    vertical-align: center;
    text-decoration: none;
`
const Moto= styled.div`
position: absolute;
top:40%;
width: 15rem;
height: 5rem;
    font-size:3rem;
    border: black 1px solid;
`
const Beyond= styled.div`
position: absolute;
top:55%;
width: 15rem;
height: 5rem;
    border: black 1px solid;
    font-size:3rem;
`
const image = getImage(data.imageSharp)
    return (
      <div>
        <Hero>
          <GatsbyImage image={image} objectPosition="22.5% 90%" css={heroCSS} alt="hero" />
            <Moto>TAKING CARE OF YOU</Moto>
            <Beyond>Beyond sustainability</Beyond>
            <ButtonWrapper>
                <HeroButtons>Hullo</HeroButtons>
                <HeroButtons>Hullolo</HeroButtons>
            </ButtonWrapper>
        </Hero>
      </div>

    )
    
}

export const query = graphql`
  {
    imageSharp: file(relativePath: {eq: "home_hero_cropped.png"}) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED,quality:100)
      }
    }
  }
`
