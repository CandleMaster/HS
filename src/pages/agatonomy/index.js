import React from "react"
import styled from "styled-components"
import { theme } from "../theme"
import Definitions from "./Definitions"
import { Navbar, CommonHead } from "../components"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { Container } from '../Global.styles'
import Expand from "./expand"

function index({ data }) {
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
    maxHeight:'42rem'
  }
 
  const childHopscotch = getImage(data.imageSharp.childImageSharp)

  return (
    <div>
      <Navbar />
      <CommonHead 
          imageSrc={childHopscotch}
          titleUp="Our vision:" 
          titleDown="Agatonomy" />
      <DefinitionsContainter>
        <Container wrap={"wrap"} overflow={"hidden"}>
          <Definitions />
          <ImgWrap>
            <StaticImage
              style={utahStyles}
              src="../../images/man_dog.jpeg"
              alt="comfort"
            />
          </ImgWrap>
        </Container>
      </DefinitionsContainter>
      <Container>
        <Expand></Expand>
      </Container>
    </div>
  )
}

export default index

export const agatonomyQuery=graphql`
{
  imageSharp: file(relativePath: {eq: "child_hopscotch.jpeg"}) {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED,quality:100)
    }
  }
}

`