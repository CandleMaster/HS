import React from 'react'
import styled from 'styled-components';
import {theme} from '../theme'
export default function SearchBrands() {
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
    const SearchContainer = styled.div`
        width: 75%;
        height: auto;
        margin: 0 auto;
        padding:2rem 0;
    `
    const SearchBar = styled.div`
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
        display: flex;
    `

    return (
    <Search>
        <SearchContainer>
            <SearchBar />
            <p>or search by category</p>
            <SearchCategories>
                <div>Industry</div>
                <div>Impact type</div>
                <div>Impact type</div>
            </SearchCategories>
        </SearchContainer>
    </Search>
    )
}
