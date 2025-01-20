import React from 'react'
import { LoopsIllustration } from './loopsIllustration'
import Button from './button'
import Link from 'next/link'
import { Titles } from './Titles'

export const CallToAction = () => {
  return (
    
    <div className="mb-24 text-center border  dark:bg-klightGrey bg-white relative overflow-hidden  rounded-2xl py-16">
          <div className="absolute z-40 -top-40 -left-48">
                <LoopsIllustration></LoopsIllustration>
          </div>


          <div className="absolute z-30  top-40 -right-48">
                <LoopsIllustration></LoopsIllustration>
          </div>

          <div className="md:w-5/12 px-12 m-auto ">
            <Titles
              title="Join our team"
              TitleStyle="!text-[40px] z-50"
              subTitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, facere officiis cumque et, distinctio vero"
              subtitleStyle="py-6 z-50"
            ></Titles>
          </div>
          <div className="pt-6 z-50 ">
            <Link href={'auth/signup'}>
            <Button label="Get involved" ></Button>
            </Link>
          </div>
        </div>
  )
}
