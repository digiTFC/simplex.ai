import React from 'react'

import Features from './_components/features'
import Purpose from './_components/pupose'
import Partners from './_components/partners'
import Contact from './_components/contactUs'
import Header from './_components/header'


const HomePage = () => {
  return (
    <div className=" w-full overflow-x-hidden">
    <div><Header></Header></div>
    <div><Features></Features></div>
    <div><Purpose></Purpose></div>
    <div><Partners></Partners></div>
    <div><Contact></Contact></div>
  </div>
  )
}

export default HomePage