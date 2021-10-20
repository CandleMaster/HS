import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

function Slider({ cImage }) {
    const image = getImage(cImage.childrenImageSharp[0])

    return (<li><GatsbyImage image={image} alt="image" /></li>)
}

export default Slider
