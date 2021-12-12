import React from 'react'
import Hero from './Hero'
import ProductDisplay from './ProductDisplay'
import  { graphql } from 'gatsby'
import {  getImage} from 'gatsby-plugin-image'
import {  Layout, Quotes,useWindowSize, Seo } from './components'
import { theme } from '../styles/theme'
import './../styles/Global.styles.css'


export default function Index({data}) {
  const [width, height]= useWindowSize()
  console.log(width)
    const coverImage = getImage(data.imageSharp.childImageSharp)
    const featuredBrands = data.allBrandsYaml.nodes

    return (
        <Layout>
            <Seo/>
            <Hero image={coverImage}/>
            <Quotes
              quote="It is not only about doing less harm. It's about doing "
              underline="more good."
              quoteFont="1.8rem"
            />
            <ProductDisplay 
                featuredBrands={featuredBrands} 
                CarouselWidth={width}/>
            {/* <IdeaDisplay blogImage1={product2} blogImage2={product1}/> */}
            <Quotes 
              quoteHeading="Our Philosophy" 
              quote="We believe the teamwork of impact brands and conscious consumers is key to solving our global issues. We call this type of collaborative and virtuous economy "
              headingColor={theme.colors.ams}
              underline="'Agatonomy'. "
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
        highlight
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

