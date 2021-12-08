import styled from 'styled-components';
import { theme } from '../styles/theme'
export const BlogGrid = styled.section`
    margin: 5rem auto;
    width: 75%;
    max-width: 80rem;
    display: grid;
    gap:4rem;
    grid-template-columns: repeat(auto-fill, minmax(16rem,1fr));
    background-color:${theme.colors.midnight};
`

export const Vision = styled.h1`
color: grey;
width: auto;
padding: 0rem 0rem;
font-weight: 600;
`

export const Display = styled.div`
    margin: 5rem 0;
    height:30rem;
    display: flex; 
    max-height: 29rem;
    flex-wrap:wrap;
    text-align: center;
    flex-direction: row-reverse;
    overflow: hidden;
    padding: 0 4rem;
    background-color:${theme.colors.beige};
    border-radius: 0 5px 35px 0;
    margin-right:3rem !important;
    transform:translateX(-6rem);
    > *{
        flex: 1 1 16rem;
    }
`
export const Arrow = styled.button`
    border: solid white;
    border-width: 0 4px 4px 0;
    background: transparent;
    paddiing:2.75rem;
    /* margin:.5rem; */
    width: 1rem !important;
    height: 1rem !important;
    transform:rotate(-45deg);
margin: 0.15rem;
`

export const DisplayArrowContainer = styled.div`
    background-color: white;
`
export const DisplayArrowBox = styled.div`
    background-color: ${theme.colors.beige};
    width: 4rem;
    display:grid;
    place-items:center
`

export const LeftArrow = styled(Arrow)`
    border-color:rgb(0,0,0, 0.07);
    transform:rotate(135deg)    
`
export const RightArrow = styled(LeftArrow)`
    transform:rotate(-45deg)
`
export const DownArrow =styled(LeftArrow)`
    transform:rotate(45deg)
`
export const FlexBox=styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
`
export const Container = styled.div`
    width: 75%;
    max-width: 50rem;
    min-width: 30rem;
    margin: auto;
    padding: 3rem 0;
    min-height: 30rem;
    height: auto;
    display: flex;
    justify-content: ${props => props.justify};
    flex-wrap: ${props => props.wrap};
    overflow: ${props => props.overflow};
  `