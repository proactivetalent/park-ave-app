import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactPage from './components/ContactPage'
import HomePage from './components/HomePage'
import ServicesPage from './components/ServicesPage'
import AboutPage from './components/AboutPage'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import TermsPage from './components/TermsPage'
import Layout from './components/Layout'


function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout><HomePage/></Layout>
    },
    {
      path: '/services',
      element: <Layout><ServicesPage/></Layout>
    },
    {
      path: '/about',
      element: <Layout><AboutPage/></Layout>
    },
    {
      path: '/contact',
      element: <Layout><ContactPage/></Layout>
    },
    {
      path: '/privacypolicy',
      element: <Layout><PrivacyPolicyPage/></Layout>
    },
    {
      path: '/terms',
      element: <Layout><TermsPage/></Layout>
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
