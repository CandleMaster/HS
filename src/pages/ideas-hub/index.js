import styled from 'styled-components'
import React, { useState } from 'react'

import { Layout } from '../components'
import { theme } from '../theme'
import MapSection from './MapSection'
import BlogSection from './BlogSection'
// import ContainerWrapper from './ContainerWrapper'


export default function Blog() {
    const Container = styled.div`
        background-color:${theme.colors.midnight};
        width:100%;
        height: auto;
        border: 1px white solid;
        h1{
            height: auto;
            /* font-size: 1rem; */
            text-align: center;
            width: 70%;
            margin: 10rem auto 4rem;
        }
        `  
        
return (
    <Layout >
        <Container >
            <h1>Explore ideas that are shaping a new economy.</h1>
            <MapSection/>
            <BlogSection />
        </Container>
    </Layout>
    )
}

