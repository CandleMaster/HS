import React from 'react'
import styled from 'styled-components';
import { theme} from '../../styles/theme'

export default function Container({ children }) {
    const Container =styled.div`
        width: 75%;
        max-width: 55rem;
        margin:auto;
        height: auto;
        @media(max-width:${theme.breakPoint.sm}){
          width: 87%;}
    `
    return (
        <>
            <Container>{children}</Container>
        </>
    )
}
