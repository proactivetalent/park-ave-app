import React from 'react'
import { Link } from 'react-router-dom'

const WhyChooseUs = () => {
  return (
    <div className='w-full max-w-6xl px-4 sm:px-6 md:px-8 m-auto'>
      <div className="feature3 flex flex-col items-center pt-10 pb-20 ">
        <h1 className='text-2xl sm:text-3xl md:text-5xl 2xl:text-5xl font-extrabold text-[var(--primary)] mb-2 text-center capitalize'>WHY CHOOSE US</h1>
        <h1 className='text-lg sm:text-xl md:text-2xl font-semibold mb-10 md:mb-20 text-center'>The NYC Electrical Contractor You Can Rely On</h1>

        <div className="grid-container grid grid-cols-1 md:grid-cols-2 grid-rows-6 md:grid-rows-3 w-full overflow-hidden">
          <div className="border-b md:border-r border-gray-400 p-4 flex items-center">
            <div className="g1 flex flex-col pl-0 md:pl-10">
              <h1 className='text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] mb-3'>Why Choose NYC-Specific Expertise</h1>
              <p className='mb-3 text-base sm:text-lg font-semibold'>Rigorous NEC compliance and OSHA-trained technicians.</p>
            </div>
          </div>
          <div className="border-b border-gray-400 p-4 flex items-center">
            <div className="g2 flex flex-col pl-0 md:pl-10">
              <h1 className='text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] mb-3'>Safety-First Philosophy</h1>
              <p className='mb-3 text-base sm:text-lg font-semibold'>Rigorous NEC compliance and OSHA-trained technicians.</p>
            </div>
          </div>
          <div className="border-b md:border-b border-gray-400 md:border-r p-4 flex items-center">
            <div className="g3 flex flex-col pl-0 md:pl-10">
              <h1 className='text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] mb-3'>Craftsmanship Guarantee</h1>
              <p className='mb-3 text-base sm:text-lg font-semibold'>Premium materials and precision workmanship, backed by a 5-year warranty.</p>
            </div>
          </div>
          <div className="border-b border-gray-400 p-4 flex items-center">
            <div className="g4 flex flex-col pl-0 md:pl-10">
              <h1 className='text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] mb-3'>Respect for Your Time</h1>
              <p className='mb-3 text-base sm:text-lg font-semibold'>On-schedule projects with minimal disruption to your home/business.</p>
            </div>
          </div>
          <div className="md:border-r border-gray-400 p-4 flex items-center">
            <div className="g5 flex flex-col pl-0 md:pl-10">
              <h1 className='text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] mb-3'>Spotless Worksite Policy</h1>
              <p className='mb-3 text-base sm:text-lg font-semibold'>We protect your space and leave it cleaner than we found it.</p>
            </div>
          </div>
          <div className="p-4 flex items-center">
            <div className="g6 flex flex-col pl-0 md:pl-10">
              <h1 className='text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] mb-3'>24/7 Emergency Response</h1>
              <p className='mb-3 text-base sm:text-lg font-semibold'>Manhattan to Staten Island—we're there when you need us most.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="icons-box w-full border-4 border-[var(--primary)] rounded-4xl m-auto flex flex-col md:flex-row justify-between flex-wrap py-8 px-4 md:px-10 lg:px-20 gap-6 md:gap-0">
        <div className="icon flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-5 mb-5 md:mb-0 w-full md:w-auto">
          <img className='w-20 md:w-28' src="/src/assets/satisfaction.png" alt="" />
          <h1 className='w-full md:w-80 text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] text-center md:text-left'>100% Satisfaction Guarantee</h1>
        </div>
        <div className="icon flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-5 mb-5 md:mb-0 w-full md:w-auto">
          <img className='w-20 md:w-28' src="/src/assets/technician.png" alt="" />
          <h1 className='w-full md:w-80 text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] text-center md:text-left'>Local Technicians You Can Trust</h1>
        </div>
        <div className="icon flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-5 w-full md:w-auto">
          <img className='w-20 md:w-28' src="/src/assets/straight.png" alt="" />
          <h1 className='w-full md:w-80 text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] text-center md:text-left'>Straight Forward Pricing®</h1>
        </div>
        <div className="icon flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-5 w-full md:w-auto">
          <img className='w-20 md:w-30' src="/src/assets/emergency.png" alt="" />
          <h1 className='w-full md:w-80 text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] text-center md:text-left'>24/7 Emergency Services</h1>
        </div>
      </div>

      <div className="f2 flex flex-col md:flex-row justify-evenly gap-8 md:gap-10 my-16 md:my-30 w-full items-center">
        <div className="left relative w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <img className="w-full max-w-xs md:max-w-md" src="/src/assets/location.png" alt="" />
        </div>
        <div className="right w-full md:w-1/2 mt-5 flex flex-col items-center md:items-start">
          <h1 className='text-2xl sm:text-3xl md:text-5xl 2xl:text-5xl font-extrabold w-full md:w-96 text-[var(--primary)] mb-2 capitalize text-center md:text-left'>SERVICE AREA</h1>
          <p className='text-base sm:text-lg md:text-2xl font-semibold mb-5 text-center md:text-left'>Proudly Powering All Five Boroughs</p>
          <ol className='text-base sm:text-lg md:text-2xl font-semibold list-decimal pl-6 md:pl-10 mb-6 text-center md:text-left'>
            <li>Manhattan</li>
            <li>Brooklyn</li>
            <li>Queens</li>
            <li>The Bronx</li>
            <li>Staten Island</li>
          </ol>
          <p className='text-base sm:text-lg md:text-2xl font-semibold mb-5 text-[var(--primary)] text-center md:text-left'>24/7 EMERGENCY ELECTRICAL SERVICE<br /> Dangerous sparks? Power outages?<br /> We dispatch NYC-certified technicians</p>
          <a href="tel:+16461234567" className="inline-flex items-center bg-[var(--primary)] font-semibold text-white border-0 py-3 px-8 md:py-4 md:px-14 focus:outline-none hover:bg-red-900 rounded-4xl text-lg md:text-2xl mt-4">Call Now: (646) 123-4567</a>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
