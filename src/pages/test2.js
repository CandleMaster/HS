import React from 'react'
import styled from 'styled-components'

function test2() {
    const Body = styled.div`
        background: url(https://hdwallpapers.cat/wallpaper_mirror/purple_harmony_sky_mountains_sunset_nature_hd-wallpaper-1913939.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
    `
      
    const HashBody = styled.div`
        height: 64px;
        width: 100%;
        padding-right: 16px;
        margin-left: -8px;
        margin-top: -8px;
        transition: left 1.2s ease;
        background: inherit;
        /* filter */
        
        filter: blur(10px);
        -webkit-filter: blur(10px);
        -moz-filter: blur(15px);
        -o-filter: blur(15px);
        -ms-filter: blur(15px);
        z-index: 999;
    `
    const NavBar = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 64px;
        background: rgba(255,255,255,0.4);
        border-bottom: 1px solid rgba(225,225,225,0.5);
        z-index: 1000;
    `  
    return (
        <Body>
            <NavBar></NavBar>
            <HashBody />
        </Body>
    )
}

export default test2
