import React from 'react'
import partners from "/partners.jpg"
import ProductDiagram from '../components/basic/ProductDiagram'
import Section3 from '../components/basic/Section3'
import ContaminationSection from '../components/basic/ContaminationSection'
import InfoCards from '../components/basic/InfoCards'
import BenefitsSection from '../components/basic/BenifitSection'
import Section7 from '../components/basic/Section7'
import FAQSection from '../components/basic/FAQSection'

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
            <section>
                <BenefitsSection />
            </section>
            <section>
                <Section7 />
            </section>
            <section>
                <FAQSection />
            </section>
        </main>
    )
}

export default Home