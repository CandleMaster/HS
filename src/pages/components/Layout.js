import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import styled from 'styled-components';
// const Children= styled.div`
//   height: auto;
// `

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {/* <Children> */}

      {children}
      {/* </Children> */}
      <Footer />
    </>
  )
}