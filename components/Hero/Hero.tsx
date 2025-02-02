'use client'
import React from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import img1 from '@/public/images/trp3.png'
import img2 from '@/public/images/trp2.png'
import { BiCycling } from 'react-icons/bi'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}

const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      showDots={true}
    >
      {/* slide 1 */}
      <div className="w-[100%] h-[82vh] flex items-center justify-center flex-col bg-blue-950 md:clip_path ">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          {/* image */}
          <Image src={img1} alt="cake" className="hidden md:block" />
          {/* info */}
          <div>
            <h1 className="text-[40px] font-semibold text-yellow-400">
              Hand-Made Cakes
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
              Best <br /> Cakes
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
              Create stunning cakes effortlessly with our exquisite designs and
              decorations.Create stunning cakes effortlessly with our exquisite
              designs and decorations.
            </p>
            <button className="px-8 mt-[2rem] py-3 text-[16px] bg-green-500 transition-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white">
              <span>
                <BiCycling className="w-[1.3rem] h-[1.3rem] sm:h-[1.7rem] sm:w-[1.7rem]" />
              </span>
              <span className="font-bold">Order Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* slide 2*/}
      <div className="w-[100%] h-[82vh] flex items-center justify-center flex-col bg-red-950 md:clip_path ">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          {/* image */}
          <Image src={img2} alt="cake" className="hidden md:block" />
          {/* info */}
          <div>
            <h1 className="text-[40px] font-semibold text-yellow-400">
              Tasty Cakes
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
              Top <br /> Cakes
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
              Create stunning cakes effortlessly with our exquisite designs and
              decorations.Create stunning cakes effortlessly with our exquisite
              designs and decorations.
            </p>
            <button className="px-8 mt-[2rem] py-3 text-[16px] bg-blue-500 transition-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white">
              <span>
                <BiCycling className="w-[1.3rem] h-[1.3rem] sm:h-[1.7rem] sm:w-[1.7rem]" />
              </span>
              <span className="font-bold">Order Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* slide 3*/}
      <div className="w-[100%] h-[82vh] flex items-center justify-center flex-col bg-brown md:clip_path ">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          {/* image */}
          <Image src={img2} alt="cake" className="hidden md:block" />
          {/* info */}
          <div>
            <h1 className="text-[40px] font-semibold text-yellow-400">
              Tasty Cakes
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
              Top <br /> Cakes
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
              Create stunning cakes effortlessly with our exquisite designs and
              decorations.Create stunning cakes effortlessly with our exquisite
              designs and decorations.
            </p>
            <button className="px-8 mt-[2rem] py-3 text-[16px] bg-blue-500 transition-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white">
              <span>
                <BiCycling className="w-[1.3rem] h-[1.3rem] sm:h-[1.7rem] sm:w-[1.7rem]" />
              </span>
              <span className="font-bold">Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  )
}

export default Hero
