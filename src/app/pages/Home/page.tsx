import React from 'react'

import Features from '../../layouts/home/features'
import Purpose from '../../layouts/home/pupose'
import Partners from '../../layouts/home/partners'
import Contact from '../../layouts/home/contactUs'
import NavBar from '../../layouts/core/navBar'
import Header from '../../layouts/home/header'
import Footer from '../../layouts/core/footer'

const HomePage = () => {
  return (
    <div className=" w-full overflow-x-hidden">
    <div><NavBar></NavBar></div>
    <div><Header></Header></div>
    <div><Features></Features></div>
    <div><Purpose></Purpose></div>
    <div><Partners></Partners></div>
    <div><Contact></Contact></div>
    <div><Footer></Footer></div>
  </div>
  )
}

export default HomePage