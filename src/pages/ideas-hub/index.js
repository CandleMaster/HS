import styled from 'styled-components'
import React from 'react'

import Layout  from '../components/Layout'
import { theme } from '../../styles/theme'
import MapSection from './MapSection'
import BlogSection from './BlogSection'


export default function Blog() {
    const Container = styled.div`
        background-color:${theme.colors.midnight};
        width:100%;
        height: auto;
        border: 1px white solid;
        h1{
            height: auto;
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

