import React from 'react'
import styled from 'styled-components';
import {theme} from '../../styles/theme'
export default function CheckBox({borderRadius,onChange,tag,checked,boxType,tagDisplayed, ...prop}){
    const CheckBoxItem=styled.div`
        /* width: 70%;
        margin: 0 auto ; */

        *{
            display: inline;
            height: auto; 
            width: auto; 
            padding: .25rem .5rem;
        }
        input{
        position: relative;
        transform: scale(.6);
        padding: .2rem;
        vertical-align: middle;
        }
        input::before{
            content: '';
            inset:0;
            position: absolute;
            margin: -.1rem;
            background: ${theme.colors.midnight} ;
            border: none;
            border-radius: ${borderRadius};
            z-index: 4;
            border:4px ${theme.colors.dusk} solid;
        }
    
        input:checked{
            ::before{
            background: ${theme.colors.dusk} ;
    
            }
        }
        label{
            color: white;
        }
    `
    return(
        <CheckBoxItem>
            <input type={boxType} id={tag} name={tag} onChange={onChange} checked={checked}/>
            <label for={tag}>{tagDisplayed}</label>
        </CheckBoxItem>
    )
}