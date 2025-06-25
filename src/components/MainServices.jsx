import React from 'react'
import { Link } from 'react-router-dom'

const MainServices = () => {
    return (
        <div className='w-full'>
            <div className="electrical flex flex-col md:flex-row w-full md:w-[80vw] m-auto mt-10 px-4">
                <div className="img w-full md:w-[50vw] flex flex-col items-center justify-center mb-6 md:mb-0">
                    <img className="w-full md:w-auto max-w-xs md:max-w-none" src="/assets/service/services-icon.png" alt="" />
                    <button className='w-full md:w-lg mt-4 px-8 py-4 border-2 rounded-[100px] border-black text-2xl md:text-[40px] font-extrabold gradient-text'>KEY SERVICES</button>
                </div>
                <div className="desc w-full md:w-[50vw] flex flex-col justify-center">
                    <div className="heading mt-8 md:mt-20">
                        <h1 className='text-2xl sm:text-3xl md:text-[48px] font-extrabold gradient-text uppercase'>What We Offer</h1>
                        <div className="sep-line flex justify-start ">
                            <div className="w-1/2 md:w-[20vw] h-[4px] bg-[var(--primary)]"></div>
                        </div>
                        <h2 className='text-xl sm:text-2xl md:text-[40px] font-extrabold gradient-text mt-4 uppercase'>Electrical Renovations</h2>
                        <p className='text-base sm:text-lg md:text-[20px] font-semibold mt-2'>Transform your NYC space with code-compliant electrical solutions designed for historic brownstones and modern apartments alike. Our licensed team specializes in complex renovations requiring NYC DOB permit expertise and preservation-sensitive approaches.</p>
                    </div>
                    <div className="features mt-8 md:mt-12">
                        <ol className='list-none space-y-4'>
                            <li className='flex items-start gap-2'>
                                <img className='w-5 mt-1' src="/assets/bullet-point.svg" alt="" />
                                <span className='text-base sm:text-lg md:text-[20px] font-semibold'><span className='font-bold italic text-[var(--primary)]'>Kitchen Remodels:</span> GFCI circuits for appliances, under-cabinet lighting, and dedicated outlets</span></li>
                            <li className='flex items-start gap-2'>
                                <img className='w-5 mt-1' src="/assets/bullet-point.svg" alt="" />
                                <span className='text-base sm:text-lg md:text-[20px] font-semibold'><span className='font-bold italic text-[var(--primary)]'>Bathroom Renovations:</span> Waterproof fixtures, heated floor wiring, and ventilation systems</span></li>
                            <li className='flex items-start gap-2'>
                                <img className='w-5 mt-1' src="/assets/bullet-point.svg" alt="" />
                                <span className='text-base sm:text-lg md:text-[20px] font-semibold'><span className='font-bold italic text-[var(--primary)]'>Historic Home Upgrades:</span> Knob-and-tube replacement meeting Landmarks Preservation standards</span></li>
                            <li className='flex items-start gap-2'>
                                <img className='w-5 mt-1' src="/assets/bullet-point.svg" alt="" />
                                <span className='text-base sm:text-lg md:text-[20px] font-semibold'><span className='font-bold italic text-[var(--primary)]'>Whole-Home Rewiring:</span> Aluminum/cloth-wire remediation for pre-war buildings</span></li>
                            <li className='flex items-start gap-2'>
                                <img className='w-5 mt-1' src="/assets/bullet-point.svg" alt="" />
                                <span className='text-base sm:text-lg md:text-[20px] font-semibold'><span className='font-bold italic text-[var(--primary)]'>Basement Conversions:</span> Egress lighting and moisture-resistant installations</span></li>
                        </ol>
                        <p className='mt-5 text-base sm:text-lg md:text-[20px] font-semibold text-[var(--primary)]'>We navigate NTC's Unique plaster walls, co-op board requirements, and tight spaces with precision</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-10 md:my-20 px-4">
                <Link to="/contact" className="w-full md:w-auto inline-flex items-center justify-center gradient-button font-bold text-lg md:text-[24px] text-white border-0 py-2 px-6 md:px-9 focus:outline-none rounded-lg mt-4 md:mt-4 text-center">Transform Your Space with Complimentary Consultation</Link>
            </div>

            <div className="installation w-full bg-[url('/assets/service/bg-services.png')] bg-cover bg-center bg-no-repeat m-0 p-0 relative before:content-[''] before:absolute before:inset-0">
                <div className="heading text-center m-auto w-full md:w-[80vw] px-4 md:px-0 pt-10">
                    <h1 className='text-2xl sm:text-3xl md:text-[40px] font-extrabold text-white py-6 md:py-10 capitalize'>INSTALLATIONS & UPGRADES</h1>
                    <p className='text-base sm:text-lg md:text-[20px] font-semibold text-white'>Power your NYC lifestyle with modern electrical systems built for safety and performance. From EV chargers to smart panels, we ensure your upgrades meet strict city codes.</p>
                </div>
                <div className="content w-full md:w-[80vw] flex flex-col md:flex-row m-auto my-8 md:my-10 gap-8 md:gap-0 px-4 md:px-0">
                    <div className="left w-full md:w-1/2">
                        <ol className='list-none text-white space-y-6'>
                            <li>
                                <div className="head flex items-start gap-2">
                                    <img className='w-5 mt-1' src="/assets/svgs/triangle.svg" alt="" />
                                    <span className='text-lg md:text-[24px] font-bold'>Panel Replacements:</span>
                                </div>
                                <p className='text-base md:text-[20px] font-semibold text-white w-full md:w-md'>200-Amp service for older buildings (fuse-to-breaker conversions)</p>
                            </li>
                            <li>
                                <div className="head flex items-start gap-2">
                                    <img className='w-5 mt-1' src="/assets/svgs/triangle.svg" alt="" />
                                    <span className='text-lg md:text-[24px] font-bold'>EV Chargers:</span>
                                </div>
                                <p className='text-base md:text-[20px] font-semibold text-white w-full md:w-md'>Level 2 installations with Con Edison rebate filing</p>
                            </li>
                            <li>
                                <div className="head flex items-start gap-2">
                                    <img className='w-5 mt-1' src="/assets/svgs/triangle.svg" alt="" />
                                    <span className='text-lg md:text-[24px] font-bold'>Backup Generators:</span>
                                </div>
                                <p className='text-base md:text-[20px] font-semibold text-white w-full md:w-md'>Storm-proof solutions with automatic transfer switches</p>
                            </li>
                            <li>
                                <div className="head flex items-start gap-2">
                                    <img className='w-5 mt-1' src="/assets/svgs/triangle.svg" alt="" />
                                    <span className='text-lg md:text-[24px] font-bold'>Recessed Lighting:</span>
                                </div>
                                <p className='text-base md:text-[20px] font-semibold text-white w-full md:w-md'>IC-rated fixtures for low plaster ceilings</p>
                            </li>
                            <li>
                                <div className="head flex items-start gap-2">
                                    <img className='w-5 mt-1' src="/assets/svgs/triangle.svg" alt="" />
                                    <span className='text-lg md:text-[24px] font-bold'>Dedicated Circuits:</span>
                                </div>
                                <p className='text-base md:text-[20px] font-semibold text-white w-full md:w-md'>For HVAC systems and high-demand appliances</p>
                            </li>
                        </ol>
                    </div>
                    <div className="right w-full md:w-1/2 flex flex-col justify-center items-center gap-5 mt-8 md:mt-0">
                        <img className='w-full md:w-md max-w-xs md:max-w-none' src="/assets/service/s1.png" alt="" />
                        <p className='text-base md:text-[20px] font-semibold text-white text-center'>"70% of NYC electrical fires originate in outdated panels. Protect your property today."</p>
                        <Link to="/contact" className="w-full md:w-auto inline-flex items-center justify-center bg-white font-bold text-base md:text-[20px] text-black border-0 py-2 px-6 md:px-9 focus:outline-none hover:bg-gray-300 rounded-lg mt-4 md:mt-4 text-center">Schedule Your Safety Upgrade Assessment</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainServices
