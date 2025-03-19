import Footer from '@/components/Footer'
import PageNavbar from '@/components/PageNavbar'
import ServicesSection from '@/components/ServicesSection'
import React from 'react'

const page = () => {
  return (
    <div>
        <PageNavbar/>
        <div className='mt-15'>
        <ServicesSection/>
        </div> 
        <Footer/>
    </div>
  )
}

export default page