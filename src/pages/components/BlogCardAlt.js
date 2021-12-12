import React from 'react'
import styled from 'styled-components';
import { theme } from '../../styles/theme'


    const BlogInfo=styled.div`
            flex: 1 1 6rem;
            padding: 1rem 2rem 0.7rem 2rem;
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
    `
    const BlogTitle =styled.h4`
        font-size: 1rem;
        `
    const TestImg =styled.div`
        flex: 1 1 9rem;
        border-radius:0 0 0 2rem;
        background: orange;
    `
export default function BlogCard({ padding }) {
        const BlogCard=styled.div`
        height: auto;
        /* max-height: 15rem; */
        margin:${padding};
        width: 100%;
        border-radius:0 2rem;
        display: flex;
        flex-direction: column;
        background-color: ${theme.colors.dusk};
        aspect-ratio: 3/2;
        *{
            height:auto;
            margin: 0;
            color:white;
        }
        p{
            display: inline;
            font-size: .75rem;
        line-height:1.25rem;

        }
    `
    return (
        <BlogCard>
            <BlogInfo>
                <Source>Hopskotch</Source>
                <BlogTitle>What are impact brands & why are they important?</BlogTitle>
                <AuthorDate>By Olivia Sakanovich </AuthorDate>
                <p>  | </p>
                <AuthorDate>21 October, 2021</AuthorDate>
            </BlogInfo>
            <TestImg></TestImg>
        </BlogCard>
    )
}
