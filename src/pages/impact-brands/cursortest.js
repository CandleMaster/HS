// import React, { useState, useEffect } from 'react'
// import styled, { keyframes } from 'styled-components';

// function Index() {
//     const [ position, setPosition ] = useState({ x:0, y:0 })
//     const rotate = keyframes`
//         from {
//             transform:  translate(-50%,-50%) rotate(0deg) scale(1);
//         }

//         to {
//             transform: translate(-50%,-50%) rotate(60deg) scale(1.2);
//   }`

//     const Cursor= styled.div`
//         top:${props => props.positionY};
//         left:${props => props.positionX};
//         width:10rem;
//         height:10rem;
//         border-radius:50%;
//         position: absolute;
//         cursor: none;
//         background: linear-gradient(180deg, #FF9568 0%, #FFD89B 90.62%);
//         filter: blur(40px);
//         transition:all 1s ease;
//         animation: ${rotate} 2s linear infinite alternate;
//         &:after{
//             content:'';
//             background:inherit;
//         }
//     `
//     const Delay = styled.div`
//         transition-duration: 3s;
//         transition-delay:1s;
//     `
//     useEffect(() => {
//         const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
//         window.addEventListener("mousemove", setFromEvent);}
//     , []);

//     return (
//         <Delay>
//             <Cursor style={{left:position.x+20+'px',top:position.y+30+'px'}}/>
//         </Delay>
//     )
    
// }

// export default Index
