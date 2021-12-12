
import React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

const DefineGroup=styled.div`
        margin-right:.75rem ;
        flex-grow: 0;
        display: flex;
        transition: display 2s ease-in 1s;
        flex-wrap:wrap ;
        width:auto;
        /* height:auto; */
        `
    const Term = styled.button`
    white-space: nowrap;
        padding: .25rem 1rem;
        border-radius: 25px;
        border: grey 1px solid;
        background-color: white;
        margin: .25rem 0;
        text-align: left;
        width: auto;
        `
    const termClicked = {
        backgroundColor:theme.colors.midnight, 
        color:'white',
        textAlign:'left',
        width:'auto'
    }
    const Definition=styled.div`
        transition: display 2s ease-in-out 1s;
        padding: .5rem;

        `

export default class Terms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: false};
        this.showDef=this.showDef.bind(this)
        }
    showDef() {
        const currentState = this.state.active;
        this.setState({ active: !currentState })
    };
    
    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);
        if (!domNode || !domNode.contains(event.target)) {
            this.setState({ active: false });
    }
        }
    render() {
        return (
            <DefineGroup>
                <Term onClick={this.showDef} style={ this.state.active ? termClicked : null}>{this.props.name}</Term>
                {this.state.active? <Definition>= {this.props.definition}</Definition> : null}
            </DefineGroup>
                )
            }
    }