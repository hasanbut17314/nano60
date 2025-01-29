import React from 'react'
import heropic from "/hero.png"

const HeroSection = () => {
    return (
        <section className='flex lg:flex-row flex-col max-w-6xl mx-auto justify-between items-center py-5 xl:px-0 px-4'>
            <div className='flex flex-col space-y-3'>
                <h2 className='md:text-5xl text-3xl font-bold leading-snug heading'>
                    The Cutting Edge <span>Technology</span> For Removing <span>Nano-Toxins</span> From The <span>Body</span>
                </h2>
                <p>Neutralize heavy metals, plastics and other nanoparticles. Our proprietary blend of effective nutrients and plants is backed by clinical research.</p>
                <button className="inline-flex items-center px-6 py-2.5 rounded-full text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200 w-fit">Order Now</button>
            </div>
            <div>
                <img src={heropic} className='lg:max-w-full max-w-80' alt="" />
            </div>
        </section>
    )
}

export default HeroSection