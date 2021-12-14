
import React from "react";
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Carousel } from 'react-bootstrap'
import {theme} from '../../styles/theme'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SimpleSlider({ imageList,duration,button }) {
    const CenteredCarousel=styled(Carousel)`
        padding: 2.5rem;
        aspect-ratio:1;
        display:grid;
        place-items:center;
        height:auto;
        transform: translateY(-1rem);
        object-fit:contain !important;
        button {display: none;}
        span{opacity:25% !important;}
        a{z-index: 999;}
        @media(max-width:${theme.breakPoint.sm}){
        /* height: 68vw; */
        padding: 1rem;
      }
    `
    const CarouselImg = styled(GatsbyImage)`
      object-fit:contain;
      aspect-ratio:1;
      height:auto;
      width:auto;
      padding:1.25rem;
@media(max-width:${theme.breakPoint.sm}){
        /* height: 68vw; */
        /* max-height:70vw; */
      }
    `
  return(
    <CenteredCarousel variant='dark' interval={duration}>
      {imageList && imageList.map((image,index) => {
        return(
          <Carousel.Item key={index}>
              <CarouselImg 
                  image={getImage(image.childrenImageSharp[0])} 
                  alt='featured image' 
                  objectFit="contain"
                   
              />
          </Carousel.Item>
          )})}
    </CenteredCarousel>
  )
 
}

