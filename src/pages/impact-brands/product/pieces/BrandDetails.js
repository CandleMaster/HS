import React from 'react'
import styled from 'styled-components';

export default function BrandDetails({ about,benefit,brandName }) {
    const BrandDetail =styled.div`
        height: auto;
        display: flex;
        flex-direction: column;
    `
    return (
        <BrandDetail>
            <h2>About The Product</h2>
            <h3 >impact on consumers</h3>
            <div>{about}</div>
            <h2 > {brandName}</h2>
            <h3>impact on society</h3>
            <div>{benefit}</div>
        </BrandDetail>
    )
}

