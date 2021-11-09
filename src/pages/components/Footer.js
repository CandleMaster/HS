import React from 'react'
import styled from 'styled-components';
import { theme } from '../theme'
import { Container, FooterCard, Mailing } from './'
import { StaticImage } from 'gatsby-plugin-image';

export default function Footer({data}) {
    const FooterContainer = styled.footer`
        background-color: ${theme.colors.beige} !important;
        height: auto;
        z-index: 999;

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

    console.log(data)
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
                                <StaticImage src="../../images/logo/twitter_icon_large.png"></StaticImage>
                                <StaticImage src="../../images/logo/facebook_icon_large.png"></StaticImage>
                                <StaticImage src="../../images/logo/youtube_icon_large.png"></StaticImage>
                                <StaticImage src="../../images/logo/IG_icon_large.png"></StaticImage>
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

