import React from 'react'
import styled, { keyframes } from 'styled-components';
import { Vision } from '../../styles/Global.styles'

export default function LineAnimate({ background }) {
    const slideInFromLeft = keyframes`
        0% {transform: translateX(-100%);}
        100% {transform: translateX(0);}
    `
    const LineWrapper = styled(Vision)`
        height: 0.4rem;
        border-radius: 50px;
        overflow:hidden;
        padding: 0;
        `
    const Line = styled(LineWrapper)`
        width:100%;
        background: rgb(255, 200, 124) linear-gradient(
        90deg,
        rgba(255, 200, 124, 1) 0%,
        rgba(252, 165, 131, 1) 100%
        ) !important;
        animation:.5s ${slideInFromLeft} ease-in-out;
        z-index: 999;
    `
    return (
        <>
        <LineWrapper>
            <Line />
        </LineWrapper>
        </>
    )
}
