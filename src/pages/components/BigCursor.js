// import React, { useState, useEffect } from 'react'
// import styled from 'styled-components';

// function BigCursor() {

//     const [ position, setPosition ] = useState({ x:0, y:0 })

//     const Cursor= styled.div`
//         top:${props => props.positionY};
//         left:${props => props.positionX};
//         width:3rem;
//         height: 3rem;
//         border-radius:15%;
//         background-color:orange;
//     `
//     useEffect(() => {
//         const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
//         window.addEventListener("mousemove", setFromEvent);}
//     , []);

//     return (<Cursor positionX={position.x} positionY={position.y}/>)
// }

// export default BigCursor
