
import React from "react";
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Carousel } from 'react-bootstrap'
import {theme} from '../../styles/theme'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SimpleSlider({ imageList,duration,button }) {
    const CenteredCarousel=styled(Carousel)`
        padding: 2rem;
        aspect-ratio:1;
        height: auto;
        transform: translateY(-1rem);
        object-fit:contain !important;
        button {display: none;}
        span{opacity:25% !important;}
        a{z-index: 999;}
        @media(max-width:${theme.breakPoint.sm}){
        padding: 0.5rem;
      }
    `
    const CarouselImg = styled(GatsbyImage)`
      /* width: 30%; */
      object-fit:contain;
      aspect-ratio:1;
      padding:1.25rem;
      height: auto;
      width: auto;


    `
  return(
    <CenteredCarousel variant='dark' interval={duration}>
      {imageList && imageList.map((image,index) => {
        return(
          <Carousel.Item key={index}>
              <CarouselImg 
                  image={getImage(image.childrenImageSharp[0])} 
                  alt='no image' 
                  objectFit="contain"
                   
              />
          </Carousel.Item>
          )})}
    </CenteredCarousel>
  )
 
}

