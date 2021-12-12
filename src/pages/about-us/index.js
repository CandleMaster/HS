import React from 'react'
import {  Quotes, Layout, CommonHead,HeroButtons, Seo } from '../components'
import { graphql } from "gatsby"
import { getImage } from 'gatsby-plugin-image'
import styled from 'styled-components';
import {theme} from '../../styles/theme'

const Overlap=styled.div`
    display: grid;
    height: auto;
    grid-template-columns: 1;
    grid-template-rows: 1;
    grid-template-areas:
    'top'
    'bottom' ;
`
const ContentContainer=styled.div`
    grid-area:bottom;
    background-color:${theme.colors.beigeLight} !important;
    width: 90%;
    padding:4rem 0 4rem 2%;
    height: auto;
    border-radius: 0 8rem 8rem 0;
    z-index: 5 !important;
    margin-top:-11rem;
    margin-bottom:-3rem ;
    @media(max-width:${theme.breakPoint.md}){

    margin-top:-5rem;
    }
`
const AnotherContainer=styled.div`
width: 70%;
height: auto;
max-width: 55rem;
    margin:0 auto;
    @media(min-width:1400px){
    transform: translateX(4vw);
        width: 68%;
    }
    @media(max-width:${theme.breakPoint.sm}){
        width: 88%;
    }
`
const AboutContent= styled.div`
    p{
        padding: .25rem 0;
        height: auto;
    }
    h2{
        margin: 2rem 0 1.25rem 0;
        font-size: 1.75rem;
    }
`
export default function About({ data }) {
    const childHopscotch = getImage(data.imageSharp.childImageSharp)
    const { text } = data.markdownYaml
    return (
        <>
        <Layout>
            <Seo/>
            <Overlap>
                <CommonHead 
                    imageSrc={childHopscotch}
                    titleUp="About "
                    titleDown="Hopskotch"
                />
                <ContentContainer >
                    <AnotherContainer>
                    <AboutContent dangerouslySetInnerHTML={{__html:text}}/>
                    <HeroButtons
                        wrapPadding="0"
                        wrapMargin="2rem 0 !important"
                        backgroundColor={theme.colors.dusk}
                        fontColor="white"
                    />
                    </AnotherContainer>
                </ContentContainer>
            </Overlap>
            <Quotes
                quote="We believe that ethical brands and consumers can turn the economy into a powerful force for good."
            />
        </Layout>
        </>
    )
}

export const aboutUsQuery=graphql`
    {
        imageSharp: file(relativePath: {eq: "diagrams/HS_about.png"}) {
            childImageSharp {
            gatsbyImageData(placeholder: BLURRED,quality:100)
            }
        }
        markdownYaml(title: {eq: "about us"}) {
            text
        }
    }

`