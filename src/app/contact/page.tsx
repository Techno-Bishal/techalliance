import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PageNavbar from '@/components/PageNavbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <PageNavbar/>
        <div className='mt-10'>
            <Contact/>
        </div>
        <Footer/>
    </div>
  )
}

export default page