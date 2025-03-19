import Footer from '@/components/Footer'

import PageNavbar from '@/components/PageNavbar'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
        <PageNavbar/>
        <div className='mt-10'>
            <Testimonials/>
        </div>
        <Footer/>
    </div>
  )
}

export default page