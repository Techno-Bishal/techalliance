import Footer from '@/components/Footer'
import OurTeam from '@/components/OurTeam'
import PageNavbar from '@/components/PageNavbar'
import React from 'react'

const page = () => {
  return (
    <div>

        <PageNavbar/>
        <div className='mt-10'>
        <OurTeam/>
        </div>
        <Footer/>
    </div>
  )
}

export default page