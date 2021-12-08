// import React, {useLayoutEffect, useState} from 'react'
// import styled from 'styled-components';
// import  { graphql } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'
// import { SimpleSlider,Navbar, Footer, Container } from '../../components'
// import  { InfoBlocks, BrandHeading, BrandDetails, Credentials, NowMe}  from './pieces'
// import { theme } from '../../../styles/theme'
// import { TimelineEvent, TimelineDots , YearLi} from '../Timeline'
// export default function Product({ data }) {
//     const dataContent = data.allBrandsYaml.nodes[0]
//     const { 
//       main:{
//         highlight,
//         mission,
//         awards,
//         labels,
//         productImages,
//         filePath:{
//           publicURL
//         }
//       } ,
//       details:{
//         about, 
//         benefit,
//         futureMe,
//         futureUs,
//         nowUs,
//         nowMe 
//       },
//       name,
//       id,
//       timeline:{
//         years,
//         events
//       },
//     }= dataContent

//     // console.log(dataContent)
    
//     const BrandMain = styled.div`
//         padding-bottom:2rem;
//         background-color: ${theme.colors.beige};
//         border-radius:${theme.borderRadius.hero};
//         width: 100%;
//         height: auto;
//       `
//     const Triple = styled.div`
//         display: grid;
//         place-items: center;
//         margin:6rem 0;
//         height:auto;
//         h2{
//         text-align: center;
//         height: auto;
//     }
//     `
//     const GridContainer = styled.div`
//         display: grid;
//         grid-template-rows: auto;
//         grid-template-columns: .8fr 1fr;
//         gap:0 8%;
//         width: 75%;
//         max-width: 60rem;
//         margin:auto;
//         height: auto;
//         grid-template-areas:
//         'name responsive'
//         'info prodImage'
//         'file prodImage'
//         'credentials timeline';
//         @media(max-width:${theme.breakPoint.md}){
//             gap:0;
//             grid-template-columns: 1fr;
//             grid-template-areas:
//               'name'
//               'prodImage'
//               'timeline'
//               'info'
//               'file'
//               'credentials';
//           }
//     `
//     const tripleStyles ={
//         width:'60%',
//         maxWidth:'30rem',
//         height: 'auto',
//         margin: '2rem'
//     }
// const Responsive=styled.div`
//     grid-area:responsive;
//     background-color:white;
// `
// const ProductImg = styled.div`
//     grid-area: prodImage;  
//     display: grid;
//     place-items: center;
//     padding: 0 2rem 0rem 2rem ;
//     background-color: white;
//     border-radius: 0 0 25px 25px;
// `
// const Timeline = styled.div`
//     grid-area: timeline;
//     position: relative;
//     height:7rem;
//     align-items: flex-start;
//     padding: 1rem 0rem;
//     transform: translateX(-1rem);
//     `
// function useWindowSize() {
//   const [size, setSize] = useState([0, 0]);
//   useLayoutEffect(() => {
//     function updateSize() {
//       setSize([window.innerWidth, window.innerHeight]);
//     }
//     window.addEventListener('resize', updateSize);
//     updateSize();
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);
//   return size;
// }

//   const [width, height] = useWindowSize();
// function ShowWindowDimensions(props) {
// }
//     return (
//             <>
//             <BrandMain>
//                 <Navbar />
//                 <span style={{opacity:"0"}}>Window size: {width} x {height}</span>;
//                 <GridContainer>
//                     <BrandHeading gridName="name" brandName={name}/>
//                     <Responsive />
//                     <ProductImg>
//                         <SimpleSlider imageList={productImages} duration="999999000" display="flex"/>
//                     </ProductImg>
//                     <InfoBlocks info="info" highlight={highlight} mission={mission} filePath={publicURL} />
//                     <Credentials awards={awards} labels={labels} />
//                     <Timeline>
//                         <TimelineEvent background="white !important">
//                             {events.map(event=>(<li key={event}>{event}</li>))}
//                         </TimelineEvent>
//                         <TimelineDots background="black">
//                             {years.map(year=>(<YearLi key={year} content={year}/>))}
//                         </TimelineDots>
//                     </Timeline>
//                 </GridContainer>
//             </BrandMain>
//             <Container>

//             <Triple>
//                 <h2>Triple Impact</h2>
//                 <StaticImage style={tripleStyles} src='../../../images/triple_impact.png' placeholder="blurred" alt="triple impact"/>
//             </Triple>
//             <BrandDetails brandName={name} about={about} benefit={benefit}/>
//             {/* <NowMe/> */}
//             </Container>
//             <Footer />
//             </>
//     )
// }


// export const brand_query = graphql`
// query Brand {
//     allBrandsYaml(filter: {name: {eq: "OrganiCup"}}) {
//         nodes {
//             name
//             id
//             details {
//               about
//               benefit
//               futureMe
//               futureUs
//               nowMe
//               nowUs
//             }
//             main {
//               highlight
//               mission
//               filePath{
//                 publicURL}
//               awards {
//                 childrenImageSharp {
//                   gatsbyImageData
//                 }
//               }
//               productImages {
//                   childrenImageSharp {
//                     gatsbyImageData(transformOptions: {fit: CONTAIN})
//                   }
//                 }
//               labels {
//                   childrenImageSharp {
//                     gatsbyImageData
//                   }
//                 }
//             }
//             timeline {
//                 events
//                 years
//             }
          
        
//       }
//     }
//   }
// `