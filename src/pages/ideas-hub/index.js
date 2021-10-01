import styled from 'styled-components'
import React, { useState } from 'react'
import Map from './Map'
// import ContainerWrapper from './ContainerWrapper'


function Blog() {
    const Container = styled.div`
        background-color:#363E4F;
        width:100%;
        height:100%;
        display: flex;
        flex-wrap: wrap;
        `  

const MapWrapper = styled.div`
        width:100%;
        display:flex;
        `
const LeftPanel=styled.div`
    width:50%;
    padding:0 03% 0 10%;
    `
const RightPanel= styled.div`
    width:50%;
    background-color:#F4F3F0;
    border-radius:10% 0 0 10%;
    `
const BlogGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr repeat(6, minmax(auto,30rem)) 1fr;
    background-color:#363E4F;
`
return (
    // <ContainerWrapper>
        <Container style={{display:"flex"}}>
            <MapWrapper>
                <LeftPanel><Map /></LeftPanel>
                <RightPanel />
            </MapWrapper>
            <BlogGrid />
        </Container>
    // </ContainerWrapper>
    )
}

export default Blog
