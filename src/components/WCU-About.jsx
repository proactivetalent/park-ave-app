import React from 'react'

const WCUAbout = () => {
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
                <img className='w-4 md:w-7 mt-1' src="src/assets/svgs/bullet-point.svg" alt="" />
                <span className='text-lg sm:text-2xl md:text-3xl font-bold gradient-text mb-3'>Knob-and-tube in brownstones.</span>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-400 p-4 flex items-center">
            <div className="g2 flex flex-col pl-0 md:pl-10">
              {/* <h1 className='text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] mb-3'>Safety-First Philosophy</h1> */}
              <div className="head flex items-start gap-3">
                <img className='w-4 md:w-7 mt-1' src="src/assets/svgs/bullet-point.svg" alt="" />
                <span className='text-lg sm:text-2xl md:text-3xl font-bold gradient-text mb-3'>DOB violations in high-rises.</span>
              </div>
            </div>
          </div>
          <div className=" md:border-r p-4 flex items-center">
            <div className="g3 flex flex-col pl-0 md:pl-10">
              {/* <h1 className='text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] mb-3'>Craftsmanship Guarantee</h1> */}
              <div className="head flex items-start gap-3">
                <img className='w-4 md:w-7 mt-1' src="src/assets/svgs/bullet-point.svg" alt="" />
                <span className='text-lg sm:text-2xl md:text-3xl font-bold gradient-text mb-3'>Generator installs meeting 42dB codes.</span>
              </div>
            </div>
          </div>
          <div className="p-4 flex items-center">
            <div className="g4 flex flex-col pl-0 md:pl-10">
              {/* <h1 className='text-lg sm:text-2xl md:text-3xl font-bold text-[var(--primary)] mb-3'>Respect for Your Time</h1> */}
              <div className="head flex items-start gap-3">
                <img className='w-4 md:w-7 mt-1' src="src/assets/svgs/bullet-point.svg" alt="" />
                <span className='text-lg sm:text-2xl md:text-3xl font-bold gradient-text mb-3'>EV chargers in tight garages.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WCUAbout
