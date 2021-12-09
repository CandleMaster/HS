import React, { useState } from 'react'
import { DownArrow } from '../../styles/Global.styles'
import styled from 'styled-components'

const Subheading=styled.h3`
    /* display:block */
`
const ArrowBox=styled(DownArrow)`
    display:block
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
                {this.state.active && (<Subheading >{this.props.article}</Subheading>)}
                <ArrowBox onClick={this.handClick}></ArrowBox>
            </>
        )}
    
    }
    return (
        <>
            <Subheading>{subheading}</Subheading>
            <ExpandText show={false} article={articleText}></ExpandText>
        </>
    )
}


