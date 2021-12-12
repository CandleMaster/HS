import React from 'react'
import { DownArrow } from '../../styles/Global.styles'
import styled from 'styled-components'
import {theme} from '../../styles/theme'

const Question=styled.h3`
    /* display:block */
    /* margin-top:1rem; */
    /* margin-bottom: 1rem; */
    line-height: 2.25rem;
    padding: 1.25rem 2rem 1.25rem 0rem;
    font-weight: 600;
    color:${theme.colors.dusk};
    /* border-top: .5px solid ${theme.colors.beige}; */
    `
const Answer= styled.p`
    font-size:1.1rem;
    padding:.5rem 0;
    flex:1 1 1;
    `
const ArrowBox=styled(DownArrow)`
    /* display:block */
    margin: 1.5rem 0 0 1rem;
    `
const ExpandContainer= styled.div`
    display:flex;
    flex: wrap;
    border-top: .5px solid ${theme.colors.beige};
    ::first-child{

    }

`
export default function Expand({ subheading, articleText}) {
    class ExpandText extends React.Component {
        constructor(props){
            super(props);
            this.handClick=this.handClick.bind(this)
            this.state={active:props.show}
        }
        
        handClick(){
            const currentState= this.state.active
            this.setState({active:!currentState})
        }

    render(){
        return(
            <>
            <ExpandContainer>
                <Question>{this.props.subheadings}</Question>
                <ArrowBox onClick={this.handClick}></ArrowBox>
            </ExpandContainer>
                {this.state.active && (<Answer dangerouslySetInnerHTML={{__html:this.props.article}}/>)}
        </>
        )}
    
    }
    return (
        <>
            <ExpandText show={false} subheadings={subheading} article={articleText}></ExpandText>
        </>
    )
}


