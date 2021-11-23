import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import styled from 'styled-components';

export default function InfoBlocks({ highlight,mission,filePath,info}) {
const Info= styled.div`
    `
const InfoBlock= styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    grid-area:${info};
    height: auto;
    `
const InfoHead=styled.h2`
    font-size: 1rem;
    height: auto;
    font-family:Inter, sans-serif;
    font-weight:400;
    margin:.5rem 0;
    `
const InfoText = styled.div`
    font-family:Inter, sans-serif;
    font-size: .85rem;
    margin: 0;
    padding-bottom: 1rem;
    `
  const File = styled.a`
margin: .5rem 0;
    grid-area:file;

`
    return (
      <InfoBlock>
                <InfoHead>Product</InfoHead>
                <InfoText>{highlight}</InfoText>
                <InfoHead>Mission</InfoHead>
                <InfoText>{mission}</InfoText>
            <File href={filePath}><StaticImage src="../../../../images/triple_impact.png" style={{width:"3rem",height:"auto"}} alt="file"/></File>
                  
      </InfoBlock>
    )
  }
