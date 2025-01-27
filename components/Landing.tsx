import React from 'react'
import Navbar from './Navbar'
import NavHeader from './NavHeader'
import Carousel from './Carousel'
import FeaturedCakes from './FeaturedCakes'
import HomeFooter from './HomeFooter'

function Landing() {
  return (
    <main className='bg-background'>
      <NavHeader />
      <Navbar />
      <Carousel />
      <FeaturedCakes />
      <HomeFooter />
    </main>
  )
}

export default Landing