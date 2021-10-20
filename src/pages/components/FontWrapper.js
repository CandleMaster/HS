import React from 'react'
import styled from 'styled-components';

function FontWrapper({ children }) {
    const Fonts=styled.div`
        *{
            font-family: 'Inter' sans-serif;
        }
    `
    
    return (
        <Fonts>{children}</Fonts>
    )
}

export default FontWrapper
