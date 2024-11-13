import { CallToAction } from '@/app/components/general-components/callToAction'
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
        <div className='w-10/12 m-auto py-10'>
            <CallToAction></CallToAction>
        </div>
        <div className=''>
            <Footer></Footer>
        </div>
    </div>
  )
}
export  default PricingPage