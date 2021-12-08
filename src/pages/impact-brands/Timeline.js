import styled, { keyframes } from 'styled-components'

const items = 5
const duration = 20
const cycleGlyphs = keyframes`
  0%, ${100 / items - 3}% { opacity: 1; }
  ${100 / items}%, 100% {opacity: 0;}
`
function template(i, items, duration) {
  return `
      &:nth-child(${i + 1}) {
        animation-delay: ${`${(duration / items) * i}s`};
       }
    `
}
function getAnimations(items, duration) {
  let str = ''
  for (let i = 0; i < items; i += 1) {
    str += template(i, items, duration)
  }
  return str
}
const TimelineEvents = styled.ul`
    position: absolute;
    top: 1rem;
    height: 3rem;
    
    display: flex;
    padding: 0;
    align-items: flex-end;
    li {
      position: relative;
      height: auto;
      margin: 0 -1rem;
      text-align: center;
      list-style: none;
      animation: ${cycleGlyphs} ${duration}s ease-in-out infinite;
      ${getAnimations(items, duration)};
      opacity: 0;
    }
    li::before{
        content: '';
        position: absolute;
        width: .8rem;
        height: .8rem;
        bottom: -1.7rem;
        left:50%;
        border: 1px black solid;
        border-radius: 100px;
        animation: none;
        z-index:3;
    }
    li:nth-child(${items-1}){
      margin:0 0.2rem;
   }
  
`

export const TimelineEvent= styled(TimelineEvents)`
  li::before{background: black !important;}
  z-index:3
`
export const TimelineDots = styled(TimelineEvents)`
  z-index: 1;
  *{
    opacity:1 !important;
  }
  /* li{animation: none !important;}
  li::before{
    background-color:white;
    }
  li::after{
    content:"";
     content:${props=> props.afterContent};
      position: absolute;
      border:1px black solid;
      width: 100%;
      line-height:3rem;
      height: .1rem;
      bottom: -1.4rem;
      left:50%;
      text-align: left;
      animation: none;
   }
   li:last-child::after{
     border:none;
   } */

  
`

export const YearLi = styled.li`
animation: none !important; 
  ::before{
    background-color:white;
    }
  ::after{
    /* content:""; */
     content:"${props=> props.content}";
      position: absolute;
      border:1px black solid;
      width: 100%;
      line-height:3rem;
      height: .1rem;
      bottom: -1.4rem;
      left:50%;
      text-align: left;
      animation: none;
   }
   :last-child::after{
     border:none;
   }
`