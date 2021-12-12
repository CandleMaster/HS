import React from 'react'
import styled from 'styled-components';
import { theme } from '../../styles/theme'
import { Link } from "gatsby"


export default function HeroButtons({ buttonPosition, wrapPadding,wrapMargin,backgroundColor,fontColor}) {
    const HeroButton = styled(Link)`
        width:15rem;
        padding:0.5rem .75rem;
        text-align: center;
        text-decoration: none;
        font-size:1.25rem;
        font-weight: 500;
        color: ${theme.colors.ams};
        color: ${fontColor};
        letter-spacing: 2.5px;
        background-color:rgba(225,225,225,0.5);
        background-color: ${backgroundColor};
        border-radius: 99px;
        /* border: rgba(225,225,225,1) 3px solid; */
        transition: all .2s linear, transform .2s ease;
        &:hover{
            color:${theme.colors.ams}! important;
            border-color: transparent;
            /* background:rgb(255, 200, 124) linear-gradient(90deg,
                rgba(255, 200, 124, 1) 0%,
                rgba(252, 165, 131, 1) 100%
                ) !important;  */
                background: rgba(225,225,225,0.9);
            }
            @media(max-width:540px){
                display: grid;
                place-items: center;
                width:9rem;
                padding: 0.5rem 1.25rem;
            }
    `
    const ButtonWrapper = styled.div`
        position: ${buttonPosition};
        height: auto;
        bottom:10%;
        width: 100%;
        display: flex;
        padding: ${wrapPadding};
        margin: ${wrapMargin};
        align-items: stretch !important;
        gap: 6%;
    `
    return (
        <ButtonWrapper>
            <HeroButton to='/impact-brands'>impact brands</HeroButton>
            {/* <HeroButton to='/ideas-hub'>ideas hub</HeroButton> */}
        </ButtonWrapper>
    )
}
