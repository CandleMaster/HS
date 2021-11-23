import React from 'react'
import styled from 'styled-components';
import { Container } from "../../styles/Global.styles"
import { GatsbyImage } from 'gatsby-plugin-image'
import { theme } from '../../styles/theme'
import { LineAnimate } from './'
import { Vision } from '../../styles/Global.styles'

const Heading = styled.div`
    background-color: ${theme.colors.beige};
    display: grid;
    height: 70vh;
    place-items: center;
    position:relative;
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
    margin-right:2rem ;
`

export default function CommonHead({ imageSrc, titleUp, titleDown}) {

    return (
        <Heading>
                <Container justify={"space-between"} >
                <Title>
                    <Vision>{titleUp}</Vision>
                    <Vision>{titleDown}</Vision>
                    <LineAnimate />
                </Title>
                <GatsbyImage 
                    image={imageSrc}
                    style={tripleStyles}
                    alt="heading"
                />
                </Container>
            </Heading>
    )
}
