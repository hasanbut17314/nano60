import React from 'react'
import pic from "/7.png"
import partners from "/partners.jpg"
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const Section7 = () => {
    return (
        <div className='py-16 max-w-6xl mx-auto xl:px-0 px-4'>

            <div className='flex lg:flex-row flex-col-reverse gap-6 items-center justify-center'>
                <div className='flex flex-col gap-3'>
                    <div className='text-3xl sm:text-4xl font-semibold'>
                        <h3 className='text-green-500'>100% Satisfaction</h3>
                        <h3>180-Day Money Back <span className='text-primary'>Guarantee</span></h3>
                    </div>
                    <p>Your order today is protected by our iron-clad 180-day 100%
                        money-back guarantee. Within one week of use, you will be astonished by your new-found energy levels, and shocked by your enhanced focus and levels of concentration. If not, then let us know within 180 days and we'll refund every single penny you spent. No questions asked.</p>
                </div>
                <div>
                    <img src={pic} className='lg:min-w-60 lg:max-w-full max-w-60' alt="" />
                </div>
            </div>
            <div className='bg-white flex justify-center items-center py-6'>
                <img src={partners} className='sm:max-h-24 max-h-16' alt="" />
            </div>

            <div className="space-y-4 md:px-5 lg:px-8 py-16">
                {/* Free Shipping Banner */}
                <div className="bg-[#efeafa] rounded-2xl md:p-8 p-5 flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Every 6 Bottle Order Gets FREE Shipping!</h2>
                        <p className="text-gray-600">*96% of customers order 6 bottles (Our recommended option)</p>
                    </div>
                    <Link to="/cart" className="mt-4 md:mt-0 bg-[#813bb7] text-white px-8 py-3 rounded-full hover:bg-[#813bb7]/90 transition-colors">
                        Order Now
                    </Link>
                </div>

                {/* Stock Up Banner */}
                <div className="bg-[#6f4cce] rounded-2xl md:p-8 p-5 flex flex-col md:flex-row justify-between items-center">
                    <h2 className="text-2xl font-semibold text-white mb-4 md:mb-0">
                        Stock Up On Mu-60 For Your Family While Supplies Last
                    </h2>
                    <Link to="/cart" className="border-2 border-white text-white md:px-8 px-5 py-3 rounded-full hover:bg-white hover:text-[#6f4cce] transition-colors">
                        Order Now
                    </Link>
                </div>

                {/* Reviews Banner */}
                <div className="bg-[#53d2ff] rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-bold">Our customers say</h2>
                    <div className='my-2'>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="inline-block text-white" />
                        ))}
                    </div>
                    <p className="text-lg">based on 100,000+ reviews!</p>
                </div>
            </div>

        </div>
    )
}

export default Section7