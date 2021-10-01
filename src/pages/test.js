import React from 'react'
import styled from 'styled-components'

function test() {
    const Body = styled.div`
        background-image: url(http://bit.ly/2gPLxZ4); //add "" if you want
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    `
    const NavBar = styled.div`
        &{background: inherit;
        width: 100%;
        height: 75px;
        position: fixed;
        overflow: hidden;  //adding overflow hidde
     }
        &:before {
            content: " ";
            background: inherit; 
            width: 140%;
            height: 125px;
            position: absolute;
            left: -25px;
            right: 0;
            top: -25; 
            bottom: 0;
            box-shadow: inset 0 0 0 3000px rgba(255,255,255,0.2);
            filter: blur(10px);
        }
    `
    // const NavBar = styled.div`
    //        height: 64px;
    //         width: 100%;
    //         padding-right: 16px;
    //         margin-left: -8px;
    //         margin-top: -8px;
    //         /* transition: left 1.2s ease; */
    //         background: inherit;
    //         filter: blur(10px);
    //         position: fixed;

    // `
    // const MyNavBar = styled.div`

    //     /* background: inherit; */
    //     background-color:rgba(255,255,255,0.2);
    //     box-shadow: inset 0 0 0 3000px rgba(255,255,255,0.1);
    //     filter: blur(1px);
    //     position: fixed;
    //     top:75px;
    //     width: 120%;
    //     height: 75px;
    //     overflow: hidden;
    //     `
 


    return (
        <div>
            <Body>
                {/* <MyNavBar /> */}
                 <NavBar />
                    {/* <MyNavBar /> */}

            </Body>

        </div>
    )
}

export default test
