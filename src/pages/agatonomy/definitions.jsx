import styled from 'styled-components';
import React from 'react';
import Terms from './show-def'

const DefCatWrapper=styled.div`
    padding-right: 1.5rem;
    flex: 1 1 25rem;
    `
const DefineCategory=styled.div`
    flex: 1 1 20rem;
    display: flex;
    flex-wrap: wrap;
    justify-content:flex-start;
    position: relative;
    margin-bottom: 2rem;
    height:auto;
    /* background:blue; */
    `
const What = styled.div`
    padding: 2rem 0;
`
const CategoryName=styled.h3`
    font-weight:500;
    font-size:1.1.rem;
`
function DefCategory ({category, catName }){
    return (
        <DefineCategory >
            <CategoryName>{ catName }</CategoryName>
            {category && category.map(term =>(<Terms 
                key={term.Term}
                name={term.Term} 
                definition={term.Definition}
            ></Terms>))}
        </DefineCategory>

    )}

export default function Definitions({ define1, define2, define3, define4,categoryName1, categoryName2, categoryName3, categoryName4}) {
            return (
                <DefCatWrapper>
                    <What>
                        <h2>What is agatonomy?</h2>
                        <h5>=</h5>
                        <h5 style={{display:'inline'}}>“Agathos” + “Onomy” <h6 style={{display:'inline'}}><i>(Greek)</i></h6></h5>
                        <h5>“Virtue” + “A System Of Rules Or Laws”</h5>
                    </What>
                    <DefCategory category={define1} catName={categoryName1} />
                    <DefCategory category={define2} catName={categoryName2} />
                    <DefCategory category={define3} catName={categoryName3} />
                    <DefCategory category={define4} catName={categoryName4} />
                </DefCatWrapper>
    )
}

