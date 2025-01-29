import React from 'react'
import partners from "/partners.jpg"

const Home = () => {
    return (
        <main>
            <div className='bg-white flex justify-center items-center py-6'>
                <img src={partners} className='sm:max-h-24 max-h-16' alt="" />
            </div>
        </main>
    )
}

export default Home