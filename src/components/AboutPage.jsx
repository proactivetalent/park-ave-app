import React from 'react'
import Header from './Header'
import MainAbout from './MainAbout'
import WCUAbout from './WCU-About'
import PreFooter from './PreFooter'
import Footer from './Footer'
import HeroAbout from './Hero-about'


const AboutPage = () => {
  return (
    <div>
      <Header /><HeroAbout/><MainAbout/><WCUAbout/><PreFooter/><Footer/>
    </div>
  )
}

export default AboutPage
