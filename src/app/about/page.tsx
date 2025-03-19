
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import PageAbout from '@/components/PageAbout'
import PageNavbar from '@/components/PageNavbar'

import React from 'react'

const AboutPage = () => {
  return (
    <div>
        <PageNavbar/>
        <div className='mt-10'>
        <PageAbout/>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutPage