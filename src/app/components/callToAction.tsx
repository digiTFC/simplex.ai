import React from 'react'
import { LoopsIllustration } from './loopsIllustration'
import Button from './button'
import Link from 'next/link'
import { Titles } from './Titles'

export const CallToAction = () => {
  return (
    
    <div className="mb-24 text-center border  dark:bg-klightGrey bg-white relative overflow-hidden  rounded-2xl md:py-16 py-7">


          <div className="md:w-5/12 px-6 md:px-12 m-auto z-50 ">
            <Titles
              title="Join our team"
              bigTitle={true}
              TitleStyle=" z-50"
              subTitle="Join a team that values your skills and ideas! Whether you're experienced or just starting, there's a place for you here."
              subtitleStyle="py-6 z-50"
            ></Titles>
          </div>
          <div className="pt-6 z-50 ">
            <Link href={'auth/signup'} className='z-50 relative'>
            <Button label="Get involved" ></Button>
            </Link>
          </div>
          <div className="absolute opacity-50 -top-40 -left-48">
                <LoopsIllustration></LoopsIllustration>
          </div>


          <div className="absolute opacity-50 z-10 top-40 -right-48">
                <LoopsIllustration></LoopsIllustration>
          </div>
        </div>
  )
}
