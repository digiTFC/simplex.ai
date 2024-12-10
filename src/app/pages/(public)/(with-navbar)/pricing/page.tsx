import { CallToAction } from '@/app/components/general-components/callToAction'
import Footer from '@/app/layouts/core/footer'
import NavBar from '@/app/layouts/core/navBar'

import React from 'react'
import Pricing from './_components/pricing'

 const PricingPage = () => {
  return (
    <div>
        <main className='3xl:w-8/12 m-auto'>
        <div className='py-16'>
            <Pricing></Pricing>
        </div>
        <div className=' w-10/12 m-auto py-10'>
            <CallToAction></CallToAction>
        </div>
        </main>

    </div>
  )
}
export  default PricingPage