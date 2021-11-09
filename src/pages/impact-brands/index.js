import React from 'react'
import styled from 'styled-components';
import { Layout } from '../components'
import {theme} from '../theme'
import SearchBrands from './SearchBrands'
import ImpactHeading from './ImpactHeading'

function index() {
    const Container = styled.div`
        width: 100%;
        background-color: ${theme.colors.midnight}
    `
   
return (
        <Layout>
            <Container>
                <ImpactHeading/>
            <SearchBrands />
            </Container>
        </Layout>
    )
}

export default index
