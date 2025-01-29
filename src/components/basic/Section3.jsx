import React from 'react'
import heropic from "/hero.png"
import { Link } from 'react-router-dom'

const Section3 = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse max-w-6xl mx-auto justify-between items-center py-5 xl:px-0 px-4'>
            <div className='flex flex-col space-y-3'>
                <p>That's why we created...</p>
                <h1 className='text-primary text-4xl font-bold'>Mu-60</h1>
                <h3 className='text-2xl font-semibold'>C60 Fullerenes, 24kt Colloidal Gold, and Himalayan Shilajit, suspended in organic avocado oil</h3>
                <h6 className='font-medium'>Mu-60 is unlike any other product on earth.</h6>
                <div className='text-sm flex flex-col gap-3'>
                    <p>Ours is the only product in the world specifically designed to neutralize and remove nanomaterial from the body, using exotic nutrients and plants.</p>
                    <p>Mu-60 naturally targets and destroys nanotoxins, which may be the root-cause of your unexplained fatigue, lack of focus, weakened immune system and joint inflammation.</p>
                    <p>Every decrease in toxic nanoparticles means a huge increase in metabolic health, fat burning, focus and energy levels!</p>
                </div>
                <Link to="/cart" className="inline-flex items-center px-6 py-2.5 rounded-full text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200 w-fit" style={{ marginTop: "1.5rem" }}>Order Now</Link>
            </div>
            <div>
                <img src={heropic} className='lg:max-w-full max-w-80' alt="" />
            </div>
        </div>
    )
}

export default Section3