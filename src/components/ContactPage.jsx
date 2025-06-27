import React from 'react'
import Header from './Header'
import HeroContact from './Hero-contact'
import Footer from './Footer'
import Form from './ContactForm'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ContactPage = () => {

    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);

  return (
    <div>
      <Header/><HeroContact/><Form/><Footer/>
    </div>
  )
}

export default ContactPage
