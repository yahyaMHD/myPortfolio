import React, { useState } from 'react'
import Nav from '../Componenets/Nav'
import MobileNave from '../Componenets/MobileNave'
import HeroSection from '../Componenets/HeroSection'
import AboutSection from '../Componenets/AboutSection'
import ServicesSection from '../Componenets/ServicesSection'
import SkillesSection from '../Componenets/SkillesSection'
import ProjectsSection from '../Componenets/ProjectsSection'
import ReviewSection from '../Componenets/ReviewSection'
import FooterSection from '../Componenets/FooterSection'

const HomePage = () => {
  const [nav , setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)
  return (
    <div className="overflow-x-hidden font-primary">
      {/* NavBar */}
      <MobileNave nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />
      {/* Hero Section */}
      <HeroSection />
      {/* About Section */}
      <AboutSection />
      {/* services section */}
      <ServicesSection />
      {/* Skill Section */}
      <SkillesSection />
      {/* Projects Section */}
      <ProjectsSection/>
      {/* Review */}
      <ReviewSection/>
      {/* Footer */}
      <FooterSection/>
    </div>
  )
}

export default HomePage