import React from 'react'
import styled, {keyframes} from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image'
import { theme } from './theme'
import { Link } from "gatsby"


export default function Hero({image}) {

const heroCSS ={
    borderRadius:"0 0 75px 0",
    maxHeight:"880px",
    position: "absolute",
    top:"0px",
    left:'0px',
    backgroundAttachment:'fixed'
}

const He = styled.div`
    width: 100%;
    height: 100%;
    max-height: 880px;
    position: relative;
`
const ButtonWrapper = styled.div`
    position: absolute;
    height: auto;
    bottom:10%;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 5%;
`
const HeroButtons = styled(Link)`
    width:14rem;
    padding:.3rem;
    text-align: center;
    text-decoration: none;
    font-size:1.25rem;
    color: ${theme.colors.midnight};
    background:rgba(225,225,225,0.5);
    border-radius: 99px;
    border: rgba(225,225,225,1) 3px solid;
`
const HeroText= styled.h1`
    position: absolute;
    width:25rem;
    margin-left:10%;
    height: auto;
    top:40%;
    transform: translateY(-5%);
    h1{
        font-size:3.5rem;
        color:white;
    }
`
const youNaturePeople = keyframes`
    0%{
        content: 'you';
    }
    33%{
        content: 'nature';
    }
    66%{
        content: 'people'
    }
`
const fadeIn =keyframes`
    from{opacity:1}
    50%{opacity:0}
    to{opacity:1}
`
const Taking = styled.h1`
    ::after{
        content: 'you';
        animation: 9s ${youNaturePeople} linear infinite, 3s ${fadeIn} cubic-bezier(0.9, 0.13, 0.35, 0.9) infinite;
        background:  rgb(255, 200, 124) linear-gradient(90deg,
        rgba(255, 200, 124, 1) 0%,
        rgba(252, 165, 131, 1) 100%
        ); 
        border-radius:99px ;
        padding:0rem 1rem;
    }    
`

const Beyond= styled.h1`
    font-family: 'HeadingWest';
    width:27rem;

`
    return (
        <He>
          <GatsbyImage image={image} objectPosition="22.5% 90%" css={heroCSS} alt="hero" />
            <HeroText>
                <Taking>Taking care of </Taking>
                <Beyond>Beyond sustainability</Beyond>
            </HeroText>
            <ButtonWrapper>
                <HeroButtons to='/impact-brands'>impact brands</HeroButtons>
                <HeroButtons to='/ideas-hub'>ideas hub</HeroButtons>
            </ButtonWrapper>
        </He>
    )
}
