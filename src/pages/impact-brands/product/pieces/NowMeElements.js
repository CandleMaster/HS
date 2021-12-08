import React, { useState } from 'react'
import styled from 'styled-components';
import {theme} from '../../../../styles/theme'
import {RightArrow, LeftArrow} from '../../../../styles/Global.styles'

const ListItems= styled.li`
    list-style: none;
    position: relative;
    color:black;
    height:auto;
    ::before{
        content:'';
        position: absolute;
        height: .65rem;
        width: .65rem;
        border-radius: 50%;
        background-color:${theme.colors.noosa};
        left: -1.5rem;
        top:.6rem;
    }
`
const NowMeName = styled.h3`
    text-align: center;
    color: ${theme.colors.dusk};
    font-size: 1.25rem;
`
const CoverLabel = styled.label``

export default function NowMeElements({ coverID,elementData,dataPoints,dataPrev,dataNext,contentHeading,borderWidth,top,bottom,right,left}) {
    const ArrowBox = styled.div`
        position: absolute;
        width: auto;
        height:auto;
        padding:1rem;
        bottom: ${bottom};
        left:${left};
        top:${top};
        right: ${right};
    z-index:3;
        :hover{
            z-index:5;
        }
    `
    const NowMeElement = styled.div`
        position: relative;
        height:auto;
        flex:1 1 17rem;
        padding: 3rem;
        cursor: pointer !important;
        transition: background .5s ease;
        *{height: auto}
        ::after{
        content: "";
        position: absolute;
        bottom: ${bottom};
        left:${left};
        top:${top};
        right: ${right};
        width: 15%;
        height: 15%;
        border-style:solid;
        border-color:${theme.colors.ams} !important;
        border-width: ${borderWidth} !important;
        z-index:4;
    }
            :hover{
                background: ${theme.colors.smokeLight};
            }
                ::visited::after{
                    z-index: 2;
                }
        `
    const Cover = styled.input`
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
        cursor: pointer !important;
        border-radius: 10rem;
        z-index: 3;
        :checked{
            visibility: hidden;
            z-index:-1;
        }
        ::before{
            content: "${contentHeading}";
            position: absolute;
            inset: 0;
            display: grid;
            place-items: center;
            background: ${theme.colors.smoke};
            visibility: visible;
            font-size: 1.25rem;
            transition: background .5s ease;
        } 
        :hover::before{
                background: ${theme.colors.smokeLight};
            }
    `

    const [check, setChecked]=useState(false)
    return (
        <NowMeElement>
            <CoverLabel for={coverID}>
            <NowMeName>{contentHeading}</NowMeName>
            <ul>
            {elementData(dataPoints).map(dataPoint=><ListItems dangerouslySetInnerHTML={{__html:dataPoint}}/>)}
            </ul>
            <ArrowBox>
                <LeftArrow onClick={()=>dataPrev()}/>
                <RightArrow onClick={()=>dataNext()}/>
            </ArrowBox>
            </CoverLabel>
            <Cover id={coverID} type="checkbox" onClick={()=>setChecked(!check)} checked={check}/> 
        </NowMeElement>
    )
}
