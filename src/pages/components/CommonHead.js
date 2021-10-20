import React from 'react'
import styled, { keyframes } from 'styled-components';
import { Container } from "../Global.styles"
import { GatsbyImage } from 'gatsby-plugin-image'
import { theme } from '../theme'

const Heading = styled.div`
    background-color: ${theme.colors.beige};
    display: grid;
    height: 70vh;
    place-items: center;
    position:relative;
`
const Vision = styled.h1`
    color: grey;
    width: auto;
    padding: 0.2rem 0rem;
    margin-right: 3rem;
    font-weight: 600;
`

const tripleStyles = {
    maxWidth: "26rem",
    height: "auto",
    marginTop: "-8rem",
    aspectRatio:'2.6/3',
    borderRadius: '0 0 25px 25px'
}
const Title = styled.div`
    width: auto;
    align-self: center;
    padding-left:0.5rem;
`
const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}`
const LineWrapper = styled(Vision)`
    height: 0.3rem;
    border-radius: 50px;
    overflow:hidden;
    padding: 0;
`
const Agatonomy = styled(LineWrapper)`
    width:100%;
    background: rgb(255, 200, 124);
    background: linear-gradient(
    90deg,
    rgba(255, 200, 124, 1) 0%,
    rgba(252, 165, 131, 1) 100%
    );
    animation:.5s ${slideInFromLeft} ease-in-out;
`

export default function CommonHead({ imageSrc, titleUp, titleDown}) {
    return (
        <Heading>
                <Container justify={"space-between"} >
                <Title>
                    <Vision>{titleUp}</Vision>
                    <Vision>{titleDown}</Vision>
                    <LineWrapper>
                        <Agatonomy />
                    </LineWrapper>
                </Title>
                <GatsbyImage 
                    image={imageSrc}
                    style={tripleStyles}
                />
                </Container>
            </Heading>
    )
}
