'use client'

import React from 'react'
import Slider from 'react-slick'

function SimpleSlider() {
  const settings = {
    dots: true, // Ensure dots are enabled
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Faster autoplay speed (2 seconds)
    slidesToScroll: 1,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: '-20px' }} className="custom-dots">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-700"></div>
    ),
  }

  // Data for slides
  const slides = [
    {
      id: 1,
      title: 'HAND-MADE SUGAR FLOWERS',
      description:
        'Take the stress out of making your own sugar flowers and impress with our wide range of flowers and sprays.',
      buttonText: 'Shop Now',
      imgSrc: '/images/carousel.jpg',
      bgColor: 'bg-purple-900',
    },
    {
      id: 2,
      title: 'BEAUTIFUL CAKE DESIGNS',
      description:
        'Create stunning cakes effortlessly with our exquisite designs and decorations.',
      buttonText: 'Explore Designs',
      imgSrc: '/images/carousel.jpg',
      bgColor: 'bg-blue-800',
    },
  ]

  return (
    <div className="slider-container max-w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`!flex items-center ${slide.bgColor} h-[426px] rounded-lg overflow-hidden`}
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
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SimpleSlider
