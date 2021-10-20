import React from 'react'
import styled from 'styled-components';
import Slider  from './Slider'
import { LeftArrow, RightArrow, FlexBox } from '../Global.styles'

function Carouse( prop ) {


    const Dot=styled(FlexBox)`
        justify-content:center;
        flex-direction: row;
        button{
            margin: .5rem;
            height: 2px;
            width:2px;
            border-radius: 50%;
            border: white;
            background-color:rgb(0,0,0, 0.2);
        }
    `
    return(                     
        <>       
        <div>
            <LeftArrow />
            <ul>
            {prop.images.map(img => <Slider cImage={img} alt="product image"/>)}
            </ul>
            <RightArrow transform="rotate(-45deg)"/>
        </div>
        <Dot>
            <button />
            <button />
            <button />
        </Dot>
    </>
    )
    
}

export default Carouse
