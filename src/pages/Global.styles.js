import styled from 'styled-components';

export const Arrow = styled.button`
    border: solid white;
    border-width: 0 4px 4px 0;
    background: transparent;
    margin:1rem;
    width: 1rem;
    height: 1rem;
    transform:rotate(-45deg)
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