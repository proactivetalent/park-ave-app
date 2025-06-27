import React from 'react'
import Header from './Header'
import HeroServices from './Hero-services'
import MainServices from './MainServices'
import FeaturesServices from './FeaturesServices'
import WCUService from './WCU-Service'
import PreFooter from './PreFooter'
import Footer from './Footer'

const ServicesPage = () => {
  return (
    <div>
      <Header /><HeroServices/><MainServices/><FeaturesServices/><WCUService/><PreFooter/><Footer/>
    </div>
  )
}

export default ServicesPage
