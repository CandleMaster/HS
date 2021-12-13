import React from 'react'
import styled, {keyframes} from 'styled-components';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { theme } from '../styles/theme'
import { HeroButtons } from './components';




const HeroImage =styled(GatsbyImage)`
    border-radius:0 0 85px 0;
    max-height:880px;
    position: absolute;
    top:0px;
    bottom: 0px;
    left:0px;
    background-attachment:fixed;

`
const He = styled.div`
    width: 100%;
    height: 100vh;
    max-height: 880px;
    position: relative !important;
`


const HeroText= styled.h1`
    position: absolute !important;
    width:80%;
    max-width:30rem;
    margin:0 10%;
    height: auto;
    top:30%;
    transform: translateY(-5%);
    /* @media(max-width:${theme.breakPoint.sm}){
        top:35%;
    } */
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
    font-size:4.5rem;
    color:white;
    word-wrap: wrap;
    position: relative;
    ::after{
    /* position: absolute; change this to you */
    content: 'you';/* change this to you */
    /* bottom: 0;
    left:20%; */
    animation: 9s ${youNaturePeople} linear infinite, 3s ${fadeIn} cubic-bezier(0.9, 0.13, 0.35, 0.9) infinite;
    background:  rgb(255, 200, 124) linear-gradient(90deg,
    rgba(255, 200, 124, 1) 0%,
    rgba(252, 165, 131, 1) 100%
    ); 
    /* filter: blur(17px); delete this */
    border-radius:99px ;
    padding:0rem 1rem;
    }    
    /* delete this */
    /* ::after{ 
    content: 'you';
    animation: 9s ${youNaturePeople} linear infinite, 3s ${fadeIn} cubic-bezier(0.9, 0.13, 0.35, 0.9) infinite;
    z-index: 3;
    border-radius:99px ;
    padding:0rem 1rem;
    }     */
`


export default function Hero({image}) {

    return (
        <He>
          <HeroImage 
            image={image} 
            objectPosition="22.5% 90%" 
            alt="hero" 
          />
            <HeroText>
                <Taking>Taking care of </Taking>
                <StaticImage src="../images/hp_sustainability_icon.png" alt="Beyond Sustainability"/>
            </HeroText>
            <HeroButtons 
                buttonPosition="absolute"
                wrapPadding="0 10%"
            />
        </He>
    )
}
