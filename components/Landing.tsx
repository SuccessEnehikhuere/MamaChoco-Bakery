'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Feature from './Features/Feature'
import PopularCakes from './PopularCakes/PopularCakes'
import Delivery from './Delivery/Delivery'
import Reservation from './Reservation/Reservation'
import PersonalizedCakes from './PersonalizedCakes/PersonalizedCakes'
import AOS from 'aos'
import 'aos/dist/aos.css' 


const Landing = () => {
  useEffect(()=>{
     const initAOS = async ()=>{
       await import("aos");
       AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-center'
       })
     }

     initAOS();
  }, [])

  return (
    <main className='overflow-hidden bg-[#f4f1ea]'>
      <Hero />
      <Feature />
      <PopularCakes />
      <Delivery />
      <Reservation />
      <PersonalizedCakes/>
    </main>
  )
}

export default Landing