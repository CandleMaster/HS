import React from 'react'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import styled from 'styled-components';

export default function Credentials({awards,labels}) {

const Credential= styled.div`
    grid-area:credentials;
    display: flex;
    flex-direction: column;
    height: auto;
h2{
    font-size: .8rem;
    margin: 0rem;
}
& > div {
    display: block;
    padding: 0;
    > *{
        width: 1.25rem;
        margin-right:.8rem;
    }
}
`

function awardMap(item,index){
    const image = getImage(item.childrenImageSharp[0])
    return(<GatsbyImage 
        image={image} 
        alt='no image' 
        objectFit="contain"
        key={index}
    />)
}
    return (
        <Credential>
            <h2>Awards</h2>
            <div>{awards.map(awardMap)}</div>
            <h2>Labels</h2>
            <div>{labels.map(awardMap)}</div>
        </Credential>
    )
}

