// import React from 'react'
// import Navbar from './LandingPage/Navbar'
// import Hero from './LandingPage/Hero'
// import Motivation from './LandingPage/Motivation'
// import Footer from './LandingPage/Footer'

import Navbar from "./LandingPage/Navbar"
import Hero from "./LandingPage/Hero"
import Motivation from "./LandingPage/Motivation"
import Footer from "./LandingPage/Footer"

const LandingPage = () => {
  return (
    <div className="bg-primary-dark-blue">
    <div className=" bg-neutral-white px-28  py-2">
      <Navbar/>
      <div className="relative overflow-hidden">
        <div className="hidden lg:block w-full h-full absolute">
          <div className="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-auto bg-right-top -right-72 xl:-right-28"></div>
        </div>
        <Hero />
        <Motivation/>
      </div>
    </div>
    <div className="px-28">
    <Footer />

    </div>
    </div>
  )
}

export default LandingPage