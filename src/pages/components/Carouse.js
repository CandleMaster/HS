
import React from "react";
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SimpleSlider({ imageList,duration,button }) {
    const CenteredCarousel=styled(Carousel)`
        padding: 3rem;
        aspect-ratio:1;
        transform: translateY(-1rem);
        button {display: none;}
        span{opacity:25% !important;}
        a{z-index: 999;}
    `

  return(
    <CenteredCarousel variant='dark' interval={duration}>
      {imageList.map((image,index) => {
        return(
          <Carousel.Item key={index}>
              <GatsbyImage 
                  image={getImage(image.childrenImageSharp[0])} 
                  alt='no image' 
                  objectFit="contain" 
              />
          </Carousel.Item>
          )})}
    </CenteredCarousel>
  )
 
}

