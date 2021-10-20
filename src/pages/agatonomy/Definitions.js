import styled from 'styled-components';
import React from 'react';
import Terms from './showDef'


function Definitions({ test}) {
    const testDefine = [
        {name: 'account for short & long term consequences', definition: 'being an honest entity'},
        {name: 'circlular sdhjkasdas', definition: 'economy that goes round and around'},
       {name: 'sustainable output hulluo', definition: 'the hardest thing to benchmark'}
    ]
    const testDefine2 = [
        {name: 'account for term consequences', definition: 'being an honest entity'},
        {name: 'circlular something fun', definition: 'economy that goes round and around'},
       {name: 'sustainable osdwwlluo', definition: 'the hardest thing to benchmark'}
    ]
    const testDefine3 = [
        {name: 'account for term consequences', definition: 'being an honest entity'},
        {name: 'circlular something fun', definition: 'economy that goes round and around'},
       {name: 'sustainable osdwwlluo', definition: 'the hardest thing to benchmark'}
    ]
    const testDefine4 = [
        {name: 'account for term consequences', definition: 'being an honest entity'},
        {name: 'circlular something fun', definition: 'economy that goes round and around'},
       {name: 'sustainable osdwwlluo', definition: 'the hardest thing to benchmark'}
    ]
    
    const DefCatWrapper=styled.div`
        padding-right: 1.5rem;
        flex: 1 1 25rem;
        /* height:auto; */
        `
    const DefineCategory=styled.div`
        flex: 1 1 20rem;
        display: flex;
        flex-wrap: wrap;
        justify-content:flex-start;
        position: relative;
        margin-bottom: 3rem;
        `
    const What = styled.div`
        padding: 2rem 0;
    `
    function DefCategory ({category}){
        return (
            <DefineCategory >
                {category.map(term =>(<Terms name={term.name} definition={term.definition}></Terms>))}
            </DefineCategory>

        )}
            return (
                <DefCatWrapper>
                    <What>
                        <h2>What is agatonomy?</h2>
                        <h5>=</h5>
                        <h5 style={{display:'inline'}}>“Agathos” + “Onomy” <h6 style={{display:'inline'}}><i>(Greek)</i></h6></h5>
                        <h5>“Virtue” + “A System Of Rules Or Laws”</h5>
                    </What>
                    <DefCategory category={testDefine}/>
                    <DefCategory category={testDefine2}/>
                    <DefCategory category={testDefine3}/>
                    <DefCategory category={testDefine4}/>
                </DefCatWrapper>
    )
}

export default Definitions
