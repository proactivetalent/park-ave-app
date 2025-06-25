import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Main from './components/Main'
import HeroServices from './components/Hero-services'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HeroAbout from './components/Hero-about'
import HeroReview from './components/Hero-review'
import Footer from './components/Footer'
import MainServices from './components/MainServices'
import HeroContact from './components/Hero-contact'
import { Features } from 'tailwindcss'
import FeaturesServices from './components/FeaturesServices'
import MainAbout from './components/MainAbout'
import Form from './components/ContactForm'
import PreFooter from './components/PreFooter'
import WCUMain from './components/WCU-Main'
import WCUService from './components/WCU-Service'
import WCUAbout from './components/WCU-About'


function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Header/><Hero/><Main/><WCUMain/><PreFooter/><Footer/></>
    },
    {
      path: '/services',
      element: <><Header /><HeroServices/><MainServices/><FeaturesServices/><WCUService/><PreFooter/><Footer/></>
    },
    {
      path: '/about',
      element: <><Header /><HeroAbout/><MainAbout/><WCUAbout/><PreFooter/><Footer/></>
    },
    {
      path: '/review',
      element: <><Header /><HeroReview/></>
    },
    {
      path: '/contact',
      element: <><Header /><HeroContact/><Form/><Footer/></>
    }
  ])

  return (
    <>


<RouterProvider router={router} />
      {/* <Header />
      <Hero />
      <Intro /> */}

      

    </>
  )
}

export default App
