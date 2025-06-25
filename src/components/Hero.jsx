import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center overflow-hidden gap-6 md:gap-10 pt-10 md:pt-50 items-center hero h-[100vh] min-h-[600px] bg-[url('/src/assets/home/hero.png')] bg-cover bg-center bg-no-repeat m-0 p-0 relative before:content-[''] before:absolute before:inset-0 min-w-[100%]">
                <div className="img relative z-10 flex flex-col items-center md:items-start w-full md:w-auto mb-6 md:mb-0">
                    <img className="relative z-10 w-48 md:w-sm bottom-0 " src="/src/assets/home/hero-img.png" alt="" />
                </div>
                <div className="text relative z-10 text-white w-full md:w-[50vw] font-medium text-base md:text-lg px-4 md:px-0">
                    <h1 className="relative z-10 text-2xl sm:text-3xl md:text-5xl font-extrabold text-white text-center md:text-left">NYC's TRUSTED ELECTRICAL RENOVATION & INSTALLATION EXPERTS</h1>
                    <p className='leading-tight w-full mt-2 text-base sm:text-lg md:text-2xl text-center md:text-left'>Licensed Master Electricians Delivering Safety, Code Compliance & Precision Craftsmanship for Homes & Businesses
                    </p>
                    <Link to="/contact" className="inline-flex md:inline-flex items-center justify-center gradient-button font-bold text-black border-0 py-2 px-6 md:px-9 focus:outline-none rounded-lg text-lg md:text-2xl mt-4 w-full md:w-auto">GET YOUR FREE QUOTE
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
