import React from 'react'
import styled from 'styled-components';
import { theme } from '../../styles/theme'

    const BlogCardWrap=styled.div`
        height: auto;
        width: 100%;
        border-radius:0 2rem;
        display: flex;
        flex-direction: row;
        background-color: white;
        *{
            height:auto;
            margin: 0;
        }
    `
    const BlogInfo=styled.div`
            flex: 1 1 20rem;
            padding: 1rem 1rem 1.5rem 1.5rem;
            hr{
                width:2rem;
                margin:.5rem 0;
            }
    `
    const Source =styled.p`
        font-size: .6rem;
        font-weight: 700;
        padding-bottom: .7rem;
        color: ${theme.colors.noosa};
    
    `
    const AuthorDate =styled.i`
        font-size: .75rem;
        line-height:1.25rem;
        display: block;
    `

    const BlogTitle =styled.h4`
        font-size: 1rem;
        color:black
    `
    const TestImg =styled.div`
        flex: 1 1 12rem;
        border-radius:0 2rem 0 0;
        background: pink;
        height: auto;
    `
export default function BlogCard({ image }) {
    return (
        <BlogCardWrap>
            <BlogInfo>
                <Source>Hopskotch</Source>
                <BlogTitle>What are impact brands & why are they important?</BlogTitle>
                <hr/>
                <AuthorDate>By Olivia Sakanovich</AuthorDate>
                <AuthorDate>21 October, 2021</AuthorDate>
            </BlogInfo>
            <TestImg></TestImg>
        </BlogCardWrap>
    )
}
