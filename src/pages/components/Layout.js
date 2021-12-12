import React from 'react'
import {Footer,Navbar} from './'
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