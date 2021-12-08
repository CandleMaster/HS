import React from 'react'
import styled from 'styled-components';
import {theme} from '../../styles/theme'
import CheckBox from './Checkbox'


const Search = styled.div`
    background-color: ${theme.colors.ams};
    border-radius:6rem;
    height: auto;
    *{
        color:white;
    }
    p{
        padding-top: 2rem;
    }
`
const SearchContainer = styled.form`
    width: 75%;
    height: auto;
    margin: 0 auto;
    padding:2rem 0;
`
const SearchBar = styled.input`
    width: 50%;
    background: rgb(255, 200, 124) linear-gradient(
    90deg,
    rgba(255, 200, 124, 1) 0%,
    rgba(252, 165, 131, 1) 100%
    ) !important;
    height: 3.5rem;
    z-index:10;
    opacity: 1;
    position:relative;
    border-radius: 0 99px 99px 99px;
    ::before{
        content: '';
        border-radius: 0 99px 99px 99px;
        position: absolute;
        inset:.2rem;
        background-color: ${theme.colors.ams};
    }
`
const SearchCategories = styled.div`
    /* display: flex; */
`
const IndustryTag = styled.div`
display: flex;
    input{
        background: white !important;
        height: 1rem;
        left:0;
    }
`

export default function SearchBrands(prop) {

    return (
    <Search>
        <SearchContainer
            action="/"
            method="get"
            autoComplete="off"
        >
            <SearchBar 
                placeholder="test"
                value="something"
                type="text"
                id="header-search"
                placeholder="Search blog posts"
                name="s"
                />
            <p>or search by category</p>
            <SearchCategories>
                <IndustryTag>Industry</IndustryTag>
                <CheckBox checked={prop.checked.hullo} onChange={prop.handCheck} tag="hullo"></CheckBox>
                <CheckBox checked={prop.checked.tackle_oppression} onChange={prop.handCheck} tag="tackle_oppression"></CheckBox>
                <CheckBox checked={prop.checked.tackle_inequality} onChange={prop.handCheck} tag="tackle_inequality"></CheckBox>
                <div>Impact type</div>
                <div>Impact type</div>
            </SearchCategories>
            <button type="submit">Search</button>
        </SearchContainer>
    </Search>
    )
}
