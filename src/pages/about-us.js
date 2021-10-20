import React from 'react'
import { Navbar, CommonHead } from './components'
import { graphql } from "gatsby"
import { getImage } from 'gatsby-plugin-image'

function About({ data }) {
    const childHopscotch = getImage(data.imageSharp.childImageSharp)
    return (
        <div>
            <Navbar />
            <CommonHead 
                imageSrc={childHopscotch}
                titleUp="About"
                titleDown="Hopskotch"
            />
        </div>
    )
}

export default About

export const aboutUsQuery=graphql`
    {
    imageSharp: file(relativePath: {eq: "child_hopscotch.jpeg"}) {
        childImageSharp {
        gatsbyImageData(placeholder: BLURRED,quality:100)
        }
    }
    }

`