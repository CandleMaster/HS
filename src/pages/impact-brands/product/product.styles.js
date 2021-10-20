import React from 'react'
import styled from 'styled-components';

// for InfoBlock

export const Info= styled.div`
    `
export const InfoBlock= styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    grid-area:info;
    height: auto;
    `
export const InfoHead=styled.div`
    font-size: 1rem;
    height: auto;
    font-family:Inter, sans-serif;
    font-weight:400;
    margin:.5rem 0;
    `
export const InfoText = styled.div`
    font-family:Inter, sans-serif;
    font-size: .85rem;
    margin: 0;
    padding-bottom: 1rem;
    `
export const File = styled.a`
margin: .5rem 0;
    grid-area:file;

`

// Grid Elements

export const Responsive=styled.div`
    grid-area:responsive;
    background-color:white;
`
export const ProductImg = styled.div`
    grid-area: prodImage;  
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: white;
    border-radius: 0 0 25px 25px;
div{
    display:flex;
    align-items: center;
    ul{
        display: grid;
        place-items: center;
        position:relative;
        margin:0;
        padding:0;
        li{
            display: block;
            position: absolute;
            list-style:none;
            padding: .5rem;
            max-width: 20rem;
        }
    }
}
`
export const Triple = styled.div`
    display: grid;
    place-items: center;
    margin:2rem 0;
    border:red 1px solid;
    height:auto;
h2{
    text-align: center;
    border:orange 1px solid;
    height: auto;
}
`