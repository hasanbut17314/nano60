import React from 'react'
import polution from "/polution.jpg"
import ComparisonSection from '../components/basic/ComparisonSection'

const About = () => {
    return (
        <div className='max-w-6xl mx-auto xl:px-0 px-4'>

            <div className="relative my-5">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${polution})`,
                    }}
                >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end md:p-8 p-5 lg:p-16">
                    <div className="text-white space-y-4 md:min-h-80">
                        <p className="text-gray-200 mb-4 sm:text-base text-xs">Scientific References Continually Updated - September 2024</p>

                        <h1 className="sm:text-4xl text-2xl font-bold leading-tight md:w-[90%] lg:w-[85%] 2xl:w-[69%]">
                            Our World Is Contaminated With Nanoparticles, And So Is Your Body
                        </h1>

                        <p className="text-sm sm:text-xl text-gray-200">(Hint It's Not Just Pollution)</p>
                    </div>
                </div>
            </div>
            <div>
                <p>Are you struggling to stay focused, no matter how much sleep you get? Do you have trouble remembering simple things? Do your joints and muscles ache, especially in the morning? Do you struggle to lose weight, despite trying a series of fad diets and exercise routines? And how many coughs and colds has your family endured, even while protecting yourself with masks and sanitizer? Turns out, it's not your fault.</p>
            </div>

            <div>
                <ComparisonSection />
            </div>

        </div>
    )
}

export default About