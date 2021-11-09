
import React from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components';

const CenteredCarousel=styled(Carousel)`
position:relative;
      button {
        transform: translateX(-1800%) translateY(20rem);
        width: 3px !important;
      }
      span{
        opacity:30% !important;
        transform:scale(0.8);
      }
      `
  const CarouselStyle={
    maxHeight:'23rem'
  }
  
  export default function SimpleSlider({ imageList }) {
  return(
    <CenteredCarousel variant='dark' interval={2500}>
      {imageList.map(image => {
        return(
          <Carousel.Item key={image.id}>
              <GatsbyImage image={getImage(image.childrenImageSharp[0])} alt='no image' objectFit="contain" style={CarouselStyle} />
          </Carousel.Item>
          )})}
    </CenteredCarousel>
  )
 
}

