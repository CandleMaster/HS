import styled, { keyframes } from 'styled-components';
import { theme } from './theme'

export const Vision = styled.h1`
color: grey;
width: auto;
padding: 0rem 0rem;
font-weight: 600;
`

export const Display = styled.div`
    margin: 5rem 0;
    display: flex;
    max-height: 26rem;
    flex-wrap:wrap;
    text-align: center;
    flex-direction: row-reverse;
    overflow: hidden;
    padding-left: 3rem;
    background-color:${theme.colors.beige} ;
    > *{
        flex: 1 1 15rem;
    }
`
export const Arrow = styled.button`
    border: solid white;
    border-width: 0 4px 4px 0;
    background: transparent;
    margin:1rem;
    width: 1rem;
    height: 1rem;
    transform:rotate(-45deg)
`

export const DisplayArrowContainer = styled.div`
    background-color: white;
`
export const DisplayArrowBox = styled.div`
    background-color: ${theme.colors.beige};
    width: 4rem;
    border-radius: 0 5px 35px 0;
    display:grid;
    place-items:center
`

export const LeftArrow = styled(Arrow)`
    border-color:rgb(0,0,0, 0.2);
    margin: 0.75rem;
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