import React, { useState } from 'react'
import styled from 'styled-components';
import {theme} from '../../styles/theme'
import {RightArrow, LeftArrow} from '../../styles/Global.styles'

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
    // With cross decoration centered
    const NowMeElement = styled.div`
        position: relative;
        height:auto;
        flex:1 1 17rem;
        min-width:20rem;
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
            @media(max-width:860px){
                ::after{
                content:"";
                border-color:transparent !important;
                }
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
            transition: background .4s ease;
        } 
        :hover::before{
                background: ${theme.colors.smokeLight};
            }
    `
    // function processData(elementDat){
    //     elementDat.map((element)=>{return<ListItems dangerouslySetInnerHTML={{__html:element}}/>})
    // }
    const [check, setChecked]=useState(false)
    return (
        <NowMeElement>
            <CoverLabel for={coverID}>
            <NowMeName>{contentHeading}</NowMeName>
            <ul>
            {elementData && elementData.map((element)=>{return<ListItems dangerouslySetInnerHTML={{__html:element}}/>})}

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
