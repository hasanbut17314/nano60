import React from 'react'
import Navbar from '../components/common/Navbar'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation()
    return (
        <>
            {location.pathname === '/' ? <Header /> : <Navbar />}
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout