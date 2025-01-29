'use client'

import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import { CarouselSlides } from '@/utils/CarouselSlides'
import clsx from 'clsx'

function SimpleSlider() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100) // Slight delay to trigger slide-in animation
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500, // Subtle and calm fade duration
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    fade: true, // Enable fade effect
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <ul style={{ margin: '10px', paddingBottom: '20px' }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-gray-400 rounded-full hover:bg-gray-700"></div>
    ),
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }} // Start below the screen and transparent
      animate={isLoaded ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 1.5, ease: 'easeOut' }} // Smooth and subtle transition
      className="slider-container max-w-full overflow-hidden relative pb-10 mt-5"
    >
      <Slider {...settings}>
        {CarouselSlides.map((slide) => (
          <div
            key={slide.id}
            className={clsx(
              '!flex items-center h-[500px] overflow-hidden',
              {
                'bg-red-900': slide.bgColor === 'red-900',
                'bg-purple-900': slide.bgColor === 'purple-900',
                'bg-blue-900': slide.bgColor === 'blue-900',
                'bg-neutral-50': slide.bgColor === 'neutral-50',
                'bg-rose-900': slide.bgColor === 'rose-900',
                'bg-yellow-900': slide.bgColor === 'yellow-900',
              } // Map all possible colors
            )}
          >
            {/* Text Content */}
            <div className="w-1/2 text-white px-8">
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg mb-6">{slide.description}</p>
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200">
                {slide.buttonText}
              </button>
            </div>
            {/* Image */}
            <div className="w-1/2 h-full">
              <img
                src={slide.imgSrc}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  )
}

export default SimpleSlider
