import styled from 'styled-components';
import { theme } from './theme'


export const Hero = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`
export const ButtonWrapper = styled.div`
    position: absolute;
    height: 2rem;
    bottom: 18%;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 5%;
`
export const HeroButtons = styled.button`
    background:rgba(225,225,225,0.3);
    height:2.2rem;
    width:10rem;
    z-index: 999;
    border-radius: 25px;
    border: rgba(225,225,225,0.8) 2px solid;
    vertical-align: center;
    text-decoration: none;
`
const HeroText= styled.div`
    position: absolute;
    width: 20rem;
    margin-left:10%;
    height: 5rem;
    font-size:3rem;
    border: black 1px solid;
    color:${theme.colors.midnight}
`
export const Moto= styled(HeroText)`
    top:40%;
    font-family: ${theme.fonts.main};
`
export const Beyond= styled(HeroText)`
    top:55%;
`