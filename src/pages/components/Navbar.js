import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

function Navbar() {
    const Nav = styled.nav`
        width: 100% ;
        height: 5rem;
        background: rgb(255,200,124);
        background: linear-gradient(90deg, rgba(255,200,124,1) 0%, rgba(252,165,131,1) 100%);
        position: fixed;
        opacity: 90%;
        display: flex;
        align-items:stretch;
        vertical-align: center;
        z-index:999;
        transition:background 2s ease-in-out;
        &:hover{
            .NavLink{
                opacity:100%;
            }
        }
        a{
            height:auto;
            flex-grow:1;
            padding: 1rem;
            display: grid;
            place-items: center;
        }
    `

    const NavLink=styled(Link).attrs({className:"NavLink"})`
        flex-grow:2;
        color: white;
        text-decoration: none;
        transition: opacity .3s ease-in-out;
        opacity:0;
    `
    const Hamburger = styled.div`
        height: .7rem;
        width:2rem;
        border:white solid;
        border-width:2px 0 2px 0;
    `
    return (
        <Nav>
            <Link to="https://cssgradient.io/">
                <StaticImage
                    src="../../images/logo/HS_logo_white.png"
                    objectFit="contain"
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="A Gatsby astronaut"
                    style={{ width:'1.6rem'}}
                />
            </Link>
            <NavLink to='/impact-brands'>impact brands</NavLink>
            <NavLink to='/ideas-hub'>ideas hub</NavLink>
            <NavLink to='/agatonomy'>agatonomy</NavLink>
            <NavLink to='/about-us'>about us</NavLink>
            <Link to='/'>
                <Hamburger>
                    <div />
                    <div />
                </Hamburger>
            </Link>

        </Nav>
    )
}

export default Navbar
