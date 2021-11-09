import React from 'react'
import {Footer,Navbar} from './'
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}