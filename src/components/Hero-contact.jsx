import React from 'react'
import { Link } from 'react-router-dom'

const HeroContact = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20 lg:gap-44 md:pt-30 hero h-[100vh] bg-[url('/assets/contact/hero-contact.png')] bg-cover bg-center bg-no-repeat m-0 p-0 relative before:content-[''] before:absolute before:inset-0 px-4 md:px-0">
        <div className="flex flex-col items-center text relative z-10 text-white font-medium w-full md:w-auto text-center md:text-left px-2 md:px-0">
          <h1 className="relative z-10 text-4xl sm:text-5xl md:text-[80px] 2xl:text-[96px] font-bold text-white">CONTACT US</h1>
        </div>
      </div>
    </div>
  )
}

export default HeroContact
