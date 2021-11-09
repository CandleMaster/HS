import React from 'react'
import styled from 'styled-components';
import { theme} from '../theme'
import { BlogCardAlt } from '../components'
export default function BlogSection() {
const BlogGrid = styled.section`
    border: 1px pink solid;
    margin: 5rem auto;
    /* height: auto; */
    width: 75%;
    max-width: 80rem;
    display: grid;
    gap:3rem;
    grid-template-columns: repeat(auto-fill, minmax(20rem,1fr));
    background-color:${theme.colors.midnight};
`
    return (
        <BlogGrid>
            <BlogCardAlt/>
            <BlogCardAlt/>
            <BlogCardAlt/>
            <BlogCardAlt/>
            <BlogCardAlt/>
        </BlogGrid>
    )
}
