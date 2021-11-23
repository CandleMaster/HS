import React from 'react'
import styled from 'styled-components';
import { theme} from '../../styles/theme'
import { BlogCardAlt } from '../components'
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
