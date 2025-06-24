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
import WhyChooseUs from './components/WhyChooseUs'
import MainServices from './components/MainServices'
import HeroContact from './components/Hero-contact'
import { Features } from 'tailwindcss'
import FeaturesServices from './components/FeaturesServices'
import MainAbout from './components/MainAbout'
import Form from './components/ContactForm'


function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Header/><Hero/><Main/><WhyChooseUs/><Footer/></>
    },
    {
      path: '/services',
      element: <><Header /><HeroServices/><MainServices/><FeaturesServices/><WhyChooseUs/><Footer/></>
    },
    {
      path: '/about',
      element: <><Header /><HeroAbout/><MainAbout/><WhyChooseUs/><Footer/></>
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
