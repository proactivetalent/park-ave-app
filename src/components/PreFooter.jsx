import React from 'react'
import { Link } from 'react-router-dom'

const PreFooter = () => {
  return (
    <div className='w-full max-w-6xl px-4 sm:px-6 md:px-8 m-auto'>
      
      <div className="icons-box w-full border-3 border-black rounded-4xl m-auto flex flex-col md:flex-row justify-between flex-wrap py-8 px-4 md:px-10 lg:px-20 gap-6 md:gap-2">
        <div className="icon flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-5 mb-5 md:mb-0 w-full md:w-auto">
          <img className='w-20 md:w-28' src="/public/assets/whychooseus/emergency.svg" alt="" />
          <h1 className='w-full md:w-80 text-lg sm:text-2xl md:text-3xl font-bold gradient-text text-center md:text-left'>100% Satisfaction Guarantee</h1>
        </div>
        <div className="icon flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-5 mb-5 md:mb-0 w-full md:w-auto">
          <img className='w-20 md:w-28' src="/public/assets/whychooseus/technical.svg" alt="" />
          <h1 className='w-full md:w-80 text-lg sm:text-2xl md:text-3xl font-bold gradient-text text-center md:text-left'>Local Technicians You Can Trust</h1>
        </div>
        <div className="icon flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-5 w-full md:w-auto">
          <img className='w-20 md:w-28' src="/public/assets/whychooseus/straightforward.svg" alt="" />
          <h1 className='w-full md:w-80 text-lg sm:text-2xl md:text-3xl font-bold gradient-text text-center md:text-left'>Straight Forward Pricing®</h1>
        </div>
        <div className="icon flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-5 w-full md:w-auto">
          <img className='w-20 md:w-28' src="/public/assets/whychooseus/emergency.svg" alt="" />
          <h1 className='w-full md:w-80 text-lg sm:text-2xl md:text-3xl font-bold gradient-text text-center md:text-left'>24/7 Emergency Services</h1>
        </div>
      </div>

      <div className="f2 flex flex-col md:flex-row justify-evenly gap-8 md:gap-10 my-16 md:my-30 w-full items-center">
        <div className="left relative w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <img className="w-full max-w-xs md:max-w-md" src="/public/assets/whychooseus/map.png" alt="" />
        </div>
        <div className="right w-full md:w-1/2 mt-5 flex flex-col items-center md:items-start">
          <h1 className='text-2xl sm:text-3xl md:text-5xl 2xl:text-5xl font-extrabold w-full md:w-96 gradient-text mb-2 capitalize text-center md:text-left'>SERVICE AREA</h1>
          <p className='text-base sm:text-lg md:text-2xl font-semibold mb-5 text-center md:text-left'>Proudly Powering All Five Boroughs</p>
          <ol className='text-base sm:text-lg md:text-2xl font-semibold list-decimal pl-6 md:pl-10 mb-6 text-center md:text-left'>
            <li>Manhattan</li>
            <li>Brooklyn</li>
            <li>Queens</li>
            <li>The Bronx</li>
            <li>Staten Island</li>
          </ol>
          <p className='text-base sm:text-lg md:text-2xl font-semibold mb-5 text-[var(--primary)] text-center md:text-left'>24/7 EMERGENCY ELECTRICAL SERVICE<br /> Dangerous sparks? Power outages?<br /> We dispatch NYC-certified technicians</p>
          <a href="tel:+16461234567" className="inline-flex items-center gradient-button font-semibold text-white border-0 py-3 px-8 md:py-4 md:px-14 focus:outline-none rounded-4xl text-lg md:text-2xl mt-4">Call Now: (646) 123-4567</a>
        </div>
      </div>
    </div>
  )
}

export default PreFooter
