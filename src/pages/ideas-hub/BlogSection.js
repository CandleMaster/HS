import React from 'react'
import  BlogCardAlt  from '../components/BlogCardAlt'
import { BlogGrid } from '../../styles/Global.styles.js'
export default function BlogSection() {

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
