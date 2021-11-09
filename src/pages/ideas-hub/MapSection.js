import React from 'react'
import styled from 'styled-components';
import { theme } from '../theme'
import Map from './Map'
import Related from './Related'
// import RightPanelInner from './RightPanelInner'
// import RightPanelOuter from './RightPanelOuter'


export default function MapSection() {
    const MapWrapper = styled.section`
        background-color:${theme.colors.midnight};
        border: 1px red solid;
        width:100%;
        display:flex;
        flex-wrap:wrap ;
    ` 
    const LeftPanel=styled.div`
        flex: 1 1 40rem;
        padding:0 1rem 0 2rem;
        `
    const RightPanel= styled.div`
        flex: 1 1 22rem;
        height: auto;
        padding-bottom: 2rem;
        border-radius:5rem 0 0 5rem;
        background-color:${theme.colors.beige};
        `
 const TitleWrapper= styled.div`
        border-radius:5rem 0 0 0;    
        padding: 3rem 0 2rem 0;
        background: black;
        height:auto;
        h2{
            width: 75%;
            max-width:38rem;
            margin: 0 auto;
            color:white;
            font-size: 1.5rem;
        }
        /* background: url('../../images/triple_impact.png'); */
 `
 const RightPanelContainer = styled.div`
        width: 75%;
        max-width:38rem;
        margin: 0 auto;
        `

 const InnerDescription = styled.div.attrs({className:'InnerDes'})`
    margin:2rem 0;
    height: 35%;
    resize:vertical;
    overflow: hidden;
    position: relative;
    `
const FoggyBottom= styled.div`
    position: absolute;
    height: 3rem;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0) 60%, rgba(245,243,240,1) 100%);
    z-index: 2;
    bottom: 0;
`
return (
        <MapWrapper>
            <LeftPanel><Map /></LeftPanel>
            <RightPanel>
                <TitleWrapper><h2>Decentralisation & Blockchain</h2></TitleWrapper>
                <RightPanelContainer>
                        <InnerDescription>
                        <p className='hullo'>Where does it come from?
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                        <FoggyBottom />
                        </InnerDescription>

                        
                            {/* <OuterDescriptions/> */}
                        <Related/>
                </RightPanelContainer>
            </RightPanel>
        </MapWrapper>
    )
}
