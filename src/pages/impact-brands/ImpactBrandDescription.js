import React from 'react'
import styled from 'styled-components';
import {Container} from '../../styles/Global.styles'
const BrandIndexTexts = styled(Container)`
    margin-top:7rem;
    margin-bottom: 7rem;
    flex-direction:column;
    h3,p{

    color:white!important;
    }
    h3{
        margin:1rem 0;
    }
`
export default function ImpactBrandDescription({BrandIndexText}) {
    return (
        <BrandIndexTexts dangerouslySetInnerHTML={{ __html: BrandIndexText }}/>

    )
}
