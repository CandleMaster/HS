import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { Hero, HeroButtons, Moto, Beyond, ButtonWrapper} from './impact.styles.js'
import { theme } from './theme'
import  { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Arrow } from './Global.styles'
import { Navbar, FeaturedProducts } from './components'
import './Global.styles.css'
import "@fontsource/inter"

export default function index({data}) {
const heroCSS ={
    borderRadius:"0 0 75px 0",
    maxHeight:"880px",
    position: "absolute",
    top:"0px",
    left:'0px',
    backgroundAttachment:'fixed'
}
//two ways of showing the bakcground image
const HeroTest = styled.div`
    background-image: url('/static/images/home_hero_cropped.png');
    background-size: cover;
    background-position: 25% 80%;
    border-radius:0 0 75px 0;
    max-height:880px;
    position: absolute;
    top:0px;
    left:0px;
    background-attachment:fixed
`
const Testamony = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    border:red 1px solid;
    max-height: 50%;
    div{
      border:red 1px solid;
      width:50%;
      padding:2.5rem 0;
    }
`
const ProductDisplay = styled.div`
    display: flex;
    height: 20rem;
    border:blue 1px solid;
    flex-wrap:wrap;
    text-align: center;
    flex-direction: row-reverse;
    overflow: hidden;
    padding-left: 3rem;
    background-color:${theme.colors.beige} ;
    > *{
        flex: 1 1 10rem;
    }
`
const IdeaDisplay = styled(ProductDisplay)`
    flex-direction: row;
    border:pink 1px solid;    
    padding:0 3rem 0 0;
    > *{
        flex: 1 1 12rem;
    }
    > div > div {
        float:right;
        border-radius: 5px 0 0 35px;
        > div{
            transform:rotate(135deg)  
        }
    }
`
const DisplayArrowContainer = styled.div`
    background-color: white;
`
const DisplayArrowBox = styled.div`
    background-color: ${theme.colors.beige};
    width: 4rem;
    border-radius: 0 5px 35px 0;
    display:grid;
    place-items:center
`

const Test = styled.div`
    background-image: url('/static/images/agatonomy_sample.jpg');
    background-attachment: fixed;
    background-size: cover
`



const heroImage = getImage(data.imageSharp.childImageSharp)
const product1 = getImage(data.imageSharp2.childImageSharp)
const product2 = getImage(data.imageSharp3.childImageSharp)
    return (
      <ThemeProvider theme={theme}>
      <Navbar />
        <Hero>
          <HeroTest/>
          <GatsbyImage image={heroImage} objectPosition="22.5% 90%" css={heroCSS} alt="hero" />
            <Moto>TAKING CARE OF YOU</Moto>
            <Beyond>Beyond sustainability</Beyond>
            <ButtonWrapper>
                <HeroButtons>Hullo</HeroButtons>
                <HeroButtons>Hullolo</HeroButtons>
            </ButtonWrapper>
        </Hero>
        <Testamony><div>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div></Testamony>
          <ProductDisplay>
              <DisplayArrowContainer>
                  <DisplayArrowBox>
                      <Arrow/>
                  </DisplayArrowBox>
              </DisplayArrowContainer>
              <FeaturedProducts featuredImage={product1} description="goobiligob"></FeaturedProducts>
              <FeaturedProducts featuredImage={product1} description="goobiligob"></FeaturedProducts>
              <FeaturedProducts featuredImage={product2} description="goobiligob"></FeaturedProducts>
          </ProductDisplay>
          <IdeaDisplay>
              <DisplayArrowContainer>
                  <DisplayArrowBox>
                      <Arrow/>
                  </DisplayArrowBox>
              </DisplayArrowContainer>
              <FeaturedProducts featuredImage={product1} description="goobiligob"></FeaturedProducts>
              <FeaturedProducts featuredImage={product2} description="goobiligob"></FeaturedProducts>
          </IdeaDisplay>
          <Test></Test>
      </ThemeProvider>
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

