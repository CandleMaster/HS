import React from 'react'
import {theme} from '../../../../styles/theme'
import styled from 'styled-components';
export default function NowMe() {
    const NowMeBox= styled.div`
        display: flex;
        background-color: ${theme.colors.beige};
        border-radius: 50px;
        flex-wrap: wrap;
        margin: 2rem 0;
        `
    const NowMeElements = styled.div`
        height:18rem;
        flex:1 1 17rem;
    `
    return (
        <NowMeBox>  
            <NowMeElements>1</NowMeElements>
            <NowMeElements>2</NowMeElements>
            <NowMeElements>3</NowMeElements>
            <NowMeElements>4</NowMeElements>
        </NowMeBox>
    )
}

