import React from 'react'
import styled from 'styled-components';
import  { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Carouse,Navbar } from '../../components'
import  { InfoBlocks, BrandHeading, BrandDetails, Credentials, NowMe}  from './pieces'
import { theme } from '../../theme'
import { Responsive, ProductImg, Triple} from './product.styles'

export default function Product({ data }) {
    const dataContent = data.allFile.edges[0].node.childrenDataYaml[0]
    const { highlight,name,mission,awards,labels,productImages,filePath } = dataContent.main
    const { about, benefit,futureMe,futureUs,nowUs,nowMe } = dataContent.details
    console.log(benefit,about)
    const BrandMain = styled.div`
        padding:0;
        background-color: ${theme.colors.beige};
        border-radius:${theme.borderRadius.hero};
        width: 100%;
        height: auto;
    `

    const Container =styled.div`
        width: 75%;
        max-width: 50rem;
        margin:auto;
        height: auto;
    `
    const GridContainer = styled(Container)`
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr;
        gap:0 8%;
        grid-template-areas:
          'name responsive'
          'info prodImage'
          'file prodImage'
          'credentials timeline';
    `
    const tripleStyles ={
        width:'60%',
        maxWidth:'30rem',
        height: 'auto',
        margin: '2rem'
    }
    const Timeline = styled.div`
            grid-area: timeline;
        `

    return (
            <>
            <BrandMain>
                <Navbar />
                <GridContainer>
                    <BrandHeading gridName="name" brandName={name}/>
                    <Responsive />
                    <ProductImg>
                        <Carouse images = {productImages}/>
                    </ProductImg>
                    <InfoBlocks highlight={highlight} mission={mission} filePath={filePath} />
                    <Credentials awards={awards} labels={labels} />
                    <Timeline>timeline</Timeline>
                </GridContainer>
            </BrandMain>
            <Container>

            <Triple>
                <h2>Triple Impact</h2>
                <StaticImage style={tripleStyles} src='../../../images/triple_impact.png' placeholder="blurred" alt="triple impact"/>
            </Triple>
            <BrandDetails brandName={name} about={about} benefit={benefit}/>
            <NowMe/>
            </Container>
            </>
    )
}


export const brand_query = graphql`
query Brand {
    allFile(filter: {relativePath: {eq: "OrganiCup.yaml"}}) {
      edges {
        node {
          childrenDataYaml {
            slug
            details {
              about
              benefit
              futureMe
              futureUs
              nowMe
              nowUs
            }
            main {
              name
              highlight
              mission
              filePath
              awards {
                childrenImageSharp {
                  gatsbyImageData
                }
              }
              productImages {
                childrenImageSharp {
                  gatsbyImageData
                }
              }
              labels {
                childrenImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`