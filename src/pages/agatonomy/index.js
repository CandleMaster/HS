import React from "react"
import styled from "styled-components"
import { theme } from "../../styles/theme"
import Definitions from "./definitions"
import Seo from "../components/seo"
import CommonHead from "../components/CommonHead"
import Layout from "../components/Layout"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { Container } from '../../styles/Global.styles'
import Expand from "./expand"

function index({ data }) {
  const { imageSharp, 
    content,
    define:{categories} } = data
  // console.log(categories)
  const DefinitionsContainter = styled.div`
    height: auto;
    background-color: ${theme.colors.smoke};
    flex-wrap: nowrap;
  `
  const ImgWrap = styled.div`
    flex: 1 1 12rem;
    display: grid;
    place-items: center;
    padding: 1rem;
    align-self: center;
  `
  const utahStyles={
    borderRadius:'200px',
    aspectRatio:'1/2.7',
    maxHeight:'42rem',
    minHeight:'35rem'
  }
 
  const childHopscotch = getImage(imageSharp.childImageSharp)
  const AgatonomyBox=styled(Container)`
    display:block;
    margin-top:3rem;
    margin-bottom:8rem;
  `
  return (

      <Layout >
          <Seo/>
          <CommonHead 
              imageSrc={childHopscotch}
              titleUp="Our vision: " 
              titleDown="Agatonomy" />
          <DefinitionsContainter>
            <Container wrap={"wrap"} overflow={"hidden"}>
              <Definitions define1={categories.Virtue}
               define2={categories.Economy}
               define3={categories.Consumer}
               define4={categories.Company}
              categoryName1="Virtue"
               categoryName2="Economy"
               categoryName3="Consumer"
               categoryName4="Company"/>
              <ImgWrap>
                <StaticImage
                  style={utahStyles}
                  src="../../images/man_dog.jpeg"
                  alt="comfort"
                />
              </ImgWrap>
            </Container>
          </DefinitionsContainter>
          <AgatonomyBox>
            {content.sections.map(section=><Expand 
            articleText={section.Answer} 
            subheading={section.Question}
            />)}
          </AgatonomyBox>
      </Layout>

  )
}

export default index

export const agatonomyQuery=graphql`
{
  imageSharp: file(relativePath: {eq: "diagrams/HS_agatonomg.png"}) {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED,quality:100)
    }
  }

 content: markdownYaml(title: {eq: "agatonomy"}) {
    sections {
      Answer
      Question
    }
}
  define:markdownYaml(title: {eq: "definitions"}){
    categories {
      Company {
        Definition
        Term
      }
      Consumer {
        Definition
        Term
      }
      Economy {
        Definition
        Term
      }
      Virtue {
        Definition
        Term
      }
    }}
  
}
`