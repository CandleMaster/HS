import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

function Navbar() {
    const Nav = styled.nav`
        width: 100vw;
        height: 4.5rem;
        background: rgb(255,200,124);
        background: linear-gradient(90deg, rgba(255,200,124,1) 0%, rgba(252,165,131,1) 100%);
        position: fixed;
        opacity: 90%;
        display: flex;
        align-content:space-around;
        vertical-align: center;
        transition:background 2s ease-in-out;
        z-index:999;
        :hover {
            opacity:100%;
        }
        :hover .NavLink{
            opacity: 1;
        }
        a{
            height:auto;
            padding: .5rem;
            display: grid;
            place-items: center;
            font-size: 1rem;
        }
    `

    const NavLink=styled(Link).attrs({className:"NavLink"})`
        color: white;
        text-decoration: none;
        line-height: 1.25rem;
        text-align:center;
        transition: opacity .3s ease-in-out, text-decoration .5s ease-in-out;
        opacity:0;
        font-weight: 400;
        display: grid;
        place-items: center;

    `
    const Hamburger = styled.div`
        height: 2.3rem;
        width:2.2rem;
        padding:.3rem 0;
        /* border:white solid;
        border-width:4px 0 4px 0; */
        position: relative;
    `
    const Line = styled.div`
        width: auto;
        height: 4px;
        border-radius: 99px;
        position: relative;
        top:${props=> props.top};
        background: white;

    `

    return (
        <Nav>
            <Link to="/">
                <StaticImage
                    src="../../images/logo/HS_logo_white.png"
                    objectFit="contain"
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="A Gatsby astronaut"
                    style={{ width:'1.5rem'}}
                />
            </Link>
            <NavLink to='/impact-brands'>impact brands</NavLink>
            <NavLink to='/ideas-hub' style={{display:'none'}}>ideas hub</NavLink>
            <NavLink to='/about-us'>about us</NavLink>
            <NavLink to='/agatonomy'>agatonomy</NavLink>
            <Link to='/'>
                <Hamburger>
                    <Line top="0.4rem"/>
                    <Line top="1rem" />
                </Hamburger>
            </Link>

        </Nav>
    )
}

export default Navbar

