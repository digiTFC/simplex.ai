import React from 'react'
import NavBar from '../layouts/navBar'
import Header from '../layouts/header'
import Features from '../layouts/features'
import Purpose from '../layouts/pupose'
import Partners from '../layouts/partners'
import Contact from '../layouts/contactUs'
import Footer from '../layouts/footer'
import CopyRight from '../layouts/copyright'

const Home = () => {
  return (
    <div className=" w-full overflow-x-hidden">
    <div><NavBar></NavBar></div>
    <div><Header></Header></div>
    <div><Features></Features></div>
    <div><Purpose></Purpose></div>
    <div><Partners></Partners></div>
    <div><Contact></Contact></div>
    <div><Footer></Footer></div>
    <div>
    <CopyRight></CopyRight>
    </div>
  </div>
  )
}

export default Home