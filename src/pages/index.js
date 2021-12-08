import React from 'react'
// import styled from 'styled-components';
import Hero from './Hero'
// import IdeaDisplay from './IdeaDisplay'
import ProductDisplay from './ProductDisplay'
import  { graphql } from 'gatsby'
import {  getImage} from 'gatsby-plugin-image'
import {  Layout, Quotes } from './components'
import './../styles/Global.styles.css'
import useWindowSize from './components/useWindowSize'
import { Testamony } from './components/Quotes'



export default function Index({data}) {
  const [width, height]= useWindowSize()
  console.log(width)
    const coverImage = getImage(data.imageSharp.childImageSharp)
    const featuredBrands = data.allBrandsYaml.nodes

    return (
        <Layout>
            <Hero image={coverImage}/>
            <Testamony
              data-sal="slide-up"
              data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
              data-sal-delay="200" // adds delay to the animation (from 5 to 1000 ms)
              data-sal-easing="ease"
      >
                <h2>It's not just about doing less harm & being sustainable. </h2>
                <h2>It's about doing <b>more good</b>.</h2>
            </Testamony>
            <ProductDisplay 
                featuredBrands={featuredBrands} 
                CarouselWidth={width}/>
            {/* <IdeaDisplay blogImage1={product2} blogImage2={product1}/> */}
            <Quotes 
              quoteHeading="Our Philosophy" 
              quote="We believe that the team work of impact brands and consumers are key to solving our global issue. We call this teamwork agatonomy."
              />
              
        </Layout>
    )
}

export const query = graphql`
  {
    imageSharp: file(relativePath: {eq: "home_hero_cropped.png"}) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED,quality:100)
      }
    }
    allBrandsYaml(filter: {featured: {eq: true}}) {
    nodes {
      name
      featured
      featuredDescription
      main {
        productImages {
          childrenImageSharp {
            gatsbyImageData
          }
        }
        brandNameLogo {
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
    
}
  `

