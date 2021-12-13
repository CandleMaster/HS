import React from 'react'
import styled from 'styled-components';
import { theme } from '../../styles/theme'

const BrandDetail =styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    `
export const DetailHeading=styled.h2`
    width: auto;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.75rem;
    padding-right:.5rem;
    width: auto;
    `
const HeadingsWrapper= styled.div`
    margin: 3rem 0 0 0;
    display: flex;
    height:auto;
`
const DetailSubheading=styled.h3`
    margin: 0;
    font-size: 1.15rem;
    color: ${theme.colors.dusk};
    margin-bottom: 1.5rem;
`
const DetailText = styled.div`
    p{
        padding: .25rem 0;
        color:black;
    }
`
const ConsumerCircle = styled.div`
    display: inline;
    height: 1rem;
    width: 1rem;
    margin:.7rem .25rem;
    background-color:${theme.colors.ams};
    border-radius:50%;
`
const NatureCircle=styled(ConsumerCircle)`
    background:${theme.colors.indian}
    `
const SocietyCircle=styled(ConsumerCircle)`
    background:${theme.colors.peach}
`
export default function BrandDetails({ about,benefit,brandName }) {
    return (
        <BrandDetail>
            <HeadingsWrapper>
                <DetailHeading>About The Product</DetailHeading>
                <ConsumerCircle/>
            </HeadingsWrapper>
                <DetailSubheading>impact on consumers</DetailSubheading>
            <DetailText dangerouslySetInnerHTML={{ __html: about}}/>
            <HeadingsWrapper>
            <DetailHeading> {brandName}</DetailHeading>
                <NatureCircle/>
                <SocietyCircle/>
            </HeadingsWrapper>
                <DetailSubheading>impact on society</DetailSubheading>
            <DetailText dangerouslySetInnerHTML={{ __html: benefit}}/>
        </BrandDetail>
    )
}

