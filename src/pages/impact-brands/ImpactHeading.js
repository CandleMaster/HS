import React from 'react'
import styled from 'styled-components';
import LineAnimate from '../components/LineAnimate'
import { theme } from '../../styles/theme'

export default function ImpactHeading() {
    const Heading= styled.div`
    width: 75%;
    margin: 0rem auto;
    padding:12rem 0;
    display: flex;
    column-gap: .5rem;
    height: auto;
    flex-wrap: wrap;
    justify-content:center;
    h1, div h1{
        width: auto;
        color: white;
        padding: 0;
        margin: 0;
        font-size: 3rem;
        line-height:3.5rem;
    }
    @media(max-width:${theme.breakPoint.sm}){
        text-align: center;
    }
    `   
const ImpactUnderlined = styled.div`
    width: auto;    
    position: relative;
    @media(max-width:502px){
        width:11rem;}
`
const Subheading= styled.h2`
    font-family: 'HeadingWest';
    color: ${theme.colors.dusk};
    width: 10rem;
    font-size: 2.5rem;
    text-align: center;
    position: absolute;
    padding:1.5rem 0;
    right: -4rem;
    line-height:1.8rem;
    justify-self: end;
    transform: rotate(10deg);
`
    return (
        <>
    <Heading>
        <h1>Explore </h1>
        <ImpactUnderlined>
            <h1> impact brands</h1>
            <LineAnimate />
            <Subheading>What are they?</Subheading>
        </ImpactUnderlined>
    </Heading>
    </>
    )
}
