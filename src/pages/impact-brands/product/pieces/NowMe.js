import React from 'react'
import {theme} from '../../../../styles/theme'
import styled from 'styled-components';
import usePaginate from '../../../components/usePaginate'
import NowMeElements from './NowMeElements'
import { DetailHeading } from './BrandDetails'
const NowMeBox= styled.div`
    display: flex;
    position: relative;
    background-color: ${theme.colors.smoke};
    border-radius: 50px;
    flex-wrap: wrap;
    margin: 2rem 0;
    overflow: hidden;
    `
const DetailHeadingBenefits = styled(DetailHeading)`
    text-align: center;
    margin-top:5rem;
`
export default function NowMe({nowMePoints, nowUsPoints,futureMePoints,futureUsPoints}) {
    const { next, prev, currentData } = usePaginate(nowMePoints)
    const { next:nowUsNext, prev:nowUsPrev, currentData:nowUsData } = usePaginate(nowUsPoints)
    const { next:futureMeNext, prev:futureMePrev, currentData:futureMeData } = usePaginate(futureMePoints)
    const { next:futureUsNext, prev:futureUsPrev, currentData:futureUsData } = usePaginate(futureUsPoints)
    // const {}
    return (
        <>
        <DetailHeadingBenefits>Short & Long Term Benefits</DetailHeadingBenefits>
        <NowMeBox>  
            <NowMeElements 
            coverID="cover1"
            dataPoints={nowMePoints}
            elementData={currentData}
            dataPrev={prev}
            dataNext={next}
            contentHeading="Now me"
            borderWidth="0"
            bottom="0"
            right="0"
            />
            <NowMeElements 
            coverID="cover2"
            dataPoints={nowUsPoints}
            elementData={nowUsData}
            dataPrev={nowUsPrev}
            dataNext={nowUsNext}
            contentHeading="Now us"
            borderWidth="0 0 0 1px"
            bottom="0"
            left="0"
            />
            <NowMeElements 
            coverID="cover3"
            dataPoints={futureMePoints}
            elementData={futureMeData}
            dataPrev={futureMePrev}
            dataNext={futureMeNext}
            contentHeading="Future Me"
            borderWidth="1px 0 0 0"
            right="0"
            top="0"
            />
            <NowMeElements 
            coverID="cover4"
            dataPoints={futureUsPoints}
            elementData={futureUsData}
            dataPrev={futureUsPrev}
            dataNext={futureUsNext}
            contentHeading="Future us"
            borderWidth="1px 0 0 1px"
            left="0"
            top="0"
            />
        </NowMeBox>
        </>
    )
}

