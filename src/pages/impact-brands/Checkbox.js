import React from 'react'
import styled from 'styled-components';

const CheckBoxItem=styled.div`
    input{
        height: auto;
    }
`
export default function CheckBox({onChange,tag,checked, ...prop}){
    return(
        <CheckBoxItem>
        <input type="checkbox" id={tag} name={tag} onChange={onChange} checked={checked}/>
        <label for={tag}>{tag}</label>
        </CheckBoxItem>
    )
}