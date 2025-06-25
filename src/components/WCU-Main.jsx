import React from 'react'

const WCUMain = () => {
  return (
    <div className='w-full max-w-6xl px-4 sm:px-6 md:px-8 m-auto'>
      <div className="feature3 flex flex-col items-center pt-10 pb-20 ">
        <h1 className='text-2xl sm:text-3xl md:text-5xl 2xl:text-5xl font-extrabold gradient-text mb-2 text-center capitalize'>WHY CHOOSE US</h1>
        <h1 className='text-lg sm:text-xl md:text-2xl font-semibold mb-10 md:mb-20 text-center'>The NYC Electrical Contractor You Can Rely On</h1>


        <div className="grid-container grid grid-cols-1 md:grid-cols-2 grid-rows-6 md:grid-rows-3 w-full overflow-hidden">
          <div className="border-b md:border-r border-gray-400 p-4 flex items-center">
            <div className="g1 flex flex-col pl-0 md:pl-10">
              {/* <h1 className='text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] mb-3'>Why Choose NYC-Specific Expertise</h1> */}
              <div className="head flex items-start gap-3">
                <img className='w-4 md:w-7 mt-1' src="public/assets/svgs/bullet-point.svg" alt="" />
                <span className='text-lg sm:text-2xl md:text-3xl font-bold gradient-text mb-3'>Why Choose NYC-Specific Expertise</span>
              </div>
              <p className='mb-3 md:ml-10 text-base sm:text-lg font-semibold'>Deep knowledge of pre-war wiring, DOB permits, and borough-specific codes.</p>
            </div>
          </div>
          <div className="border-b border-gray-400 p-4 flex items-center">
            <div className="g2 flex flex-col pl-0 md:pl-10">
              {/* <h1 className='text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] mb-3'>Safety-First Philosophy</h1> */}
              <div className="head flex items-start gap-3">
                <img className='w-4 md:w-7 mt-1' src="public/assets/svgs/bullet-point.svg" alt="" />
                <span className='text-lg sm:text-2xl md:text-3xl font-bold gradient-text mb-3'>Safety-First Philosophy</span>
              </div>
              <p className='mb-3 md:ml-10 text-base sm:text-lg font-semibold'>Rigorous NEC compliance and OSHA-trained technicians.</p>
            </div>
          </div>
          <div className="border-b md:border-b border-gray-400 md:border-r p-4 flex items-center">
            <div className="g3 flex flex-col pl-0 md:pl-10">
              {/* <h1 className='text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] mb-3'>Craftsmanship Guarantee</h1> */}
              <div className="head flex items-start gap-3">
                <img className='w-4 md:w-7 mt-1' src="public/assets/svgs/bullet-point.svg" alt="" />
                <span className='text-lg sm:text-2xl md:text-3xl font-bold gradient-text mb-3'>Craftsmanship Guarantee</span>
              </div>
              <p className='mb-3 md:ml-10 text-base sm:text-lg font-semibold'>Premium materials and precision workmanship, backed by a 5-year warranty.</p>
            </div>
          </div>
          <div className="border-b border-gray-400 p-4 flex items-center">
            <div className="g4 flex flex-col pl-0 md:pl-10">
              {/* <h1 className='text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] mb-3'>Respect for Your Time</h1> */}
              <div className="head flex items-start gap-3">
                <img className='w-4 md:w-7 mt-1' src="public/assets/svgs/bullet-point.svg" alt="" />
                <span className='text-lg sm:text-2xl md:text-3xl font-bold gradient-text mb-3'>Respect for Your Time</span>
              </div>
              <p className='mb-3 md:ml-10 text-base sm:text-lg font-semibold'>On-schedule projects with minimal disruption to your home/business.</p>
            </div>
          </div>
          <div className="md:border-r border-gray-400 p-4 flex items-center">
            <div className="g5 flex flex-col pl-0 md:pl-10">
              {/* <h1 className='text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] mb-3'>Spotless Worksite Policy</h1> */}
              <div className="head flex items-start gap-3">
                <img className='w-4 md:w-7 mt-1' src="public/assets/svgs/bullet-point.svg" alt="" />
                <span className='text-lg sm:text-2xl md:text-3xl font-bold gradient-text mb-3'>Spotless Worksite Policy</span>
              </div>
              <p className='mb-3 md:ml-10 text-base sm:text-lg font-semibold'>We protect your space and leave it cleaner than we found it.</p>
            </div>
          </div>
          <div className="p-4 flex items-center">
            <div className="g6 flex flex-col pl-0 md:pl-10">
              {/* <h1 className='text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] mb-3'>24/7 Emergency Response</h1> */}
              <div className="head flex items-start gap-3">
                <img className='w-4 md:w-7 mt-1' src="public/assets/svgs/bullet-point.svg" alt="" />
                <span className='text-lg sm:text-2xl md:text-3xl font-bold gradient-text mb-3'>24/7 Emergency Response</span>
              </div>
              <p className='mb-3 md:ml-10 text-base sm:text-lg font-semibold'>Manhattan to Staten Island—we're there when you need us most.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WCUMain
