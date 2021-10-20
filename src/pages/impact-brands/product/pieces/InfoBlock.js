import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import { InfoBlock, InfoHead, InfoText, File } from '../product.styles'


export default function InfoBlocks({ highlight,mission,filePath }) {
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
