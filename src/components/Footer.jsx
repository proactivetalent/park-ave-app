import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="text-white body-font bg-black">
                <div className="top flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0 py-10 px-4 md:p-16">
                    <div className="logo mb-4 md:mb-0 flex justify-center md:justify-start w-full md:w-auto">
                        <img src="/assets/logo/logo.svg" alt="" className="w-32 md:w-48" />
                    </div>
                    <div className="CTAs flex flex-col items-center md:items-start mb-4 md:mb-0 w-full md:w-auto">
                        <NavLink to="/" className={({ isActive }) =>
                            "mb-2 md:mb-0 md:mr-8 font-semibold text-[16px] text-white cursor-pointer transition-transform duration-300 hover:scale-110" +
                            (isActive ? " underline decoration-2 underline-offset-8" : "")
                        }>Home</NavLink>
                        <NavLink to="/services" className={({ isActive }) =>
                            "mb-2 md:mb-0 md:mr-8 font-semibold text-[16px] text-white cursor-pointer transition-transform duration-300 hover:scale-110" +
                            (isActive ? " underline decoration-2 underline-offset-8" : "")
                        }>Services</NavLink>
                        <NavLink to="/about" className={({ isActive }) =>
                            "mb-2 md:mb-0 md:mr-8 font-semibold text-[16px] text-white cursor-pointer transition-transform duration-300 hover:scale-110" +
                            (isActive ? " underline decoration-2 underline-offset-8" : "")
                        }>About us</NavLink>
                        <NavLink to="/contact" className={({ isActive }) =>
                            "mb-2 md:mb-0 md:mr-8 font-semibold text-[16px] text-white cursor-pointer transition-transform duration-300 hover:scale-110" +
                            (isActive ? " underline decoration-2 underline-offset-8" : "")
                        }>Contact us</NavLink>
                    </div>
                    <div className="info flex flex-col items-center md:items-start mb-4 md:mb-0 w-full md:w-auto">
                        {/* <span className='font-semibold text-[16px]'>+1 (212) 832-3109</span> */}
                        <a href="tel:+12128323109" className="font-semibold text-[16px]">+1 (212) 832-3109</a>
                        <a href="mailto:info@parkaveelectrical.com" className="font-semibold text-[16px]">info@parkaveelectrical.com</a>
                        {/* <span className='font-semibold text-[16px]'>info@parkaveelectrical.com</span> */}
                        <span className='font-semibold text-[16px]'>parkavaelectrical.com</span>
                        <span className='font-semibold text-[16px] text-center md:text-left'>2 Park Ave 29th Fl, New York, NY 10016</span>
                    </div>
                    <div className="icons flex gap-3 justify-center md:justify-start w-full md:w-auto">
                        <img className='w-10 md:w-12' src="/assets/svgs/Instagram.svg" alt="" />
                        <img className='w-10 md:w-12' src="/assets/svgs/Facebook.svg" alt="" />
                        <img className='w-10 md:w-12' src="/assets/svgs/Pinterest.svg" alt="" />
                        <img className='w-10 md:w-12' src="/assets/svgs/X.svg" alt="" />
                    </div>
                </div>

                <div className="sep-line flex justify-center ">
                    <div className="w-full md:w-[80vw] h-[1px] bg-gray-400"></div>
                </div>

                <div className="footer-end flex flex-col md:flex-row justify-between items-center py-8 md:py-16 px-4 md:px-16 gap-4 md:gap-0">
                    <div className="left text-gray-300 text-center md:text-left">© 2025 Park AVA Electrical . All rights reserved</div>
                    <div className="right text-gray-300 flex flex-col md:flex-row gap-2 md:gap-5 text-center md:text-left">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Cookie Policy</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
