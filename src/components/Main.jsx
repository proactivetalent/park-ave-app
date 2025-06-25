import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div className="intro w-full max-w-6xl px-4 sm:px-6 md:px-8 flex flex-col justify-center items-center m-auto">
            <h1 className='text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold w-full md:w-xl 2xl:w-2xl gradient-text pt-10 md:pt-20 text-center'>EXPERT SOLUTIONS FOR NYC'S ELECTRICAL NEEDS</h1>

            <div className="sep-line flex justify-center">
                <div className="w-full sm:w-[80vw] md:w-[35vw] h-[7px] bg-[var(--primary)] my-8 md:my-16"></div>
            </div>

            {/* Feature 1 */}
            <div className="f1 flex flex-col md:flex-row justify-evenly gap-6 md:gap-10 mb-10 w-full">
                <div className="right md:w-1/2 flex flex-col justify-center items-start">
                    <h1 className='text-xl sm:text-2xl md:text-4xl 2xl:text-5xl font-bold w-full md:w-96 gradient-text mb-2 uppercase'>Electrical Renovations</h1>
                    <h1 className='text-base sm:text-lg md:text-xl font-bold w-full md:w-80 text-[var(--primary)] mb-5'>Transform your space with code-compliant power solutions.</h1>
                    <p className='w-full md:w-md mb-3 font-medium'>We modernize NYC homes and businesses by replacing outdated wiring, upgrading panels, and designing systems tailored to renovated kitchens, baths, and living spaces. Our expertise in navigating plaster walls, pre-war infrastructure, and DOB permit requirements ensures your project meets strict city codes while delivering seamless, invisible power where you need it most. Future-proof your investment with safety-certified renovations.</p>
                </div>
                <div className="left relative md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
                    <img className="w-full max-w-xs md:max-w-md" src="/public/assets/home/f1.png" alt="" />
                </div>
            </div>

            {/* Feature 2 */}
            <div className="f2 flex flex-col md:flex-row justify-evenly gap-6 md:gap-10 mb-10 w-full">
                <div className="left relative md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
                    <img className="w-full max-w-xs md:max-w-md" src="/public/assets/home/f2.png" alt="" />
                </div>
                <div className="right md:w-1/2 flex flex-col justify-center items-start">
                    <h1 className='text-xl sm:text-2xl md:text-4xl 2xl:text-5xl font-bold w-full md:w-md gradient-text mb-2 uppercase'>Installations & upgrades</h1>
                    <h1 className='text-base sm:text-lg md:text-xl font-bold w-full md:w-80 text-[var(--primary)] mb-5'>Power the next generation of NYC living.</h1>
                    <p className='w-full md:w-md mb-3 font-medium'>From 200-Amp panel replacements in brownstones to EV charger setups and backup generators, we install robust electrical systems for modern demands. We handle complex load calculations, Con Edison coordination, and space-constrained installations – delivering energy-efficient lighting, smart home integrations, and dedicated circuits with precision. Upgrade confidently with NYC-licensed craftsmanship.</p>
                </div>
            </div>

            {/* Feature 3 */}
            <div className="f3 flex flex-col md:flex-row justify-evenly gap-6 md:gap-10 mb-10 w-full">
                <div className="right md:w-1/2 flex flex-col justify-center items-start">
                    <h1 className='text-xl sm:text-2xl md:text-4xl 2xl:text-5xl font-bold w-full md:w-96 gradient-text mb-2 uppercase'>Safety & Code Compliance</h1>
                    <h1 className='text-base sm:text-lg md:text-xl font-bold w-full md:w-80 text-[var(--primary)] mb-5'>Avoid violations. Prevent hazards. Protect lives.</h1>
                    <p className='w-full md:w-md mb-3 font-medium'>Don't risk fines or fires. Our certified electricians resolve NYC Electrical Code violations (ECB/DOB), install hardwired smoke/CO detectors per Local Law 157, and remediate knob-and-tube or aluminum wiring risks. From grounding repairs to emergency lighting inspections, we provide documentation-ready solutions that keep properties compliant and occupants safe.</p>
                </div>
                <div className="left relative md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
                    <img className="w-full max-w-xs md:max-w-md" src="/public/assets/home/f3.png" alt="" />
                </div>
            </div>

            {/* Feature 4 */}
            <div className="f4 flex flex-col md:flex-row justify-evenly gap-6 md:gap-10 mb-10 w-full">
                <div className="left relative md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
                    <img className="w-full max-w-xs md:max-w-md" src="/public/assets/home/f4.png" alt="" />
                </div>
                <div className="right md:w-1/2 flex flex-col justify-center items-start">
                    <h1 className='text-xl sm:text-2xl md:text-4xl 2xl:text-5xl font-bold w-full md:w-lg gradient-text mb-2'>TROUBLESHOOTING & REPAIRS</h1>
                    <h1 className='text-base sm:text-lg md:text-xl font-bold w-full md:w-80 text-[var(--primary)] mb-8'>Fast, reliable fixes for NYC's aging electrical systems.</h1>
                    <p className='w-full md:w-md mb-3 font-medium'>Flickering lights? Tripping breakers? We diagnose and repair urgent issues in apartments, offices, and historic buildings 24/7. Using thermal imaging and circuit analysis, we pinpoint hidden faults behind plaster walls or in crowded panels – restoring power safely while minimizing damage. Serving all boroughs with an emergency response.</p>
                </div>
            </div>

            <div className="sep-line flex justify-center ">
                <div className="w-full sm:w-[90vw] md:w-[70vw] h-[2px] bg-gray-400 my-8 md:my-16"></div>
            </div>
        </div>
    )
}

export default Main
