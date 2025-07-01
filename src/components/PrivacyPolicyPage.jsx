import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HeroPrivacyPolicy from './Hero-PrivacyPolicy'
import MainPrivacyPolicy from './MainPrivacyPolicy'


const PrivacyPolicyPage = () => {
  return (
    <div>
      <Header /><HeroPrivacyPolicy/><MainPrivacyPolicy/> <Footer/>
    </div>
  )
}

export default PrivacyPolicyPage
