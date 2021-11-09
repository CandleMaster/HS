import React,{ useState } from 'react'
import styled from 'styled-components';
import { BlogCard, BlogCardAlt } from '../components'


export default function Related() {

const [onRead,toggleRelated]= useState(true)
const ReadOrWatch = styled.div`
        height:auto;
    *{
        display: inline;
        width:auto;
        border:0px;
    }
`
const Related = styled.div`
    height: 18rem;
    overflow:scroll;
    position: relative;

 `
 function handleRead(){
    if (!onRead){
        toggleRelated(prev=>!prev)
    }
 }
 function handleWatch(){
    if (onRead){
        toggleRelated(prev=>!prev)
    }
 }
 function BlogCards(){
     return(            
     <>
    <BlogCard />
     <BlogCard />
     <BlogCard />
    </>
     )
 }

 function Videos(){
     return(
         <>
            <div>videos</div>
         </>
     )
 }
    return (
        <>
        <ReadOrWatch>
            <button onClick={handleRead} active={onRead}>Read</button>
            <div> | </div>
            <button onClick={handleWatch} active={!onRead}>Watch</button>
        </ReadOrWatch>
        <Related>
        {onRead? BlogCards():Videos()}
        </Related>
        </>
    )
}
