import React from 'react'
import { Link } from 'react-router-dom'

const FeaturesServices = () => {
  return (
    <div>
      <div className="safety w-full max-w-6xl px-4 m-auto">
        <h1 className='uppercase text-center text-2xl sm:text-4xl md:text-5xl font-extrabold gradient-text py-6 md:py-10'>Safety & Code Compliance</h1>
        <p className='text-center text-base sm:text-xl md:text-2xl font-semibold'>Avoid violations and hazards with NYC's most trusted electrical compliance experts. We resolve DOB/ECB violations and implement life-saving protections required by Local Laws.</p>
        <div className="content flex flex-col md:flex-row mt-8 md:mt-10 gap-6 md:gap-0">
          <div className="left w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
            <img className="w-full max-w-xs md:max-w-none" src="public/assets/service/safety.png" alt="" />
          </div>
          <div className="right w-full md:w-2/3 flex flex-col gap-5 md:ml-10">
            <h2 className='text-lg sm:text-xl md:text-2xl font-bold gradient-text'>Critical Safety Services:</h2>
            <ul className='text-base sm:text-xl md:text-2xl font-semibold'>
              <li className='mb-3 md:mb-5'>- Fire hazard inspections (pre-purchase/insurance)</li>
              <li className='mb-3 md:mb-5'>- Smoke/CO detector installations (LL157 compliance)</li>
              <li className='mb-3 md:mb-5'>- Grounding repairs for ungrounded pre-war systems</li>
              <li className='mb-3 md:mb-5'>- GFCI/AFCI outlet retrofits</li>
              <li className='mb-3 md:mb-5'>- Emergency egress lighting for multifamily buildings</li>
            </ul>
          </div>
        </div>
        <div className="bottom text-center mt-8 md:mt-10">
          <p className='text-base sm:text-xl md:text-2xl font-semibold w-full md:w-[60vw] m-auto gradient-text'>"Our violation correction rate: 100% first-pass approval with NYC Department of Buildings."</p>
          <Link to="/contact" className="inline-flex items-center gradient-button font-bold text-base md:text-[20px] text-white border-0 py-2 px-6 md:px-9 focus:outline-none rounded-lg mt-4 md:mt-4">Request Code Compliance Audit</Link>
        </div>
        <div className="sep-line flex justify-center ">
          <div className="w-full md:w-[50vw] h-[2px] bg-[var(--primary)] my-8 md:my-16"></div>
        </div>
      </div>

      <div className="troubleshooting w-full max-w-6xl px-4 m-auto">
        <h1 className='uppercase text-center text-2xl sm:text-4xl md:text-5xl font-extrabold gradient-text py-6 md:py-10'>Troubleshooting & Repairs&nbsp;</h1>
        <p className='text-center text-base sm:text-xl md:text-2xl font-semibold'>24/7 emergency solutions for NYC's aging infrastructure. We diagnose hidden faults in historic walls and crowded panels using thermal imaging technology.</p>
        <div className="content flex flex-col md:flex-row mt-8 md:mt-10 gap-6 md:gap-0">
          <div className="left w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
            <img className="w-full max-w-xs md:max-w-none" src="public/assets/service/troubleshooting.png" alt="" />
          </div>
          <div className="right w-full md:w-2/3 flex flex-col gap-5 md:ml-10">
            <h2 className='text-lg sm:text-xl md:text-2xl font-bold gradient-text'>Immediate Repair Needs:</h2>
            <ul className='text-base sm:text-xl md:text-2xl font-semibold'>
              <li className='mb-3 md:mb-5'>- Flickering lights from aluminum wiring degradation</li>
              <li className='mb-3 md:mb-5'>- Dead outlets behind plaster-and-lath walls</li>
              <li className='mb-3 md:mb-5'>- Constantly tripping breakers</li>
              <li className='mb-3 md:mb-5'>- Burning smells at service panels</li>
              <li className='mb-3 md:mb-5'>- Post-flood electrical hazards</li>
            </ul>
          </div>
        </div>
        <div className="bottom text-center mt-8 md:mt-10">
          <p className='text-base sm:text-xl md:text-2xl font-semibold w-full md:w-[60vw] m-auto gradient-text'>"Our violation correction rate: 100% first-pass approval with NYC Department of Buildings."</p>
          <Link to="/contact" className="inline-flex items-center gradient-button font-bold text-base md:text-[20px] text-white border-0 py-2 px-6 md:px-9 focus:outline-none rounded-lg mt-4 md:mt-4">Call Now for Emergency Repair</Link>
        </div>
        <div className="sep-line flex justify-center ">
          <div className="w-full md:w-[50vw] h-[2px] bg-[var(--primary)] my-8 md:my-16"></div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesServices
