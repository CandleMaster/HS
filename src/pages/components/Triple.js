import React from 'react'
import styled from 'styled-components';
import {StaticImage} from 'gatsby-plugin-image'
const tripleStyles ={
    width:'60%',
    maxWidth:'26rem',
    height: 'auto',
    margin: '2rem'
}

export default function Triple({ tripleHeading,tripleMargin}) {
const TripleWrap = styled.div`
    display: grid;
    place-items: center;
    margin:${tripleMargin};
    height:auto;
    h2{
    text-align: center;
    height: auto;
    font-weight: 400;
    margin: 1rem 0;
    }
`
    const TripleHeading= styled.h2`
        display: ${tripleHeading};
    `
    return (
        <TripleWrap>
            <TripleHeading>Triple Impact</TripleHeading>
            <StaticImage 
                style={tripleStyles} 
                src='../images/triple_diagram_updated.png' 
                placeholder="blurred" 
                alt="triple impact"
            />
        </TripleWrap>
    )
}
