import React from 'react'
import styled, {keyframes} from 'styled-components';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { theme } from '../styles/theme'
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
    padding: 0 10%;
    /* justify-content: center; */
    align-items: stretch !important;
    gap: 5%;
    `
const HeroButtons = styled(Link)`
    width:15rem;
    /* height: 100% !important; */
    padding:0.5rem .75rem;
    text-align: center;
    text-decoration: none;
    font-size:1.25rem;
    font-weight: 500;
    color: ${theme.colors.ams};
    letter-spacing: 2.5px;
    background-color:rgba(225,225,225,0.6);
    border-radius: 99px;
    border: rgba(225,225,225,1) 3px solid;
    transition: (background,transform) .4s ease;
    &:hover{
        color:white;
        border: none;
        background:rgb(255, 200, 124) linear-gradient(90deg,
            rgba(255, 200, 124, 1) 0%,
            rgba(252, 165, 131, 1) 100%
            ) !important; 
}
@media(max-width:${theme.breakPoint.sm}){
    padding: 0.5rem 1rem;
}
`
const HeroText= styled.h1`
    position: absolute;
    width:80%;
    max-width:25rem;
    margin:0 10%;
    height: auto;
    top:40%;
    transform: translateY(-5%);
    @media(max-width:${theme.breakPoint.sm}){
        top:35%;
    }
`
const youNaturePeople = keyframes`
    0%{content: 'you';}
    33%{content: 'nature';}
    66%{content: 'people'}
`
const fadeIn =keyframes`
    from{opacity:1}
    50%{opacity:0}
    to{opacity:1}
`
const Taking = styled.h1`
    word-wrap: wrap;
    /* width: 80%; */
    font-size:3rem;
    color:white;
    word-wrap: wrap;
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
          <GatsbyImage 
            image={image} 
            objectPosition="22.5% 90%" 
            css={heroCSS} 
            alt="hero" 
          />
            <HeroText>
                <Taking>Taking care of </Taking>
                {/* <Beyond>Beyond sustainability</Beyond> */}
                <StaticImage src="../images/hp_sustainability_icon.png" alt="Beyond Sustainability"/>
            </HeroText>
            <ButtonWrapper>
                <HeroButtons to='/impact-brands'>impact brands</HeroButtons>
                <HeroButtons to='/ideas-hub'>ideas hub</HeroButtons>
            </ButtonWrapper>
        </He>
    )
}
