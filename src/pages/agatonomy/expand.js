import React, { useState } from 'react'
import { DownArrow } from '../Global.styles'

export default function Expand() {
    class ExpandText extends React.Component {
        constructor(props){
            super(props);
            this.handClick=this.handClick.bind(this)
            this.state={active:props.truth}
        }
        
        handClick(){
            const currentState= this.state.active
            this.setState({active:!currentState})
        }

    render(){
        return(
            <>
                {this.state.active && (<div >article</div>)}
                <DownArrow onClick={this.handClick}></DownArrow>
            </>
        )}
    
    }
    return (
        <div>
            <h3></h3>
            <ExpandText truth={false}></ExpandText>
        </div>
    )
}


