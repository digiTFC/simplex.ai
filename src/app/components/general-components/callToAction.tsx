import React from 'react'
import { LoopsIllustration } from './loopsIllustration'
import Titles from './Titles'
import Button from './button'

export const CallToAction = () => {
  return (
    
    <div className="mb-24 text-center bg-klightGrey relative overflow-hidden  rounded-2xl py-16">
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
            <Button label="Join Us" ></Button>
          </div>
        </div>
  )
}
