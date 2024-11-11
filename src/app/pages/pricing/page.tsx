import Footer from '@/app/layouts/core/footer'
import NavBar from '@/app/layouts/core/navBar'
import Pricing from '@/app/layouts/pricing'
import React from 'react'

 const PricingPage = () => {
  return (
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        <div className='py-16'>
            <Pricing></Pricing>
        </div>
        <div className='pt-16'>
            <Footer></Footer>
        </div>
    </div>
  )
}
export  default PricingPage