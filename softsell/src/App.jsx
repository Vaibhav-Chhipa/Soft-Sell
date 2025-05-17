import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import DarkModeToggle from "./components/DarkModeToggle";
import './App.css'

function App() {

  return (
    <>

      <div className="fixed top-4 right-4 z-50">
        <DarkModeToggle />
      </div>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </>
  )
}

export default App
