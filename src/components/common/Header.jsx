import React from 'react'
import Navbar from './Navbar'
import HeroSection from '../basic/HeroSection'

const Header = () => {
    return (
        <header className='bg-[url("/herobg.png")] min-h-[95vh] bg-no-repeat bg-cover bg-center'>
            <Navbar />
            <HeroSection />
        </header>
    )
}

export default Header