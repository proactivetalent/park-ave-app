import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 50) {
                setShow(false); // Hide on scroll down
            } else {
                setShow(true); // Show on scroll up
            }
            setLastScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Close menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`fixed top-0 w-[100vw] z-50 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
            <header className="text-gray-600 body-font w-4/5 mt-12 rounded-3xl m-auto bg-white shadow-lg px-5 relative">
                <div className="container mx-auto flex p-5 flex-row items-center justify-between">
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900">
                        <img className='w-20' src="/assets/logo/logo.png" alt="" />
                    </Link>
                    {/* Desktop Nav */}
                    <nav className="md:ml-auto font-medium  flex-wrap items-center text-base justify-center mr-12 hidden md:flex">
                        <NavLink to="/" className={({ isActive }) =>
                            "mr-8 text-[20px] text-black cursor-pointer transition-transform duration-300 hover:scale-110" +
                            (isActive ? " underline decoration-2 underline-offset-8" : "")
                        }>Home</NavLink>
                        <NavLink to="/services" className={({ isActive }) =>
                            "mr-8 text-[20px] text-black cursor-pointer transition-transform duration-300 hover:scale-110" +
                            (isActive ? " underline decoration-2 underline-offset-8" : "")
                        }>Service</NavLink>
                        <NavLink to="/about" className={({ isActive }) =>
                            "mr-8 text-[20px] text-black cursor-pointer transition-transform duration-300 hover:scale-110" +
                            (isActive ? " underline decoration-2 underline-offset-8" : "")
                        }>About us</NavLink>
                        <NavLink to="/contact" className={({ isActive }) =>
                            "mr-8 text-[20px] text-black cursor-pointer transition-transform duration-300 hover:scale-110" +
                            (isActive ? " underline decoration-2 underline-offset-8" : "")
                        }>Contact us</NavLink>
                    </nav>
                    <Link to="/contact" className="hidden md:inline-flex items-center gradient-button font-medium text-white border-0 py-2 px-9 focus:outline-none rounded-lg text-base">Free Quote</Link>
                    {/* Hamburger Icon for mobile */}
                    <button className="md:hidden flex items-center px-3 py-2 border rounded text-[var(--primary)] border-[var(--primary)]" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
                        <svg className="fill-current h-7 w-7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                {/* Mobile Dropdown Nav - absolutely positioned, does not affect header height */}
                {menuOpen && (
                    <div className="md:hidden absolute left-0 top-full w-full bg-white shadow-lg rounded-2xl z-50 animate-fade-in-down">
                        <nav className="flex flex-col items-start gap-2 p-5">
                            <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) =>
                                "text-[20px] text-[var(--primary)] py-2 w-full" +
                                (isActive ? " underline decoration-2 underline-offset-8" : "")
                            }>Home</NavLink>
                            <NavLink to="/services" onClick={() => setMenuOpen(false)} className={({ isActive }) =>
                                "text-[20px] text-[var(--primary)] py-2 w-full" +
                                (isActive ? " underline decoration-2 underline-offset-8" : "")
                            }>Service</NavLink>
                            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) =>
                                "text-[20px] text-[var(--primary)] py-2 w-full" +
                                (isActive ? " underline decoration-2 underline-offset-8" : "")
                            }>About us</NavLink>
                            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) =>
                                "text-[20px] text-[var(--primary)] py-2 w-full" +
                                (isActive ? " underline decoration-2 underline-offset-8" : "")
                            }>Contact us</NavLink>
                            <Link to="/contact" onClick={() => setMenuOpen(false)} className="w-full bg-[var(--primary)] font-medium text-white border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded-lg text-base mt-2 text-center">Free Quote</Link>
                        </nav>
                    </div>
                )}
            </header>
        </div>
    )
}

export default Header
