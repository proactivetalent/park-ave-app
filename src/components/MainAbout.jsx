import React from 'react'
import { Link } from 'react-router-dom'

const MainAbout = () => {
    return (
        <div className='main'>
            <div className="w-[85vw] m-auto f1 flex flex-col md:flex-row my-10 md:my-30 gap-7 px-4 md:px-0">
                <div className="left w-full md:w-auto flex justify-center items-center mb-6 md:mb-0">
                    <img className='w-full max-w-xs md:max-w-none h-auto' src="src/assets/about/a1.png" alt="" />
                </div>
                <div className="right w-full md:w-2/3 flex flex-col justify-center">
                    <div className="heading text-2xl sm:text-4xl md:text-5xl w-full md:w-lg gradient-text font-extrabold uppercase mb-2 md:mb-0">The Current That Drives Us</div>
                    <div className="sep-line flex justify-start">
                        <div className="w-1/2 md:w-[30vw] h-[4px] md:h-[7px] bg-[var(--primary)] my-3 md:my-5"></div>
                    </div>
                    <div className="desc text-base sm:text-lg md:text-xl font-semibold">
                        <p className='mb-4'>Reliability means more than showing up on time; it's navigating your co-op's 4-hour elevator window with military precision and holding emergency slots for critical situations. Quality manifests in every solder joint and conduit bend – we replace cloth-covered wiring foot-by-foot, never taking shortcuts that compromise longevity. Cleanliness is sacred in your home; we contain dust with ZipWall systems, remove debris daily, and leave spaces cleaner than we found them.</p>
                        <p>Communication demystifies the process: we translate DOB permits into plain English, provide real-time SMS updates, and document everything digitally. Respect is non-negotiable, from shoe covers on our boots to honoring noise-restricted hours in apartment buildings.</p>
                    </div>
                </div>
            </div>
            <div className="f2 bg-[#FCF0F0] py-10 md:py-15 text-center px-4 md:px-50">
                <h1 className='uppercase m-auto w-full md:w-md text-xl sm:text-2xl md:text-3xl font-extrabold gradient-text mb-5'>Mastering NYC's Unique Challenges</h1>
                <p className='text-base sm:text-lg md:text-xl font-semibold'>New York demands electricians who understand its soul: the plaster walls of historic brownstones, the labyrinth of DOB permits, and the space constraints of high-rise living. We specialize in solutions other contractors avoid. </p>
            </div>
            <div className="f3 flex flex-col md:flex-row w-full md:w-[80vw] justify-between gap-8 md:gap-15 m-auto pt-10 px-4 md:px-0">
                <div className="left w-full md:w-1/2 mb-6 md:mb-0">
                    <h1 className='uppercase w-full md:w-md text-xl sm:text-2xl md:text-3xl font-extrabold gradient-text mb-5'>Uncompromising Safety Commitment</h1>
                    <p className='text-base sm:text-lg md:text-xl font-semibold'>Safety isn't a policy at ParkAve Electrical – it's our culture. Every technician undergoes rigorous OSHA 30 training and annual NEC code updates, ensuring they spot hazards invisible to untrained eyes. We deploy thermal imaging scanners to detect hidden faults behind walls and implement three-stage quality checks on every project. Our adherence to NYC Fire Department and Department of Buildings standards has yielded a long time accident-free record and a 100% first-pass inspection rate. When emergencies strike, our trauma-trained teams respond within 90 minutes, equipped to protect lives and property.</p>
                </div>
                <div className="right w-full md:w-1/2 flex justify-center items-center">
                    <img className='w-full max-w-xs md:max-w-none h-auto' src="src/assets/about/a2.png" alt="" />
                </div>
            </div>
            <div className="f4 flex flex-col md:flex-row w-full md:w-[80vw] justify-between gap-8 md:gap-30 m-auto py-10 md:py-30 px-4 md:px-0">
                <div className="w-full">
                    <h1 className='uppercase w-full md:w-md text-xl sm:text-2xl md:text-3xl font-extrabold gradient-text mb-5'>Uncompromising Safety Commitment</h1>
                    <p className='text-base sm:text-lg md:text-xl font-semibold mb-5'>We solve what others can't:</p>
                    <ul className='pl-5 list-disc text-base sm:text-lg md:text-xl font-semibold mb-5'>
                        <li>Knob-and-tube in brownstones. </li>
                        <li>DOB violations in high-rises.</li>
                        <li>Generator installs meeting 42dB codes. </li>
                        <li>EV chargers in tight garages.</li>
                    </ul>
                    <p className='text-base sm:text-lg md:text-xl font-semibold'>For us, every wire tells a story – and every connection must honor this city's past while protecting its future.</p>
                </div>
            </div>
        </div>
    )
}

export default MainAbout
