import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

function Navbar() {
    const Nav = styled.nav`
        width: 100% ;
        height: 6rem;
        background: rgb(255,200,124);
        background: linear-gradient(90deg, rgba(255,200,124,1) 0%, rgba(252,165,131,1) 100%);
        position: fixed;
        opacity: 90%;
        display: flex;
        align-items:stretch;
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
            padding: 1rem;
            display: grid;
            place-items: center;
            font-size: 1.25rem;
        }
    `

    const NavLink=styled(Link).attrs({className:"NavLink"})`
        color: white;
        text-decoration: none;
        line-height: 1.5rem;
        text-align:center;
        transition: opacity .3s ease-in-out, text-decoration .5s ease-in-out;
        opacity:0;
        /* transition:; */
        /* :hover{
            text-decoration:underline;
            color:white;
        } */
    `
    const Hamburger = styled.div`
        height: 1rem;
        width:2.2rem;
        border:white solid;
        border-width:4px 0 4px 0;
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
                    style={{ width:'1.8rem'}}
                />
            </Link>
            <NavLink to='/impact-brands'>impact brands</NavLink>
            <NavLink to='/ideas-hub' style={{display:'none'}}>ideas hub</NavLink>
            <NavLink to='/about-us'>about us</NavLink>
            <NavLink to='/agatonomy'>agatonomy</NavLink>
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
