import React from 'react'
import styled from 'styled-components';

export default function FooterCard( { children, title, titleStyle} ) {
    const Content= styled.div`
        padding:1.5rem 0;
    `
    const Cards= styled.div`
        display: flex;
        flex-direction: column;
        padding: 2rem 0;
    `

    return (
            <Cards>
                <div style={titleStyle}>{title}</div>
                <Content>{children}</Content>
            </Cards>
    )
}
