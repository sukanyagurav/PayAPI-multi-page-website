import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
  <>
    <Header />
    <main>
        
        <Outlet/>
    </main>
    <footer>
        footer
    </footer>
  </>
  )
}

export default RootLayout
