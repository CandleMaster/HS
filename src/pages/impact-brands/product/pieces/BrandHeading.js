import React from 'react'
import styled from 'styled-components';

export default  function BrandHeading({ gridName,brandName }) {
    const BrandName = styled.div`
        grid-area: ${gridName};
        padding-top: 7rem;
        margin-bottom: 0;
`
    const Brand = styled.div`
        height: auto;
        font-size: 1.75rem;
        line-height:2.3rem;
    `
    const Impact = styled(Brand)`
        font-size: 1rem;
        line-height: 2.5rem;
    `
    const Divider = styled.div`
        height: 1px;
        background-color:black;
    `
    return (
            <BrandName>
                <Brand>{brandName}</Brand>
                <Impact>impact brand</Impact>
                <Divider />
            </BrandName>
    )
}