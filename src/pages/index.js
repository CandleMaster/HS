import React from 'react'
import styled from 'styled-components';
import Hero from './Hero'
import IdeaDisplay from './IdeaDisplay'
import ProductDisplay from './ProductDisplay'
import { theme } from '../styles/theme'
import  { graphql } from 'gatsby'
import {  getImage } from 'gatsby-plugin-image'
import { LineAnimate, Layout } from './components'
import './../styles/Global.styles.css'

export default function index({data}) {
    const Testamony = styled.div`
        width: 60%;
        height: auto;
        margin: 13rem auto;
        padding: 0;
        >h2{
          text-align: center;
          margin: 0;
          padding: 0;
          color:${theme.colors.dusk}
        }
        div{
          width: 100%;
          padding-left:2.75rem;
        }
    `

    const coverImage = getImage(data.imageSharp.childImageSharp)
    const product1 = getImage(data.imageSharp2.childImageSharp)
    const product2 = getImage(data.imageSharp3.childImageSharp)
    
    return (
      <>
        <Layout>

        <Hero image={coverImage}/>
        <Testamony>
            <h2>It's not just about doing less harm & being sustainable. </h2>
            <h2>It's about doing more good.</h2>
            {/* <div><LineAnimate /></div> */}
            
        </Testamony>
        <ProductDisplay product1={product1} product2={product2} product3={product2} />
        <IdeaDisplay blogImage1={product2} blogImage2={product1}/>
        </Layout>
      </>
    )
}

export const query = graphql`
  {
    imageSharp: file(relativePath: {eq: "home_hero_cropped.png"}) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED,quality:100)
      }
    }
    
    imageSharp2: file(relativePath: {eq: "gatsby-astronaut.png"}) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED,quality:100)
      }
    }
    
    imageSharp3: file(relativePath: {eq: "gatsby-icon.png"}) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED,quality:100)
      }
    }
    
}
  `

