import React from 'react'
import { theme } from '../../styles/theme'
import styled, { keyframes } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image'

const slideInFromLeft = keyframes`
    0% {transform: translateX(-100%);}
    100% {transform: translateX(0);}
`

export const Testamony = styled.div`
    width: 70%;
    max-width:35rem;
    height: auto;
    padding: 0;
    margin:13rem auto;
    >h2{
      text-align: center;
      margin: 0;
      height: auto;
      padding: 0;

      color:${theme.colors.dusk};
      b{
        color:${theme.colors.dusk};
        position: relative;
        z-index: 2;
      }
      b::before{
        content: "";
        position: absolute;
        left: 0rem;
        text-overflow: hidden;
        bottom: -0.5rem;
        height: .5rem;
        width:100%;
        background: rgb(255, 200, 124) linear-gradient(
        90deg,
        rgba(255, 200, 124, 1) 0%,
        rgba(252, 165, 131, 1) 100%
        ) !important;
        border-radius: 99px;
        animation:.5s ${slideInFromLeft} ease-in-out;
        } 
      b::after{
        content: "";
        position: absolute;
        left: -100%;
        bottom: -0.5rem;
        height: .5rem;
        width:100%;
        background: white !important;
        }  
    }
    div{
      height: 1.25rem;
      margin: 1.5rem 0;
    }
    
    `
    const Quote = styled.h2`
      font-size: 1.5rem;
      line-height:1.85rem;
      font-weight: 600;
      letter-spacing: 2px;
      
      `
export default function Quotes({ quoteHeading,quote,headingColor}) {

      const Philosophy=styled.h2`
          color:${theme.colors.ams};
          text-align: center;
          font-weight: 600;
          font-size: 1.75rem;
          color:${headingColor};
          `
    return (
            <Testamony 
              data-sal="slide-up"
              data-sal-duration="900" // changes duration of the animation (from 200 to 2000 ms)
              data-sal-delay="150" // adds delay to the animation (from 5 to 1000 ms)
              data-sal-easing="ease"
            >
                <Philosophy>{quoteHeading}</Philosophy>
                <StaticImage 
                    src="../../images/icons/quote_marks.png"
                    objectFit="contain"
                    style={{opacity:".3"}}
                    />
                <Quote>{quote}</Quote>
            </Testamony>
    )
}
