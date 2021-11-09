import React from 'react'
import styled from 'styled-components';


export default function Container({ children }) {
    const Container =styled.div`
        width: 75%;
        max-width: 50rem;
        margin:auto;
        height: auto;
    `
    return (
        <>
            <Container>{children}</Container>
        </>
    )
}
