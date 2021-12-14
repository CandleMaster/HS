import React from 'react'
import { theme } from '../../styles/theme'
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image'
import LineAnimate from './LineAnimate'


const Testamony = styled.div`
    width: 70%;
    max-width:30rem;
    height: auto;
    padding: 5rem 0 10rem 0;
    margin:0rem auto;
    min-height: 7rem;
    display: grid;
    place-items: center;
    position: relative;
  div{
    height: 1.25rem;
    margin: 1.5rem 0;
  }
  
  `
const MoreGood = styled.b`
    width: auto;
    height: auto;
    flex-direction: column;
    display: flex;
    `
export default function Quotes({ quoteFont,underline,quoteHeading,quote,headingColor}) {

const UnderlinedText =styled.b`
    color:${theme.colors.dusk} !important;
    font-size: ${quoteFont ? quoteFont:'1.5rem'};
    line-height:${quoteFont ? '2.5rem':'1.89rem'};
    font-weight: 600;
    letter-spacing: 2px;
    
    `
    const Quote = styled.h2`
        font-size: ${quoteFont ? quoteFont:'1.5rem'};
        /* font-size: 6rem; */
        line-height:${quoteFont ? '2.5rem':'1.95rem'};
        /* line-height:5rem; */
        font-weight: 600;
        /* letter-spacing: 2px; */
        text-align: center;
        margin: 0;
        height: auto;
        padding: 0;
        color:${theme.colors.dusk} ;
        `
      const Philosophy=styled.h2`
          text-align: center;
          font-weight: 500;
          font-size: 1.75rem;
          color:${headingColor} !important;
          padding-top:3rem;
          display:inline;
          `
    return (
            <Testamony 
              data-sal="slide-up"
              data-sal-duration="600" 
              data-sal-delay="80" 
              
            >
                <Philosophy>{quoteHeading}</Philosophy>
                <StaticImage 
                    src="../../images/icons/quote_marks.png"
                    objectFit="contain"
                    style={{opacity:".3"}}
                    />
                <Quote>{quote}</Quote>
                <MoreGood>
                    <UnderlinedText>{underline}</UnderlinedText>
                    <LineAnimate />
                </MoreGood>
            </Testamony>
    )
}
