import React from 'react'
import { Link } from 'react-router-dom'

const HeroServices = () => {
    return (
        <div>
            <div className="flex justify-center gap-6 md:gap-44 md:pt-30 items-center hero h-[100vh] bg-[url('/public/assets/service/hero-services.png')] bg-cover bg-center bg-no-repeat m-0 p-0 relative before:content-[''] before:absolute before:inset-0">
                <div className="flex flex-col items-center text relative z-10 text-white font-medium text-sm md:text-lg">
                    <h1 className="relative z-10 text-2xl sm:text-4xl md:text-[64px] 2xl:text-[64px] font-bold text-white">OUR SERVICES</h1>
                    <p className='relative z-10 text-white w-full md:w-2/3 font-medium text-base sm:text-xl md:text-2xl text-center'>Expert Renovations & Installations Licensed Master Electricians Serving All 5 Boroughs. "Transforming outdated wiring into safe, code-compliant power systems for NYC homes and businesses.
                    </p>
                    <Link to="/contact" className="inline-flex items-center text-black font-bold gradient-button border-0 py-2 px-6 md:px-9 focus:outline-none rounded-lg text-base sm:text-xl md:text-[24px] mt-6 md:mt-6">GET YOUR FREE QUOTE</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroServices
