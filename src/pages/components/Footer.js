import React from 'react'
import styled from 'styled-components';
import { theme } from '../../styles/theme'
import Mailing from './Mailing'
import FooterCard from './FooterCard'
import Container from './Container'
import { StaticImage } from 'gatsby-plugin-image';

export default function Footer() {
    const FooterContainer = styled.footer`
        background-color: ${theme.colors.beige} !important;
        height: auto;
        z-index: 999;
        *
        {
        z-index: 999;
        }
    `
    const FooterContent = styled.div`
        display: flex;
    `
    const Contact= styled.div`
        div{
            padding: .5rem 0;
        }
    `
    const Connect = styled.div`
        display: flex;
        flex-direction: column;
        img{
            width: 2rem;
            padding: .35rem;
            margin: auto;
        }
    `
    const logoStyle = {
        height: 'auto',
        width:'1.75rem',
        margin: '1.5rem 0'
    }

    return (
        <>
            <FooterContainer>
                <Container>
                    <FooterContent>
                        <FooterCard title='Get in touch:'>
                            <Contact>
                                <div>contact@hop-skotch.com</div>
                                <div>Delaware, United States</div>
                            </Contact>
                            <StaticImage style={logoStyle} src="../../images/logo/HS_logo_blue.png"/>
                        </FooterCard>
                        <FooterCard title='Connect:' titleStyle={{display:'grid',placeItems:'center'}}>
                            <Connect>
                                <a 
                                    target="_blank" href="https://www.twitter.com/hopskotch_ " 
                                    rel="noreferrer"
                                    >
                                    <StaticImage 
                                        src="../../images/icons/twitter_icon_large.png" 
                                        alt="our twitter"
                                        /></a>
                                <a 
                                    target="_blank" href="https://www.facebook.com/Hopskotch-104115318382016 " 
                                    rel="noreferrer"
                                    >
                                    <StaticImage 
                                        src="../../images/icons/facebook_icon_large.png" 
                                        alt="our facebook"
                                        /></a>
                                <a 
                                    target="_blank" href="https://www.youtube.com/channel/UC2cIg-Kq4w-NsxSLThHU8fA" 
                                    rel="noreferrer"
                                    >
                                    <StaticImage 
                                        src="../../images/icons/youtube_icon_large.png" 
                                        alt="our youtube"
                                        /></a>
                                <a 
                                    target="_blank" href="https://www.instagram.com/hopskotch/" 
                                    rel="noreferrer"
                                    >
                                    <StaticImage 
                                        src="../../images/icons/IG_icon_large.png" 
                                        alt="our IG"
                                        /></a>
                            </Connect>
                        </FooterCard>
                        <FooterCard title='Subscribe to stay in the loop.'>
                            <Mailing/>
                        </FooterCard>
                    </FooterContent>
                </Container>
            </FooterContainer>
        </>
    )
}

