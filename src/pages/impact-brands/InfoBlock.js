import React from 'react'
import styled from 'styled-components';
import {StaticImage } from 'gatsby-plugin-image'
import {theme} from '../../styles/theme'

const InfoHead=styled.h2`
    font-size: 1.25rem;
    height: auto;
    font-family:Inter, sans-serif;
    font-weight:500;
    margin:.5rem 0;
    `
const InfoText = styled.div`
    font-family:Inter, sans-serif;
    font-size: 1rem;
    margin: 0;
    padding-bottom: 1rem;
    `
  const File = styled.a`
    margin: .5rem 0;
    padding:1rem 0;
    grid-area:file;
    position: relative;
    width: 3rem;
    :hover{
       ::after{
          content:'Brand assessment report';
          position: absolute;
          width: 10.75rem !important;
          background-color:white !important;
          border: 1px ${theme.colors.ams} solid;
          color: ${theme.colors.midnight};
          padding: 0rem .5rem;
          border-radius: 3px;
          font-size: .8rem;
          top:-.5rem;
          left: 2.5rem;
          cursor:default;

       }
    }
`
const Report = styled.p`
    font-size: .8rem;
    color: ${theme.colors.midnight};
    font-weight:400;
`

export default function InfoBlocks({ highlight,mission,filePath,info}) {
const InfoBlock= styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    grid-area:${info};
    height: auto;
    `

    return (
      <InfoBlock>
            <InfoHead>Product</InfoHead>
            <InfoText dangerouslySetInnerHTML={{ __html: highlight }}/>
            <InfoHead>Mission</InfoHead>
            <InfoText dangerouslySetInnerHTML={{ __html: mission }}/>
            <File target="_blank" href={filePath}>
                <StaticImage 
                    src="../../images/icons/report_icon.png" 
                    style={{width:"2.5rem",height:"auto"}} 
                    alt="file"
                />
                <Report>Report</Report>
            </File>
      </InfoBlock>
    )
  }
