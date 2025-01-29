import React from 'react'
import partners from "/partners.jpg"
import ProductDiagram from '../components/basic/ProductDiagram'
import Section3 from '../components/basic/Section3'
import ContaminationSection from '../components/basic/ContaminationSection'
import InfoCards from '../components/basic/InfoCards'

const Home = () => {
    return (
        <main>
            <div className='bg-white flex justify-center items-center py-6'>
                <img src={partners} className='sm:max-h-24 max-h-16' alt="" />
            </div>
            <section>
                <ProductDiagram />
            </section>
            <section>
                <Section3 />
            </section>
            <section>
                <ContaminationSection />
            </section>
            <section>
                <InfoCards />
            </section>
        </main>
    )
}

export default Home