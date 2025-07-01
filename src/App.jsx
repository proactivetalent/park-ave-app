import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactPage from './components/ContactPage'
import HomePage from './components/HomePage'
import ServicesPage from './components/ServicesPage'
import AboutPage from './components/AboutPage'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import TermsPage from './components/TermsPage'


function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><HomePage/></>
    },
    {
      path: '/services',
      element: <><ServicesPage/></>
    },
    {
      path: '/about',
      element: <><AboutPage/></>
    },
    {
      path: '/contact',
      element: <><ContactPage/></>
    },
    {
      path: '/privacypolicy',
      element: <><PrivacyPolicyPage/></>
    },
    {
      path: '/terms',
      element: <><TermsPage/></>
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
