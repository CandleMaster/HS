import React from 'react'
import styled from 'styled-components';
import { Container } from "../../styles/Global.styles"
import { GatsbyImage } from 'gatsby-plugin-image'
import { theme } from '../../styles/theme'
import LineAnimate from './LineAnimate'
import { Vision } from '../../styles/Global.styles'

const Heading = styled.div`
    background-color: ${theme.colors.beige};
    grid-area:top;
    display: grid;
    height: 110vh;
    place-items: start;
    position:relative;
    z-index: 0;
    
`
const HeadingContainer=styled(Container)`
    margin: 8rem auto;
    max-width: 55rem;
    width:75% !important;
    z-index: 10;
    @media(max-width:${theme.breakPoint.md}){
        margin: 20vw auto;
        /* width:50% !important; */
        min-width: 0;
        /* padding-top:5rem; */
    }
`
const Hopskotch = styled(GatsbyImage)`
    top:0;
    right:15%;
    position: absolute;
    max-width: 35rem;
    width:70vw;
    height: auto;
    aspect-ratio:2.4/3;
    border-radius: 0 0 35px 35px;
    object-fit: contain;
    @media(max-width:${theme.breakPoint.md}){
        aspect-ratio:2.4/4;
        top:0;
        right:0%;
        left:0%;
        width:87vw;
        margin: auto;
        /* mix-height:30rem !important; */
    }
    @media(max-width:${theme.breakPoint.sm}){
        aspect-ratio:2.4/4;
        min-height: 65vh;
        width:90vw;
        /* height: 85vh; */

    }
    @media(max-width:${theme.breakPoint.xs}){
        aspect-ratio:2.4/5;
        min-height: 85vh;
        
    }
    `
const TitleBox = styled.div`
    width: auto;
    margin-top: 12vh;
    z-index: 3;
    transition: padding-top .25s linear;
    @media(max-width:${theme.breakPoint.md}){
        margin:0;
        /* padding-left: 1rem; */
    }
    @media(max-width:${theme.breakPoint.sm}){

    }
        /* margin:-4vw auto 0 auto;} */
`

export default function CommonHead({ imageSrc, titleUp, titleDown }) {
    return (
        <Heading>
            <HeadingContainer justify={"space-between"} >
            <TitleBox>
                <Vision>{titleUp}</Vision>
                <Vision>{titleDown}</Vision>
                <LineAnimate />
            </TitleBox>
            <Hopskotch 
                image={imageSrc}
                alt="heading"
            />
            </HeadingContainer>
        </Heading>
    )
}
