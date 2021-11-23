
import React from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components';


export default function SimpleSlider({ imageList,duration,button }) {
    const CenteredCarousel=styled(Carousel)`
      padding: 3rem;
      aspect-ratio:1;
      transform: translateY(-1rem);
        button {
          /* transform: translateX(-2.5rem) translateY(22rem);
          width: 3px !important; */
          display: none;
        }
        span{
          opacity:25% !important;
        }
        a{
          z-index: 999;
        }
          `
      const CarouselStyle={
      }
  return(
    <CenteredCarousel variant='dark' interval={duration}>
      {imageList.map(image => {
        return(
          <Carousel.Item key={image.id}>
              <GatsbyImage image={getImage(image.childrenImageSharp[0])} alt='no image' objectFit="contain" style={CarouselStyle} />
          </Carousel.Item>
          )})}
    </CenteredCarousel>
  )
 
}

