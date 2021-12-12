import React from 'react'
import styled from 'styled-components';
import  { graphql } from 'gatsby'
import { SimpleSlider,Navbar, Footer, Container,Triple,useWindowSize,Seo } from '../pages/components'
import  { InfoBlocks, BrandHeading, BrandDetails,  NowMe}  from '../pages/impact-brands/product/pieces'
import { theme } from '../styles/theme'
// import { TimelineEvent, TimelineDots , YearLi} from '../pages/impact-brands/Timeline'
export default function Product({ data }) {
    const dataContent = data.allBrandsYaml.nodes[0]
    const { 
      main:{
        highlight,
        mission,
        productImages,
        filePath:{
          publicURL
        }
      } ,
      details:{
        about, 
        benefit,
        futureMe,
        futureUs,
        nowUs,
        nowMe
      },
      Keyword,
      nameLinked,
      name,
    }= dataContent

    // console.log(about)
    
    const BrandMain = styled.div`
        padding-bottom:2rem;
        background-color: ${theme.colors.beige};
        border-radius:${theme.borderRadius.hero};
        width: 100%;
        height: auto;
      `

    const GridContainer = styled.div`
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: .9fr 1fr;
        gap:0 8%;
        width: 75%;
        max-width: 55rem;
        margin:auto;
        padding-bottom: 2rem ;
        height: auto;
        grid-template-areas:
        'name responsive'
        'info prodImage'
        'file prodImage'
        'credentials timeline';
        @media(max-width:${theme.breakPoint.md}){
        width: 75%;
            gap:0;
            grid-template-columns: 1fr;
            grid-template-areas:
              'name'
              'prodImage'
              'timeline'
              'info'
              'file'
              'credentials';
          }

          @media(max-width:${theme.breakPoint.sm}){}
          width: 87%;

    `
const Responsive=styled.div`
    grid-area:responsive;
    background-color:white;
`
const ProductImg = styled.div`
    grid-area: prodImage;  
    display: grid;
    place-items: center;
    padding: 0 2rem 0rem 2rem ;
    /* min-width: 20rem !important; */
    background-color: white;
    border-radius: 0 0 25px 25px;
    min-height: 25rem;

`
// const Timeline = styled.div`
//     grid-area: timeline;
//     position: relative;
//     height:7rem;
//     align-items: flex-start;
//     padding: 1rem 0rem;
//     transform: translateX(-1rem);
//     `

const Affiliate = styled.div`
  color:${theme.colors.dusk};
  grid-area:timeline;
  font-size: .9rem;
  padding: 2rem .5rem;
`
const [width, height] = useWindowSize();

    return (
            <>
              <Seo
                title={name}
                description={highlight+Keyword}
            />
            <BrandMain>
                <Navbar />
                <span style={{opacity:"0"}}>Window size: {width} x {height}</span>;
                <GridContainer>
                    <BrandHeading gridName="name" brandName={nameLinked}/>
                    <Responsive />
                    <ProductImg>
                        <SimpleSlider imageList={productImages} duration="999999000" display="flex"/>
                    </ProductImg>
                    <InfoBlocks info="info" highlight={highlight} mission={mission} filePath={publicURL} />
                    {/* <Credentials awards={awards} labels={labels} /> */}
                    {/* <Timeline>
                        <TimelineEvent background="white !important">
                            {events.map(event=>(<li key={event}>{event}</li>))}
                        </TimelineEvent>
                        <TimelineDots background="black">
                            {years.map(year=>(<YearLi key={year} content={year}/>))}
                        </TimelineDots>
                    </Timeline> */}
                    <Affiliate>This page may contain affiliate links. We may receive a small commission if you click on a link and make a purchase. We only promote brands that pass our vetting criteria and that we believe will add value to your sustainable lifestyle. </Affiliate>
                </GridContainer>
            </BrandMain>

            <Container>
                <Triple 
                  tripleHeading="block"
                  tripleMargin="8rem auto"
                />
                <BrandDetails 
                    brandName={name} 
                    about={about} 
                    benefit={benefit}
                />
                <NowMe 
                    nowMePoints={nowMe}
                    futureMePoints={futureMe}
                    nowUsPoints={nowUs}
                    futureUsPoints={futureUs}
                />
            </Container>
            <Footer />
            </>
    )
}


export const brand_query = graphql`
query BrandTemplate ($name:String) {
    allBrandsYaml(filter: {name: {eq: $name}}) {
        nodes {
            name
            nameLinked
            id
            Keyword
            details {
              about
              benefit
              futureMe
              futureUs
              nowMe
              nowUs
            }
            main {
              highlight
              mission
              filePath{
                publicURL
              }
              awards {
                childrenImageSharp {
                  gatsbyImageData
                }
              }
              productImages {
                  childrenImageSharp {
                    gatsbyImageData(transformOptions: {fit: CONTAIN})
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
`