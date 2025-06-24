import React from 'react'
import { Link } from 'react-router-dom'

const HeroAbout = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20 lg:gap-44 md:pt-30 hero h-[100vh] bg-[url('/src/assets/hero-about.png')] bg-cover bg-center bg-no-repeat m-0 p-0 relative before:content-[''] before:absolute before:inset-0 px-4 md:px-0">
        <div className="flex flex-col items-center text relative z-10 text-white font-medium w-full md:w-auto text-center md:text-left px-2 md:px-0">
          <h1 className="relative z-10 text-2xl sm:text-4xl md:text-[64px] 2xl:text-[64px] font-bold text-white capitalize mb-4 md:mb-0">ABOUT PARK AVE</h1>
          <p className='relative z-10 text-white font-medium text-base sm:text-xl md:text-2xl text-center md:text-left mb-6 md:mb-10'>"We don’t just wire buildings – we protect the heartbeat of New York homes."
          </p>
          <p className='relative z-10 w-full md:w-2/3 text-white font-medium text-base sm:text-xl md:text-2xl text-center  mb-6'>NYC-Born. Safety-Driven. Your Trusted Electrical Partner. Licensed Master Electricians solving the city’s toughest wiring challenges – from pre-war brownstones to high-rise condos – with uncompromising integrity and NYC code mastery.</p>
          <Link to="/contact" className="inline-flex items-center bg-white font-bold text-[var(--primary)] border-0 py-2 px-6 md:px-9 focus:outline-none hover:bg-gray-300 rounded-lg text-base sm:text-xl md:text-[24px] mt-6">GET YOUR FREE QUOTE</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroAbout
