import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

function Navbar() {
    const Nav = styled.div`
        width: 100% ;
        height: 170px;
        background-color:rgba(0,0,0,0.2);
        box-shadow: inset 0 0 0 3000px rgba(255,255,255,0.1);
        filter: blur(1px);
        position: fixed;
    `
    return (
        <Nav>
            <Link>
                <StaticImage
                    src="../images/gatsby-astronaut.png"
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="A Gatsby astronaut"
                    style={{ width:'20px', margin:'0 1rem 0 1rem'}}

                />
            </Link>
        </Nav>
    )
}

export default Navbar
